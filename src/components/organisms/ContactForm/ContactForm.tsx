"use client";

import { useState } from "react";

type FormErrors = {
    name?: string;
    email?: string;
    topic?: string;
    message?: string;
};

const initialFormState = {
    name: "",
    email: "",
    topic: "",
    message: "",
};

export function ContactForm() {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function updateField(field: keyof typeof initialFormState, value: string) {
        setForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));

        setErrors((currentErrors) => ({
            ...currentErrors,
            [field]: undefined,
        }));

        setSubmitted(false);
    }

    function validateForm(): FormErrors {
        const nextErrors: FormErrors = {};

        if (form.name.trim().length < 2) {
            nextErrors.name = "Name must be at least 2 characters.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Email is required.";
        } else if (!form.email.includes("@")) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!form.topic) {
            nextErrors.topic = "Please select a topic.";
        }

        if (form.message.trim().length < 10) {
            nextErrors.message = "Message must be at least 10 characters.";
        }

        return nextErrors;
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const nextErrors = validateForm();

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 700);
        });

        setIsSubmitting(false);
        setSubmitted(true);
        setForm(initialFormState);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            {submitted && (
                <div className="alert alert-success">
                    Your message was submitted successfully.
                </div>
            )}

            <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    disabled={isSubmitting}
                />

                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    disabled={isSubmitting}
                />

                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="topic">
                    Topic
                </label>

                <select
                    id="topic"
                    className={`form-select ${errors.topic ? "is-invalid" : ""}`}
                    value={form.topic}
                    onChange={(event) => updateField("topic", event.target.value)}
                    disabled={isSubmitting}
                >
                    <option value="">Select a topic</option>
                    <option value="general">General question</option>
                    <option value="web">Web platform</option>
                    <option value="mobile">Mobile app</option>
                    <option value="premium">Premium</option>
                </select>

                {errors.topic && (
                    <div className="invalid-feedback">{errors.topic}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="message">
                    Message
                </label>

                <textarea
                    id="message"
                    rows={5}
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    disabled={isSubmitting}
                />

                {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                )}
            </div>

            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
            </button>
        </form>
    );
}