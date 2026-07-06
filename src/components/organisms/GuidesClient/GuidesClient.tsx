"use client";

import {useEffect, useState} from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getGuides } from "@/lib/api/guidesApi";
import type {Guide, GuideCategory, Platform} from "@/types/guide";
import { GuideList } from "@/components/organisms/GuideList/GuideList";

type GuidesClientProps = {
    initialPlatform?: Platform | "all";
    initialCategory?: GuideCategory | "all";
};

export function GuidesClient({ initialPlatform = "all", initialCategory = "all" }: GuidesClientProps) {
    const { t } = useTranslation();

    const [search, setSearch] = useState("");
    const [platform, setPlatform] = useState<Platform | "all">(initialPlatform);
    const [category, setCategory] = useState<GuideCategory | "all">(initialCategory);

    // NOT using query hook
    // const [guides, setGuides] = useState<Guide[]>([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);

    // NOT using query hook
    // useEffect(() => {
    //     async function loadGuides() {
    //         try {
    //             setIsLoading(true);
    //             setIsError(false);
    //
    //             const data = await getGuides({ search, platform, category });
    //
    //             setGuides(data);
    //         } catch {
    //             setIsError(true);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //
    //     void loadGuides();
    // }, [search, platform]);

    // Using query hook
    const {
        data: guides = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["guides", search, platform, category],
        queryFn: () => getGuides({ search, platform, category }),
    });

    return (
        <section>
            <div className="mb-4">
                <h1>{t("guides.title")}</h1>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
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

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value as GuideCategory | "all")
                        }
                    >
                        <option value="all">{t("guides.allCategories")}</option>
                        <option value="getting-started">{t("guides.gettingStarted")}</option>
                        <option value="web-platform">{t("guides.webPlatform")}</option>
                        <option value="mobile-app">{t("guides.mobileApp")}</option>
                        <option value="messaging">{t("guides.messaging")}</option>
                        <option value="premium">{t("guides.premium")}</option>
                        <option value="troubleshooting">{t("guides.troubleshooting")}</option>
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