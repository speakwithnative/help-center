import { guides } from "@/data/guides";
import { notFound } from "next/navigation";
import Link from "next/link";

type GuideDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function GuideDetailPage({
                                                  params,
                                              }: GuideDetailPageProps) {
    const { slug } = await params;

    const guide = guides.find((guide) => guide.slug === slug);

    if (!guide) {
        notFound();
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
                        <iframe
                            src={guide.videoUrl}
                            title={guide.title}
                            allowFullScreen
                        />
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