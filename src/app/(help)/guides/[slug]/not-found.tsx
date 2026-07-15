import Link from "next/link";

export default function GuideNotFoundPage() {
    return (
        <section className="text-center py-5">
            <h1>This guide was not found =(</h1>
            <p className="text-muted">This help guide does not exist.</p>

            <Link href="/guides" className="btn btn-primary">
                Back to guides
            </Link>
        </section>
    );
}