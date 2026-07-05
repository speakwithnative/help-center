"use client";

import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    function handleChange(language: string) {
        void i18n.changeLanguage(language);
    }

    return (
        <select
            className="form-select form-select-sm w-auto"
            value={i18n.language}
            onChange={(event) => handleChange(event.target.value)}
            aria-label="Change language"
        >
            <option value="en">EN</option>
            <option value="de">DE</option>
        </select>
    );
}