
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

interface FooterLink {
  label: string;
  view: View;
}

const footerLinks: FooterLink[] = [
    { label: 'Contact', view: 'Contact' },
    { label: 'Privacy', view: 'Privacy' },
    { label: 'Terms & Conditions', view: 'Terms' },
    { label: 'Disclaimer', view: 'Disclaimer' },
    { label: 'About', view: 'About' },
];


const Footer: React.FC<FooterProps> = ({ setView }) => {
    const handleLinkClick = (e: React.MouseEvent, view: View) => {
        e.preventDefault();
        setView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <footer className="bg-[#0f2e5c] text-white py-8 px-4">
            <div className="max-w-4xl mx-auto text-center">

                <div className="mb-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                    {footerLinks.map(link => (
                        <a 
                            href="#" 
                            key={link.view}
                            onClick={(e) => handleLinkClick(e, link.view)}
                            className="border border-gray-400 rounded-full px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                
                <div className="mb-6 bg-red-900/50 border border-red-500 rounded-lg p-4 text-sm text-red-100">
                    <h3 className="font-bold text-lg mb-2 text-white">Disclaimer</h3>
                    <p>
                        This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk. This service is not available for users from the states of <strong>Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</strong>. Players must be 18 years or older.
                    </p>
                </div>
                
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} AllNewTeenPatti.com. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;