import { guides } from "@/data/guides";
import type { Platform } from "@/types/guide";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get("search")?.toLowerCase() ?? "";
    const platform = searchParams.get("platform") as Platform | "all" | null;

    let filteredGuides = guides;

    if (platform && platform !== "all") {
        filteredGuides = filteredGuides.filter(
            (guide) => guide.platform === platform || guide.platform === "both"
        );
    }

    if (search) {
        filteredGuides = filteredGuides.filter((guide) => {
            return (
                guide.title.toLowerCase().includes(search) ||
                guide.description.toLowerCase().includes(search) ||
                guide.category.toLowerCase().includes(search)
            );
        });
    }

    return NextResponse.json(filteredGuides);
}