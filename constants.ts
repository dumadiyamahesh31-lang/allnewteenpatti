import { FeaturedApp, AppInfo } from './types';

// Fix: Added missing properties (rating, securityText, downloadUrl) to FEATURED_APPS objects and added more items for a better UI.
export const FEATURED_APPS: FeaturedApp[] = [
  {
    rank: 1,
    name: "Teen Patti Gold",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Teen-Patti-Gold-App-Download.webp",
    rating: 5,
    securityText: "100% Safe",
    downloadUrl: "https://www.earntp.com/m/v08lyq"
  },
  {
    rank: 2,
    name: "Teen Patti Master",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Teen-Patti-Master-App-Download.webp",
    rating: 5,
    securityText: "100% Secure",
    downloadUrl: "https://www.earntp.com/m/v08lyq",
  },
  {
    rank: 3,
    name: "Teen Patti Nabob",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Nabob-App-Download.webp",
    rating: 4,
    securityText: "Trusted App",
    downloadUrl: "https://www.earntp.com/m/v08lyq"
  }
];

export const TABS = ["Top Trending", "New Teen Patti", "All Yono Apps"];

export const APP_LIST: AppInfo[] = [
  {
    rank: 1,
    name: "Teen Patti Master",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Teen-Patti-Master-App-Download.webp",
    details: ["Bonus: ₹41", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Master App Download - Get ₹41 Bonus",
    faqs: [
        {
            q: "How to register on Teen Patti Master?",
            a: "You can register using your mobile number. You'll receive an OTP for verification. Once verified, your account is created and the bonus is credited."
        },
        {
            q: "Is Teen Patti Master safe to play?",
            a: "Yes, Teen Patti Master is a secure platform with thousands of daily players. We ensure all transactions are safe."
        }
    ],
    categories: ["Top Trending"],
    tags: ["Teen Patti", "Master App", "Bonus ₹41", "Real Cash"]
  },
  {
    rank: 2,
    name: "Teen Patti Gold",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Teen-Patti-Gold-App-Download.webp",
    details: ["Bonus: ₹51", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Gold APK Download - ₹51 Welcome Bonus",
    faqs: [
        {
            q: "What is the welcome bonus for Teen Patti Gold?",
            a: "New users get a welcome bonus of ₹51 upon successful registration."
        }
    ],
    categories: ["Top Trending"],
    tags: ["Teen Patti Gold", "APK Download", "Bonus ₹51"]
  },
  {
    rank: 3,
    name: "Teen Patti Nabob",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Nabob-App-Download.webp",
    details: ["Bonus: ₹40", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Nabob - Download and Get ₹40 Bonus",
    categories: ["Top Trending"],
    tags: ["Rummy Nabob", "Teen Patti Nabob", "Bonus ₹40"]
  },
  {
    rank: 4,
    name: "Yono Rummy Store",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADhAOEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/v4ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",
    details: ["Bonus: ₹155", "Min. Withdraw: ₹110"],
    isComingSoon: true,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Yono Rummy Store App - Coming Soon with ₹155 Bonus",
    categories: ["New Teen Patti", "All Yono Apps"],
    tags: ["Yono Rummy Store", "Yono Rummy", "New App"]
  },
  {
    rank: 0,
    name: "Holy Teen Patti",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Holy-Rummy-App-Download.webp",
    details: ["Bonus: ₹51", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Download Holy Teen Patti App - ₹51 Bonus",
    categories: ["Top Trending"],
    tags: ["Holy Rummy", "Bonus ₹51"]
  },
   {
    rank: 5,
    name: "Teen Patti Most",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Most-App-Download.webp",
    details: ["Bonus: ₹51", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Most - Official APK Download",
    categories: ["Top Trending"],
    tags: ["Rummy Most", "Teen Patti Most"]
  },
  {
    rank: 6,
    name: "Rummy Golds",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Gold-App-Download.webp",
    details: ["Bonus: ₹45", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Rummy Golds - Download and Play",
    categories: ["New Teen Patti"],
    tags: ["Rummy", "Golds Rummy"]
  },
  {
    rank: 7,
    name: "Teen Patti Joy",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Teen-Patti-Joy-App-Download.webp",
    details: ["Bonus: ₹55", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Joy - Get Welcome Bonus",
    categories: ["New Teen Patti"],
    tags: ["Teen Patti Joy", "Bonus ₹55"]
  },
  {
    rank: 8,
    name: "Rummy Wealth",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Wealth-App-Download.webp",
    details: ["Bonus: ₹60", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Rummy Wealth - Official Site",
    categories: ["New Teen Patti"],
    tags: ["Rummy Wealth", "Bonus ₹60"]
  },
  {
    rank: 9,
    name: "Teen Patti Club",
    image: "https://allnewteenpatti.com/wp-content/uploads/2024/05/Yono-Rummy-App-Download.webp",
    details: ["Bonus: ₹30", "Min. Withdraw: ₹110"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Teen Patti Club - Download Now",
    categories: ["New Teen Patti"],
    tags: ["Teen Patti Club", "Bonus ₹30"]
  },
  {
    rank: 10,
    name: "Rummy Modern",
    image: "https://allnewteenpatti.com/wp-content/uploads/2023/10/Rummy-Modern-App-Download.webp",
    details: ["Bonus: ₹50", "Min. Withdraw: ₹100"],
    isComingSoon: false,
    downloadUrl: "https://www.earntp.com/m/v08lyq",
    postTitle: "Rummy Modern - Play and Earn",
    categories: ["New Teen Patti"],
    tags: ["Rummy Modern", "Bonus ₹50", "Play & Earn"]
  }
];