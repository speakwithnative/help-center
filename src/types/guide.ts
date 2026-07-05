export type Platform = "web" | "mobile" | "both";

export type GuideCategory =
    | "getting-started"
    | "web-platform"
    | "mobile-app"
    | "messaging"
    | "premium"
    | "troubleshooting";

export type Guide = {
    slug: string;
    title: string;
    description: string;
    category: GuideCategory;
    platform: Platform;
    readingTime: number;
    steps: string[];
    screenshotUrl?: string;
    videoUrl?: string;
};