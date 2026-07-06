import { GuideDetailClient } from "@/components/organisms/GuideDetailClient/GuideDetailClient";

type GuideDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function GuideDetailPage({
  params,
}: GuideDetailPageProps) {
    const { slug } = await params;

    return <GuideDetailClient slug={slug} />;
}