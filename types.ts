export interface FeaturedApp {
  rank: number;
  name: string;
  image: string;
  rating: number;
  securityText: string;
  downloadUrl: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface AppInfo {
  rank: number;
  name: string;
  image: string;
  details: string[];
  isComingSoon: boolean;
  downloadUrl: string;
  faqs?: FAQ[];
  postTitle?: string;
  categories?: string[];
  tags?: string[];
  imageWidth?: number;
  imageHeight?: number;
}

export interface FAQ {
  q: string;
  a: string;
}