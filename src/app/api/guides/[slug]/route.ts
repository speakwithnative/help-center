import { guides } from "@/data/guides";
import { NextResponse } from "next/server";

type GuideRouteProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function GET(_request: Request, { params }: GuideRouteProps) {
    const { slug } = await params;

    const guide = guides.find((guide) => guide.slug === slug);

    if (!guide) {
        return NextResponse.json(
            {
                message: "Guide not found",
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json(guide);
}