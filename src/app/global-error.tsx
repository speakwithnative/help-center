"use client";

import { useEffect } from "react";

type GlobalErrorPageProps = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function GlobalErrorPage({
    error,
    reset,
}: GlobalErrorPageProps) {
    useEffect(() => {
        console.error("Global application error:", error);
    }, [error]);

    return (
        <html lang="en">
            <body>
                <main className="container py-5 text-center">
                    <h1>Something went wrong</h1>

                    <p>
                        The Help Center could not be loaded. Please try again in a moment.
                    </p>

                    <button className="btn btn-primary" type="button" onClick={reset}>
                        Try again
                    </button>
                </main>
            </body>
        </html>
    );
}