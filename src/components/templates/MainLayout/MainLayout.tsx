import { Header } from "@/components/organisms/Header/Header";
import React from "react";

type MainLayoutProps = {
    children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />

            <main className="container py-4">{children}</main>
        </>
    );
}