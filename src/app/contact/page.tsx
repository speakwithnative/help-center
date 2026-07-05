import { ContactForm } from "@/components/organisms/ContactForm/ContactForm";

export default function ContactPage() {
    return (
        <section className="mx-auto" style={{ maxWidth: 700 }}>
            <h1>Contact support</h1>
            <p className="text-muted">
                Send us a message if you need help with Speak with Native.
            </p>

            <ContactForm />
        </section>
    );
}