"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getGuideBySlug } from "@/lib/api/guidesApi";
import {useEffect, useState} from "react";
import {Guide} from "@/types/guide";

type GuideDetailClientProps = {
    slug: string;
};

export function GuideDetailClient({ slug }: GuideDetailClientProps) {
    // NOT using query hook
    // const [guide, setGuide] = useState<Guide | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    //
    // useEffect(() => {
    //     async function loadGuide() {
    //         try {
    //             setIsLoading(true);
    //             setIsError(false);
    //             const guideData = await getGuideBySlug(slug);
    //
    //             setGuide(guideData);
    //         } catch {
    //             setIsError(true);
    //             setGuide(null);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     void loadGuide();
    // }, [slug]);

    // Using query hook
    const {
        data: guide,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["guide", slug],
        queryFn: () => getGuideBySlug(slug),
    });

    if (isLoading) {
        return <p>Loading guide...</p>;
    }

    if (isError || !guide) {
        return (
            <section className="text-center py-5">
                <h1>Guide not found</h1>
                <p className="text-muted">This help guide could not be loaded.</p>

                <Link href="/guides" className="btn btn-primary">
                    Back to guides
                </Link>
            </section>
        );
    }

    return (
        <article className="mx-auto" style={{ maxWidth: 800 }}>
            <Link href="/guides" className="btn btn-link px-0">
                ← Back to guides
            </Link>

            <div className="mb-3">
                <span className="badge text-bg-primary me-2">{guide.platform}</span>
                <span className="badge text-bg-secondary">{guide.category}</span>
            </div>

            <h1>{guide.title}</h1>

            <p className="lead text-muted">{guide.description}</p>

            <hr />

            <div className="mb-4">
                <h2 className="h4">Screenshot</h2>
                <div className="border rounded bg-light p-5 text-center text-muted">
                    Screenshot placeholder
                </div>
            </div>

            {guide.videoUrl && (
                <div className="mb-4">
                    <h2 className="h4">Video</h2>
                    <div className="ratio ratio-16x9">
                        <iframe src={guide.videoUrl} title={guide.title} allowFullScreen />
                    </div>
                </div>
            )}

            <h2 className="h4">Steps</h2>

            <ol className="list-group list-group-numbered">
                {guide.steps.map((step) => (
                    <li className="list-group-item" key={step}>
                        {step}
                    </li>
                ))}
            </ol>
        </article>
    );
}