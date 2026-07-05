import axios from "axios";
import type { Guide, Platform } from "@/types/guide";

export type GuideFilters = {
    search?: string;
    platform?: Platform | "all";
};

export async function getGuides(filters?: GuideFilters): Promise<Guide[]> {
    const response = await axios.get<Guide[]>("/api/guides", {
        params: filters,
    });

    return response.data;
}

export async function getGuideBySlug(slug: string): Promise<Guide | undefined> {
    const guides = await getGuides();

    return guides.find((guide) => guide.slug === slug);
}