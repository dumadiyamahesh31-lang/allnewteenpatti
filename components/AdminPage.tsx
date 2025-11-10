import React, { useState, useEffect } from 'react';
import { AppInfo, FeaturedApp, FAQ } from '../types';
import { TABS } from '../constants';

type EditableApp = AppInfo | FeaturedApp;
type AppType = 'app' | 'featured';

// --- HELPER COMPONENTS ---

const InputField: React.FC<any> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input {...props} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
    </div>
);
const TextAreaField: React.FC<any> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea {...props} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
    </div>
);
const CheckboxField: React.FC<any> = ({ label, ...props }) => (
    <div className="flex items-center">
        <input {...props} type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
        <label className="ml-2 block text-sm text-gray-900">{label}</label>
    </div>
);

// --- FORM COMPONENTS ---

interface AppFormProps {
    app: EditableApp | null;
    appType: AppType;
    onSave: (app: EditableApp) => void;
    onCancel: () => void;
}

const AppForm: React.FC<AppFormProps> = ({ app, appType, onSave, onCancel }) => {
    const [formData, setFormData] = useState<any>({});
    const [imagePreviewError, setImagePreviewError] = useState(false);

    useEffect(() => {
        if (app) {
            let initialData: any = { ...app };
            if ('details' in app && app.details) {
                initialData.details = app.details.join('\n');
            }
             if ('tags' in app && app.tags) {
                initialData.tags = app.tags.join(', ');
            }
            if (!('categories' in initialData)) {
                initialData.categories = [];
            }
            setFormData(initialData);
        } else {
            setFormData({ categories: [] });
        }
        setImagePreviewError(false);
    }, [app]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        if (name === 'image') {
            setImagePreviewError(false);
        }

        if (type === 'checkbox') {
            const { checked, id } = e.target as HTMLInputElement;
            if (name === "categories") {
                const currentCategories = formData.categories || [];
                if (checked) {
                    setFormData({ ...formData, categories: [...currentCategories, id] });
                } else {
                    setFormData({ ...formData, categories: currentCategories.filter((cat: string) => cat !== id) });
                }
            } else {
                 setFormData({ ...formData, [name]: checked });
            }
        } else if (type === 'number') {
            const num = parseInt(value, 10);
            setFormData({ ...formData, [name]: isNaN(num) ? undefined : num });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                alert('File is too large. Please select an image under 2MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result as string });
                setImagePreviewError(false);
            };
            reader.onerror = () => {
                console.error("Error reading file");
                setImagePreviewError(true);
            }
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let finalData = { ...formData };
        if (appType === 'app') {
            if (typeof formData.details === 'string') {
                finalData.details = formData.details.split('\n').filter((line: string) => line.trim() !== '');
            }
            if (typeof formData.tags === 'string') {
                finalData.tags = formData.tags.split(',').map((t:string) => t.trim()).filter(Boolean);
            }
        }
        onSave(finalData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-full overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{app ? 'Edit App' : 'Add New App'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField name="name" label="App Name" value={formData.name || ''} onChange={handleChange} required />
                    <InputField name="rank" label="Rank" type="number" value={formData.rank || ''} onChange={handleChange} required />
                    <InputField name="image" label="Image URL" value={formData.image || ''} onChange={handleChange} required />
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Or Upload Image</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InputField name="imageWidth" label="Image Width (px)" type="number" placeholder="e.g. 80" value={formData.imageWidth || ''} onChange={handleChange} />
                        <InputField name="imageHeight" label="Image Height (px)" type="number" placeholder="e.g. 80" value={formData.imageHeight || ''} onChange={handleChange} />
                    </div>

                    {formData.image && formData.image.trim() && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image Preview:</label>
                            {imagePreviewError ? (
                                <div className="mt-2 h-20 w-20 rounded-lg border p-1 flex items-center justify-center bg-gray-100 text-gray-500 text-xs text-center">
                                    Invalid URL or image
                                </div>
                            ) : (
                                <img 
                                    src={formData.image} 
                                    alt="App Preview" 
                                    className="mt-2 h-20 w-20 rounded-lg border p-1 object-contain"
                                    onError={() => setImagePreviewError(true)}
                                />
                            )}
                        </div>
                    )}

                    <InputField name="downloadUrl" label="Download URL" value={formData.downloadUrl || ''} onChange={handleChange} required />

                    {appType === 'featured' && (
                        <>
                            <InputField name="rating" label="Rating (1-5)" type="number" value={formData.rating || ''} onChange={handleChange} min={1} max={5} required />
                            <InputField name="securityText" label="Security Text" value={formData.securityText || ''} onChange={handleChange} required />
                        </>
                    )}

                    {appType === 'app' && (
                        <>
                            <InputField name="postTitle" label="Post Title (for Google Search)" placeholder="e.g. Rummy Gold APK Download - Get ₹51 Bonus" value={formData.postTitle || ''} onChange={handleChange} />
                            <TextAreaField name="details" label="Details (one per line)" value={formData.details || ''} onChange={handleChange} />
                            <InputField name="tags" label="Tags (comma-separated for slider)" placeholder="e.g. Rummy, Real Cash, Bonus" value={formData.tags || ''} onChange={handleChange} />
                            <CheckboxField name="isComingSoon" label="Coming Soon" checked={formData.isComingSoon || false} onChange={handleChange} />
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Categories</label>
                                <div className="mt-2 space-y-2">
                                    {TABS.map(tab => (
                                        <CheckboxField
                                            key={tab}
                                            id={tab}
                                            name="categories"
                                            label={tab}
                                            checked={formData.categories?.includes(tab) || false}
                                            onChange={handleChange}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


interface FAQFormProps {
    faq: FAQ | null;
    onSave: (faq: FAQ) => void;
    onCancel: () => void;
}

const FAQForm: React.FC<FAQFormProps> = ({ faq, onSave, onCancel }) => {
    const [formData, setFormData] = useState<FAQ>({ q: '', a: '' });

    useEffect(() => {
        setFormData(faq || { q: '', a: '' });
    }, [faq]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[60] p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-full overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{faq && faq.q ? 'Edit FAQ' : 'Add New FAQ'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField name="q" label="Question" value={formData.q} onChange={handleChange} required />
                    <TextAreaField name="a" label="Answer (HTML allowed)" value={formData.a} onChange={handleChange} required />
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- FAQ MANAGER COMPONENT ---

interface AppFAQManagerProps {
    app: AppInfo;
    onSave: (updatedApp: AppInfo) => void;
    onCancel: () => void;
}

const AppFAQManager: React.FC<AppFAQManagerProps> = ({ app, onSave, onCancel }) => {
    const [faqs, setFaqs] = useState<FAQ[]>(() => app.faqs ? [...app.faqs] : []);
    const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [originalQuestion, setOriginalQuestion] = useState<string | null>(null);

    const handleAddNew = () => {
        setIsAddingNew(true);
        setEditingFaq({ q: '', a: '' });
    };

    const handleEdit = (faq: FAQ) => {
        setIsAddingNew(false);
        setOriginalQuestion(faq.q);
        setEditingFaq(faq);
    };
    
    const handleDelete = (question: string) => {
        if (window.confirm(`Are you sure you want to delete the FAQ: "${question}"?`)) {
            setFaqs(currentFaqs => currentFaqs.filter(f => f.q !== question));
        }
    };
    
    const handleSaveFaq = (faq: FAQ) => {
        if (isAddingNew) {
            if (faqs.some(f => f.q.toLowerCase() === faq.q.toLowerCase())) {
                alert('A FAQ with this question already exists for this app.');
                return;
            }
            setFaqs(prev => [...prev, faq]);
        } else {
            setFaqs(prev => prev.map(f => f.q === originalQuestion ? faq : f));
        }
        setEditingFaq(null);
    };

    const handleSaveChanges = () => {
        onSave({ ...app, faqs });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Manage FAQs for <span className="text-blue-600">{app.name}</span></h2>
                
                <div className="flex justify-end mb-4">
                    <button onClick={handleAddNew} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Add New FAQ</button>
                </div>

                <div className="space-y-3 overflow-y-auto flex-grow mb-4 pr-2">
                    {faqs.length > 0 ? faqs.map(faq => (
                        <div key={faq.q} className="flex items-start bg-gray-50 p-3 rounded-lg">
                            <div className="flex-grow min-w-0">
                                <p className="font-bold break-words">{faq.q}</p>
                            </div>
                            <div className="space-x-2 flex-shrink-0 ml-4">
                                <button onClick={() => handleEdit(faq)} className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">Edit</button>
                                <button onClick={() => handleDelete(faq.q)} className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">Delete</button>
                            </div>
                        </div>
                    )) : <p className="text-center text-gray-500">No FAQs for this app yet.</p>}
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                    <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                    <button type="button" onClick={handleSaveChanges} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Changes & Close</button>
                </div>

                {editingFaq && (
                    <FAQForm faq={editingFaq} onSave={handleSaveFaq} onCancel={() => setEditingFaq(null)} />
                )}
            </div>
        </div>
    );
}


// --- MAIN ADMIN PAGE COMPONENT ---

interface AdminPageProps {
    apps: AppInfo[];
    setApps: React.Dispatch<React.SetStateAction<AppInfo[]>>;
    featuredApps: FeaturedApp[];
    setFeaturedApps: React.Dispatch<React.SetStateAction<FeaturedApp[]>>;
    onLogout: () => void;
    siteLogoUrl: string;
    setSiteLogoUrl: (url: string) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ apps, setApps, featuredApps, setFeaturedApps, onLogout, siteLogoUrl, setSiteLogoUrl }) => {
    const [editingApp, setEditingApp] = useState<EditableApp | null>(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [currentAppType, setCurrentAppType] = useState<AppType>('app');
    const [managingFaqsForApp, setManagingFaqsForApp] = useState<AppInfo | null>(null);
    const [logoUrlInput, setLogoUrlInput] = useState(siteLogoUrl);
    const [logoPreviewError, setLogoPreviewError] = useState(false);

    useEffect(() => {
        setLogoUrlInput(siteLogoUrl);
    }, [siteLogoUrl]);
    
    useEffect(() => {
        setLogoPreviewError(false);
    }, [logoUrlInput]);

    const handleLogoSave = () => {
        setSiteLogoUrl(logoUrlInput);
        alert('Site logo updated successfully!');
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1 * 1024 * 1024) { // 1MB limit for logo
                alert('File is too large. Please select an image under 1MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoUrlInput(reader.result as string);
                setLogoPreviewError(false);
            };
            reader.onerror = () => {
                console.error("Error reading file for logo");
                setLogoPreviewError(true);
            }
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = (app: EditableApp, type: AppType) => {
        setCurrentAppType(type);
        setEditingApp(app);
        setIsAddingNew(false);
    };
    
    const handleAddNew = (type: AppType) => {
        const newAppTemplate = type === 'app' 
            ? { rank: 0, name: '', image: '', details: [], isComingSoon: false, downloadUrl: '', postTitle: '', categories: [], tags: [] }
            : { rank: 0, name: '', image: '', rating: 5, securityText: '', downloadUrl: '' };
        
        setCurrentAppType(type);
        setEditingApp(newAppTemplate);
        setIsAddingNew(true);
    };

    const handleDelete = (appName: string, type: AppType) => {
        if (window.confirm(`Are you sure you want to delete "${appName}"?`)) {
            if (type === 'app') {
                setApps(prev => prev.filter(a => a.name !== appName));
            } else {
                setFeaturedApps(prev => prev.filter(a => a.name !== appName));
            }
        }
    };

    const handleSave = (app: EditableApp) => {
        const list = currentAppType === 'app' ? apps : featuredApps;
        const setList = currentAppType === 'app' ? setApps : setFeaturedApps;
        
        if (isAddingNew) {
            if(list.some(existingApp => existingApp.name === app.name)) {
                alert('An app with this name already exists. Please use a unique name.');
                return;
            }
            // @ts-ignore
            setList(prev => [...prev, app]);
        } else {
            // @ts-ignore
            setList(prev => prev.map(a => (a.name === (editingApp as EditableApp).name ? app : a)));
        }
        setEditingApp(null);
    };
    
    const handleCancel = () => {
        setEditingApp(null);
    }
    
    // Per-App FAQ Handlers
    const handleSaveAppFaqs = (updatedApp: AppInfo) => {
        setApps(prevApps => prevApps.map(a => a.name === updatedApp.name ? updatedApp : a));
        setManagingFaqsForApp(null);
    };

    const handleCancelAppFaqs = () => {
        setManagingFaqsForApp(null);
    };

    const renderAppList = (list: EditableApp[], type: AppType) => (
        <div className="space-y-3">
            {list.map(app => (
                <div key={app.name} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                    <img src={app.image} alt={app.name} className="w-12 h-12 rounded-md mr-4 object-contain"/>
                    <div className="flex-grow">
                        <p className="font-bold">{app.name}</p>
                        <p className="text-sm text-gray-500">Rank: {app.rank}</p>
                    </div>
                    <div className="space-x-2">
                        {type === 'app' && (
                            <button onClick={() => setManagingFaqsForApp(app as AppInfo)} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">Manage FAQs</button>
                        )}
                        <button onClick={() => handleEdit(app, type)} className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">Edit</button>
                        <button onClick={() => handleDelete(app.name, type)} className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto my-8 p-4">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                    <img src={siteLogoUrl} alt="Site Logo" className="h-10 w-10 rounded-lg object-contain" />
                    <h1 className="text-3xl font-bold text-[#0f2e5c]">Admin Panel</h1>
                </div>
                <button
                    onClick={onLogout}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                    Logout
                </button>
            </div>
            
            {editingApp && (
                <AppForm 
                    app={isAddingNew ? null : editingApp} 
                    appType={currentAppType} 
                    onSave={handleSave} 
                    onCancel={handleCancel} 
                />
            )}

            {managingFaqsForApp && (
                <AppFAQManager 
                    app={managingFaqsForApp}
                    onSave={handleSaveAppFaqs}
                    onCancel={handleCancelAppFaqs}
                />
            )}

            <div className="space-y-8">
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Site Settings</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Site Logo URL</label>
                            <input
                                type="text"
                                value={logoUrlInput}
                                onChange={(e) => setLogoUrlInput(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="https://example.com/logo.png"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Or Upload Logo</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleLogoUpload} 
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Logo Preview:</p>
                            {logoPreviewError || !logoUrlInput.trim() ? (
                                <div className="mt-2 h-16 w-16 rounded-lg border p-1 flex items-center justify-center bg-gray-100 text-gray-500 text-xs text-center">
                                    {logoUrlInput.trim() ? 'Invalid URL or image' : 'Enter URL or upload'}
                                </div>
                            ) : (
                                <img 
                                    src={logoUrlInput} 
                                    alt="Logo Preview" 
                                    className="mt-2 h-16 w-16 rounded-lg border p-1 object-contain"
                                    onError={() => setLogoPreviewError(true)}
                                />
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleLogoSave}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Save Logo
                            </button>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Manage Featured Apps</h2>
                        <button onClick={() => handleAddNew('featured')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Add Featured App</button>
                    </div>
                    {renderAppList(featuredApps, 'featured')}
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Manage All Apps (and Slider Tags)</h2>
                        <button onClick={() => handleAddNew('app')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Add App</button>
                    </div>
                    {renderAppList(apps, 'app')}
                </section>
            </div>
        </div>
    );
};

export default AdminPage;