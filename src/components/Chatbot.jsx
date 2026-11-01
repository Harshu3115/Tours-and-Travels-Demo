import { useState } from "react";
import {
    MessageCircle,
    X,
    Send,
    Car,
    MapPin,
    Phone,
    MessageCircleMore,
    CalendarCheck,
} from "lucide-react";
import { siteConfig } from "../config/site";

const quickActions = [
    {
        label: "Book a Ride",
        icon: CalendarCheck,
        message: "I want to book a ride",
    },
    {
        label: "Our Vehicles",
        icon: Car,
        message: "What vehicles do you have?",
    },
    {
        label: "Our Services",
        icon: MapPin,
        message: "What services do you provide?",
    },
    {
        label: "Contact Us",
        icon: Phone,
        message: "How can I contact you?",
    },
];

const getBotResponse = (message) => {
    const text = message.toLowerCase().trim();

    /* BOOKING */

    if (
        text.includes("book") ||
        text.includes("booking") ||
        text.includes("ride") ||
        text.includes("rent") ||
        text.includes("rental")
    ) {
        return {
            text:
                "Sure! 🚗 You can book a vehicle by filling out our booking form. Select your pickup location, drop location, date, time and vehicle.",
            action: "book",
        };
    }

    /* VEHICLES */

    if (
        text.includes("vehicle") ||
        text.includes("vehicles") ||
        text.includes("car") ||
        text.includes("swift") ||
        text.includes("dzire") ||
        text.includes("ertiga") ||
        text.includes("innova") ||
        text.includes("seater")
    ) {
        return {
            text:
                "We provide different vehicle options including 4-seater, 7-seater and other options depending on your travel requirements. 🚘",
            action: "vehicles",
        };
    }

    /* SERVICES */

    if (
        text.includes("service") ||
        text.includes("services") ||
        text.includes("trip") ||
        text.includes("travel")
    ) {
        return {
            text:
                "We provide Family Trips, Wedding Trips, Devotional Trips, Local Trips, Outstation Trips, School Trips and Picnic Trips. 🧳",
            action: "services",
        };
    }

    /* WEDDING */

    if (
        text.includes("wedding") ||
        text.includes("marriage")
    ) {
        return {
            text:
                "💍 We provide comfortable and premium transportation for wedding functions, bride & groom travel and family transportation.",
            action: "services",
        };
    }

    /* FAMILY */

    if (
        text.includes("family") ||
        text.includes("picnic")
    ) {
        return {
            text:
                "👨‍👩‍👧‍👦 We provide comfortable vehicles for family trips and group outings.",
            action: "vehicles",
        };
    }

    /* DEVOTIONAL */

    if (
        text.includes("devotional") ||
        text.includes("temple") ||
        text.includes("pilgrimage")
    ) {
        return {
            text:
                "🙏 We provide comfortable transportation for devotional and pilgrimage trips.",
            action: "services",
        };
    }

    /* OUTSTATION */

    if (
        text.includes("outstation") ||
        text.includes("long distance")
    ) {
        return {
            text:
                "🛣️ We provide outstation travel services for one-way trips, round trips and multi-day journeys.",
            action: "services",
        };
    }

    /* PRICE */

    if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("fare") ||
        text.includes("rate") ||
        text.includes("charges")
    ) {
        return {
            text:
                "💰 Pricing depends on the vehicle, route, date and duration. Please submit a booking request and our agency will contact you with the details.",
            action: "book",
        };
    }

    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("mobile") ||
        text.includes("call")
    ) {
        return {
            text:
                `📞 You can contact Gitam Tours & Travels at ${siteConfig.phone}.`,
            action: "call",
        };
    }

    /* WHATSAPP */

    if (
        text.includes("whatsapp") ||
        text.includes("message")
    ) {
        return {
            text:
                "💬 You can contact our agency directly through WhatsApp.",
            action: "whatsapp",
        };
    }

    /* EMAIL */

    if (
        text.includes("email") ||
        text.includes("mail")
    ) {
        return {
            text:
                `📧 Our email address is ${siteConfig.email}.`,
            action: "email",
        };
    }

    /* LOCATION */

    if (
        text.includes("location") ||
        text.includes("address") ||
        text.includes("where")
    ) {
        return {
            text:
                `📍 We are located at ${siteConfig.address}.`,
        };
    }

    /* GREETING */

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good evening")
    ) {
        return {
            text:
                "Hello! 👋 Welcome to Gitam Tours & Travels. How can I help you today?",
        };
    }

    /* THANK YOU */

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {
        return {
            text:
                "You're welcome! 😊 We're happy to help. Have a safe journey!",
        };
    }

    /* DEFAULT */

    return {
        text:
            "I'm here to help with bookings, vehicles, services, pricing and contact information. Please select an option below or type your question.",
    };
};

export default function Chatbot({ onBook }) {
    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text:
                "Hello! 👋 Welcome to Gitam Tours & Travels. How can I help you today?",
        },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = (message) => {
        const text = String(message || "").trim();

        if (!text) {
            return;
        }

        const response = getBotResponse(text);

        const userMessage = {
            id: `${Date.now()}-user`,
            sender: "user",
            text,
        };

        const botMessage = {
            id: `${Date.now()}-bot`,
            sender: "bot",
            text: response.text,
            action: response.action,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
            botMessage,
        ]);

        setInput("");
    };

    const handleAction = (action) => {
        if (action === "book") {
            setIsOpen(false);
            onBook?.();
            return;
        }

        if (action === "vehicles") {
            window.location.href = "/#vehicles";
            return;
        }

        if (action === "services") {
            window.location.href = "/service";
            return;
        }

        if (action === "call") {
            window.location.href = `tel:${siteConfig.phone}`;
            return;
        }

        if (action === "email") {
            window.location.href = `mailto:${siteConfig.email}`;
            return;
        }

        if (action === "whatsapp") {
            const number =
                siteConfig.whatsapp.replace(/\D/g, "");

            window.open(
                `https://wa.me/${number}`,
                "_blank",
                "noopener,noreferrer"
            );

            return;
        }
    };

    return (
        <div className="relative">

            {/* =========================================
                CHAT WINDOW
            ========================================= */}

            {isOpen && (
                <div
                    className="
                        absolute
                        bottom-14
                        right-0
                        z-[10000]
                        flex
                        w-[calc(100vw-24px)]
                        max-w-[390px]
                        flex-col
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        shadow-2xl
                    "
                >

                    {/* HEADER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            bg-ink
                            px-4
                            py-4
                            text-white
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gold
                                    text-lg
                                "
                            >
                                🚗
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Gitam Travel Assistant
                                </h3>

                                <div
                                    className="
                                        mt-0.5
                                        flex
                                        items-center
                                        gap-1.5
                                        text-xs
                                        text-white/60
                                    "
                                >
                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-green-400
                                        "
                                    />

                                    Online • Ready to help
                                </div>
                            </div>

                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setIsOpen(false)
                            }
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                transition
                                hover:bg-white/10
                            "
                            aria-label="Close chatbot"
                        >
                            <X size={19} />
                        </button>

                    </div>


                    {/* =========================================
                        MESSAGES
                    ========================================= */}

                    <div
                        className="
                            flex
                            h-[300px]
                            flex-col
                            gap-3
                            overflow-y-auto
                            bg-slate-50
                            p-4
                        "
                    >

                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >

                                <div
                                    className={`
                                        max-w-[82%]
                                        rounded-2xl
                                        px-4
                                        py-3
                                        text-sm
                                        leading-5
                                        ${message.sender === "user"
                                            ? "rounded-br-md bg-gold text-white"
                                            : "rounded-bl-md bg-white text-slate-700 shadow-sm"
                                        }
                                    `}
                                >

                                    <p>
                                        {message.text}
                                    </p>

                                    {message.action && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAction(
                                                    message.action
                                                )
                                            }
                                            className="
                                                mt-3
                                                rounded-xl
                                                bg-ink
                                                px-3
                                                py-2
                                                text-xs
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-gold
                                            "
                                        >
                                            {message.action === "book" &&
                                                "Book a Ride"}

                                            {message.action === "vehicles" &&
                                                "View Vehicles"}

                                            {message.action === "services" &&
                                                "View Services"}

                                            {message.action === "call" &&
                                                "Call Us"}

                                            {message.action === "email" &&
                                                "Send Email"}

                                            {message.action === "whatsapp" &&
                                                "Open WhatsApp"}
                                        </button>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* =========================================
                        QUICK ACTIONS
                    ========================================= */}

                    <div
                        className="
                            border-t
                            border-slate-100
                            bg-white
                            px-3
                            py-3
                        "
                    >

                        <div className="grid grid-cols-2 gap-2">

                            {quickActions.map((action) => {
                                const Icon = action.icon;

                                return (
                                    <button
                                        key={action.label}
                                        type="button"
                                        onClick={() =>
                                            sendMessage(
                                                action.message
                                            )
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-3
                                            py-2.5
                                            text-left
                                            text-xs
                                            font-medium
                                            text-slate-700
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-gold
                                            hover:bg-gold/10
                                        "
                                    >
                                        <Icon
                                            size={15}
                                            className="shrink-0 text-gold"
                                        />

                                        <span>
                                            {action.label}
                                        </span>
                                    </button>
                                );
                            })}

                        </div>

                    </div>


                    {/* =========================================
                        INPUT
                    ========================================= */}

                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            sendMessage(input);
                        }}
                        className="
                            flex
                            items-center
                            gap-2
                            border-t
                            border-slate-200
                            bg-white
                            p-3
                        "
                    >

                        <input
                            type="text"
                            value={input}
                            onChange={(event) =>
                                setInput(
                                    event.target.value
                                )
                            }
                            placeholder="Ask about our services..."
                            className="
                                min-w-0
                                flex-1
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-2.5
                                text-sm
                                outline-none
                                transition
                                focus:border-gold
                                focus:ring-2
                                focus:ring-gold/20
                            "
                        />

                        <button
                            type="submit"
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-gold
                                text-white
                                shadow-sm
                                transition-all
                                duration-200
                                hover:scale-105
                                hover:shadow-md
                            "
                            aria-label="Send message"
                        >
                            <Send size={17} />
                        </button>

                    </form>

                </div>
            )}


            {/* =========================================
                CHATBOT BUTTON
            ========================================= */}

            <button
                type="button"
                onClick={() =>
                    setIsOpen(
                        (previous) => !previous
                    )
                }
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:shadow-2xl
                "
                aria-label={
                    isOpen
                        ? "Close travel assistant"
                        : "Open travel assistant"
                }
            >
                {isOpen ? (
                    <X size={21} />
                ) : (
                    <MessageCircle size={21} />
                )}
            </button>

        </div>
    );
}