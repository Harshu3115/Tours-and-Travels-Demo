import { siteConfig } from "../config/site";

export const sendContactEmail = async (contact) => {
    const response = await fetch(
        siteConfig.contactFormspreeEndpoint,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                subject:
                    "New Contact Message - Gitam Tours & Travels",

                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                user_subject: contact.subject,
                message: contact.message,
            }),
        }
    );

    if (!response.ok) {
        const errorText = await response.text();

        console.error(
            "Formspree error:",
            errorText
        );

        throw new Error(
            "Contact email could not be sent."
        );
    }

    return response.json();
};