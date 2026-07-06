"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";

export function Header() {
    const { t } = useTranslation();

    return (
        <header className="border-bottom bg-light">
            <nav className="container navbar navbar-expand-lg">
                <Link className="navbar-brand fw-bold" href="/">
                    {t("app.name")}
                </Link>

                <div className="d-flex gap-3 align-items-center ms-auto">
                    <Link className="nav-link" href="/guides">
                        {t("nav.guides")}
                    </Link>

                    <Link className="nav-link" href="/web">
                        {t("nav.web")}
                    </Link>

                    <Link className="nav-link" href="/mobile">
                        {t("nav.mobile")}
                    </Link>

                    <Link className="nav-link" href="/about-us">
                        {t("nav.about")}
                    </Link>

                    <Link className="nav-link" href="/contact">
                        {t("nav.contact")}
                    </Link>

                    <LanguageSwitcher />
                </div>
            </nav>
        </header>
    );
}