import axios from "axios";
import type { Guide, GuideCategory, Platform } from "@/types/guide";

export type GuideFilters = {
    search?: string;
    platform?: Platform | "all";
    category?: GuideCategory | "all";
};

export async function getGuides(filters?: GuideFilters): Promise<Guide[]> {
    const response = await axios.get<Guide[]>("/api/guides", {
        params: filters,
    });

    return response.data;
}

export async function getGuideBySlug(slug: string): Promise<Guide> {
    const response = await axios.get<Guide>(`/api/guides/${slug}`);

    return response.data;
}