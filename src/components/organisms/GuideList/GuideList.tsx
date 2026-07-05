"use client";

import { GuideCard } from "@/components/molecules/GuideCard/GuideCard";
import type { Guide } from "@/types/guide";

type GuideListProps = {
    guides: Guide[];
    emptyMessage: string;
};

export function GuideList({ guides, emptyMessage }: GuideListProps) {
    if (guides.length === 0) {
        return <p>{emptyMessage}</p>;
    }

    return (
        <div className="row g-4">
            {guides.map((guide) => (
                <div className="col-md-6 col-lg-4" key={guide.slug}>
                    <GuideCard guide={guide} />
                </div>
            ))}
        </div>
    );
}