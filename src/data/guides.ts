import type { Guide } from "@/types/guide";

export const guides: Guide[] = [
    {
        slug: "create-your-profile",
        title: "Create your profile",
        description:
            "Learn how to complete your Speak with Native profile and improve your chances of finding language partners.",
        category: "getting-started",
        platform: "both",
        readingTime: 3,
        steps: [
            "Open Speak with Native.",
            "Go to your profile page.",
            "Upload a clear profile picture.",
            "Select your native language.",
            "Select the language you want to learn.",
            "Add a short description about your learning goals.",
            "Save your changes.",
        ],
        screenshotUrl: "/screenshots/create-profile.png",
        videoUrl: "https://www.youtube.com/embed/example",
    },
    {
        slug: "find-language-partners-on-web",
        title: "Find language partners on web",
        description:
            "Use the web platform filters to discover people who match your language goals.",
        category: "web-platform",
        platform: "web",
        readingTime: 4,
        steps: [
            "Open the members page.",
            "Choose the language you want to practice.",
            "Use filters to narrow the results.",
            "Open a profile that looks interesting.",
            "Send a friendly first message.",
        ],
    },
    {
        slug: "send-audio-message",
        title: "Send an audio message",
        description: "Learn how to send short audio messages from the mobile app.",
        category: "messaging",
        platform: "mobile",
        readingTime: 2,
        steps: [
            "Open a conversation.",
            "Tap the microphone button.",
            "Record your message.",
            "Review it if needed.",
            "Send the audio message.",
        ],
    },
    {
        slug: "upgrade-to-premium",
        title: "Upgrade to Premium",
        description:
            "Learn how to unlock more features with Speak with Native Premium.",
        category: "premium",
        platform: "both",
        readingTime: 3,
        steps: [
            "Open your account settings.",
            "Go to the Premium section.",
            "Choose a plan.",
            "Confirm the payment.",
            "Return to the app and check your Premium status.",
        ],
    },
];