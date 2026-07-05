"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getGuides } from "@/lib/api/guidesApi";
import type { Platform } from "@/types/guide";
import { GuideList } from "@/components/organisms/GuideList/GuideList";

type GuidesClientProps = {
    initialPlatform?: Platform | "all";
};

export function GuidesClient({ initialPlatform = "all" }: GuidesClientProps) {
    const { t } = useTranslation();

    const [search, setSearch] = useState("");
    const [platform, setPlatform] = useState<Platform | "all">(initialPlatform);

    const {
        data: guides = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["guides", search, platform],
        queryFn: () => getGuides({ search, platform }),
    });

    return (
        <section>
            <div className="mb-4">
                <h1>{t("guides.title")}</h1>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-8">
                    <input
                        className="form-control"
                        placeholder={t("guides.searchPlaceholder")}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={platform}
                        onChange={(event) =>
                            setPlatform(event.target.value as Platform | "all")
                        }
                    >
                        <option value="all">{t("guides.allPlatforms")}</option>
                        <option value="web">{t("guides.web")}</option>
                        <option value="mobile">{t("guides.mobile")}</option>
                        <option value="both">{t("guides.both")}</option>
                    </select>
                </div>
            </div>

            {isLoading && <p>Loading guides...</p>}

            {isError && <p className="text-danger">Could not load guides.</p>}

            {!isLoading && !isError && (
                <GuideList guides={guides} emptyMessage={t("guides.empty")} />
            )}
        </section>
    );
}