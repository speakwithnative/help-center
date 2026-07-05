"use client";

import React, { useState } from "react";
import { Button } from "@/components/atoms/Button/Button";

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("general");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const nextErrors: FormErrors = {};

        if (name.trim().length < 2) {
            nextErrors.name = "Name is required.";
        }

        if (!email.includes("@")) {
            nextErrors.email = "Valid email is required.";
        }

        if (message.trim().length < 10) {
            nextErrors.message = "Message must be at least 10 characters.";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        setSubmitted(true);
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
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="topic">
                    Topic
                </label>
                <select
                    id="topic"
                    className="form-select"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                >
                    <option value="general">General question</option>
                    <option value="web">Web platform</option>
                    <option value="mobile">Mobile app</option>
                    <option value="premium">Premium</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                )}
            </div>

            <Button type="submit">
                Send message
            </Button>
        </form>
    );
}