"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { Guide } from "@/types/guide";
import styles from "./GuideCard.module.scss";

type GuideCardProps = {
    guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
    const { t } = useTranslation();

    return (
        <article className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.badgeGroup}>
                    <span className={styles.platformBadge}>{guide.platform}</span>
                    <span className={styles.categoryBadge}>{guide.category}</span>
                </div>

                <h2 className={styles.title}>{guide.title}</h2>

                <p className={styles.description}>{guide.description}</p>

                <p className={styles.meta}>
                    {guide.readingTime} {t("guides.minRead")}
                </p>

                <Link
                    className={`btn btn-outline-primary btn-sm ${styles.action}`}
                    href={`/guides/${guide.slug}`}
                >
                    {t("guides.readGuide")}
                </Link>
            </div>
        </article>
    );
}