"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { Guide } from "@/types/guide";

type GuideCardProps = {
    guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
    const { t } = useTranslation();

    return (
        <article className="card h-100">
            <div className="card-body">
                <div className="d-flex gap-2 mb-2">
                    <span className="badge text-bg-primary">{guide.platform}</span>
                    <span className="badge text-bg-secondary">{guide.category}</span>
                </div>

                <h2 className="h5 card-title">{guide.title}</h2>

                <p className="card-text text-muted">{guide.description}</p>

                <p className="small text-muted">
                    {guide.readingTime} {t("guides.minRead")}
                </p>

                <Link className="btn btn-outline-primary btn-sm" href={`/guides/${guide.slug}`}>
                    {t("guides.readGuide")}
                </Link>
            </div>
        </article>
    );
}