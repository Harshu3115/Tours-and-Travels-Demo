import {
    ArrowRight,
    CalendarCheck,
    CheckCircle2,
    Clock,
    Headphones,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import FloatingActions from "../components/FloatingActions";
import Contact from "../components/Contact";

import { siteConfig } from "../config/site";


/* =========================================================
   CONTACT CARDS
========================================================= */

const contactCards = [
    {
        icon: Phone,
        title: "Telephone",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone}`,
        description: "Speak directly with our travel team",
    },
    {
        icon: FaWhatsapp,
        title: "WhatsApp",
        value: siteConfig.whatsapp,
        href: `https://wa.me/${siteConfig.whatsapp}`,
        description: "Chat with us for quick booking",
    },
    {
        icon: Mail,
        title: "Mail Us",
        value: siteConfig.email,
        href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            siteConfig.email
        )}`,
        description: "Send us your travel requirements",
    },
    {
        icon: MapPin,
        title: "Address",
        value: siteConfig.address,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            siteConfig.address
        )}`,
        description: "Find our location on Google Maps",
    },
];


/* =========================================================
   SUPPORT POINTS
========================================================= */

const supportPoints = [
    "Quick booking confirmation",
    "Pickup and drop guidance",
    "Vehicle selection support",
    "Local and outstation trip help",
];


/* =========================================================
   QUICK REASONS
========================================================= */

const quickReasons = [
    {
        icon: Clock,
        title: "Fast Response",
        text: "Get quick assistance for ride bookings and trip details.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Support",
        text: "Clear communication from booking to final drop.",
    },
    {
        icon: CalendarCheck,
        title: "Easy Scheduling",
        text: "Plan one-day, multi-day, local and outstation trips.",
    },
];


/* =========================================================
   SCROLL REVEAL HOOK
========================================================= */

function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Animate only once
                    observer.disconnect();
                }
            },
            {
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return [ref, isVisible];
}


/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage({ onBook }) {

    const [cardsRef, cardsVisible] = useReveal(0.15);

    const [mapRef, mapVisible] = useReveal(0.15);

    const [formRef, formVisible] = useReveal(0.12);

    const [reasonsRef, reasonsVisible] = useReveal(0.15);


    return (
        <>
            {/* =====================================================
          NAVBAR
      ===================================================== */}

            <Navbar onBook={onBook} />


            <main className="overflow-hidden bg-white">


                {/* ===================================================
            HERO
        =================================================== */}

                <section
                    className="
            relative
            overflow-hidden
            px-4
            pb-20
            pt-32
            sm:px-6
          "
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(28, 29, 31, 0.27), rgba(24,32,45,0.92)), url(/images/contactusSlide.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    {/* Background glow */}

                    <div
                        className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(255,107,71,0.32),transparent_34%)]
            "
                    />

                    <div className="relative mx-auto max-w-7xl text-center">


                        {/* BADGE */}

                        <div
                            className="
                inline-flex
                animate-[fadeDown_0.8s_ease-out]
                items-center
                gap-2
                rounded-xl
                border
                border-white/15
                bg-white/10
                px-4
                py-2
                text-white
                backdrop-blur
              "
                        >
                            <Sparkles
                                size={16}
                                className="text-gold"
                            />

                            <span className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
                                Contact Gitam Tours
                            </span>
                        </div>


                        {/* TITLE */}

                        <h1
                            className="
                mt-6
                animate-[fadeUp_1s_ease-out]
                font-display
                text-4xl
                font-semibold
                leading-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
                        >
                            Let’s Plan Your Comfortable Ride
                        </h1>


                        {/* DESCRIPTION */}

                        <p
                            className="
                mx-auto
                mt-5
                max-w-2xl
                animate-[fadeUp_1s_ease-out_0.2s_both]
                text-sm
                leading-7
                text-white/75
                sm:text-base
              "
                        >
                            Call, WhatsApp or send your trip details.
                            Our team will help you choose the right
                            vehicle for your pickup, route and travel
                            duration.
                        </p>


                        {/* BUTTONS */}

                        <div
                            className="
                mt-8
                flex
                animate-[fadeUp_1s_ease-out_0.4s_both]
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
                        >

                            <button
                                onClick={() => onBook && onBook()}
                                className="
                  btn-primary
                  transition-all
                  duration-300
                  
                  hover:-translate-y-1
                  hover:scale-[1.02]
                "
                            >
                                Book Your Ride

                                <ArrowRight size={17} />
                            </button>


                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="
                  btn-secondary
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                            >
                                <Phone size={17} />

                                Call Now
                            </a>

                        </div>

                    </div>
                </section>


                {/* ===================================================
            CONTACT INFORMATION
        =================================================== */}

                <section
                    ref={cardsRef}
                    className="
            relative
            overflow-hidden
            px-4
            py-20
            sm:px-6
          "
                    style={{
                        background:
                            "radial-gradient(circle at top left, rgba(255,107,71,0.15), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #EEF6FF",
                    }}
                >

                    <div className="mx-auto max-w-7xl">


                        {/* SECTION HEADING */}

                        <div
                            className={`
                mx-auto
                mb-12
                max-w-3xl
                transform
                text-center
                transition-all
                duration-1000
                ease-out
                ${cardsVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                }
              `}
                        >

                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                                Get In Touch
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                                We’re Ready To Help With Your Journey
                            </h2>

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                Have questions or need assistance? We're here to help! Fill out the form below and our team will get back to you as soon as possible.F
                            </p>

                        </div>


                        {/* CONTACT CARDS */}

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {contactCards.map(
                                (
                                    {
                                        icon: Icon,
                                        title,
                                        value,
                                        href,
                                        description,
                                    },
                                    index
                                ) => (

                                    <a
                                        key={title}
                                        href={href}
                                        target={
                                            title === "WhatsApp" ||
                                                title === "Location"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            title === "WhatsApp" ||
                                                title === "Location"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className={`
                      premium-card
                      group
                      transform
                      p-6
                      transition-all
                      duration-700
                      ease-out
                      hover:-translate-y-1
                      hover:shadow-premium
                      ${cardsVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-14 opacity-0"
                                            }
                    `}
                                        style={{
                                            transitionDelay: `${200 + index * 130
                                                }ms`,
                                        }}
                                    >

                                        {/* ICON */}

                                        <div
                                            className="
                        grid
                        size-14
                        place-items-center
                        rounded-2xl
                        bg-gold/10
                        text-gold
                        transition-all
                        duration-500
                        group-hover:rotate-3
                        group-hover:scale-110
                        group-hover:bg-gold
                        group-hover:text-white
                      "
                                        >
                                            <Icon size={24} />
                                        </div>


                                        {/* TITLE */}

                                        <h3 className="mt-5 text-lg font-semibold text-ink">
                                            {title}
                                        </h3>


                                        {/* VALUE */}

                                        <p
                                            className="
                        mt-2
                        break-words
                        text-sm
                        font-semibold
                        leading-6
                        text-slate-700
                      "
                                        >
                                            {value}
                                        </p>


                                        {/* DESCRIPTION */}

                                        <p className="mt-2 text-xs leading-5 text-slate-500">
                                            {description}
                                        </p>


                                        {/* ACTION */}

                                        <div
                                            className="
                        mt-4
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-gold
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                                        >
                                            {title === "Call Us" && "Call Now"}
                                            {title === "WhatsApp" && "Chat Now"}
                                            {title === "Email" && "Send Email"}
                                            {title === "Location" && "Open Map"}

                                            <ArrowRight size={13} />

                                        </div>

                                    </a>

                                )
                            )}

                        </div>


                        {/* =================================================
                GOOGLE MAP SECTION
            ================================================= */}

                        <div
                            ref={mapRef}
                            className="mt-16 grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]"
                        >

                            {/* MAP INFORMATION */}

                            <div
                                className={`
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${mapVisible
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-16 opacity-0"
                                    }
                `}
                            >

                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                                    Find Us
                                </p>


                                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                                    Visit Gitam Tours & Travels
                                </h2>


                                <p className="mt-4 text-base leading-8 text-slate-600">
                                    Find our location easily using Google
                                    Maps. Get directions for your pickup,
                                    booking discussion or travel enquiry.
                                </p>


                                {/* LOCATION BOX */}

                                <div className="mt-7 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">

                                    <div className="flex items-start gap-4">

                                        <div
                                            className="
                        grid
                        size-12
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-gold/10
                        text-gold
                      "
                                        >
                                            <MapPin size={22} />
                                        </div>


                                        <div>

                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Our Location
                                            </p>

                                            <p className="mt-1 text-sm font-semibold leading-6 text-ink">
                                                {siteConfig.address}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* SUPPORT POINTS */}

                                <div className="mt-6 space-y-3">

                                    {supportPoints.map(
                                        (point, index) => (

                                            <div
                                                key={point}
                                                className={`
                          flex
                          transform
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-white
                          bg-white/85
                          p-3
                          shadow-sm
                          backdrop-blur
                          transition-all
                          duration-700
                          ${mapVisible
                                                        ? "translate-x-0 opacity-100"
                                                        : "-translate-x-8 opacity-0"
                                                    }
                        `}
                                                style={{
                                                    transitionDelay: `${300 + index * 120
                                                        }ms`,
                                                }}
                                            >

                                                <span
                                                    className="
                            grid
                            size-9
                            shrink-0
                            place-items-center
                            rounded-full
                            bg-gold/10
                          "
                                                >
                                                    <CheckCircle2
                                                        size={17}
                                                        className="text-jade"
                                                    />
                                                </span>

                                                <span className="text-sm font-semibold text-slate-700">
                                                    {point}
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* =================================================
                  GOOGLE MAP
              ================================================= */}

                            <div
                                className={`
                  relative
                  min-h-[380px]
                  transform
                  overflow-hidden
                  rounded-[2rem]
                  bg-slate-200
                  shadow-premium
                  transition-all
                  duration-1000
                  ease-out
                  sm:min-h-[450px]
                  ${mapVisible
                                        ? "translate-x-0 scale-100 opacity-100"
                                        : "translate-x-16 scale-95 opacity-0"
                                    }
                `}
                            >

                                {/* Map */}

                                <iframe
                                    title="Gitam Tours and Travels Location"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        siteConfig.address
                                    )}&output=embed`}
                                    className="absolute inset-0 h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />





                                {/* OPEN GOOGLE MAP BUTTON */}

                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        siteConfig.address
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-ink
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gold
                    hover:text-ink
                  "
                                >
                                    <MapPin size={15} />

                                    Open in Google Maps

                                    <ArrowRight size={14} />

                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================
            CONTACT FORM
        =================================================== */}

                <section
                    ref={formRef}
                    className="overflow-hidden bg-white"
                >

                    <div
                        className={`
              transform
              transition-all
              duration-1000
              ease-out
              ${formVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-16 opacity-0"
                            }
            `}
                    >

                        <Contact />

                    </div>

                </section>


                {/* ===================================================
            QUICK REASONS
        =================================================== */}

                <section
                    ref={reasonsRef}
                    className="bg-white px-4 py-20 sm:px-6"
                >

                    <div className="mx-auto max-w-7xl">


                        {/* HEADING */}

                        <div
                            className={`
                mx-auto
                mb-12
                max-w-3xl
                transform
                text-center
                transition-all
                duration-1000
                ${reasonsVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-12 opacity-0"
                                }
              `}
                        >

                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                                Why Contact Us
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                                Simple, Fast & Reliable Travel Support
                            </h2>

                        </div>


                        {/* REASONS */}

                        <div className="grid gap-5 sm:grid-cols-3">

                            {quickReasons.map(
                                (
                                    {
                                        icon: Icon,
                                        title,
                                        text,
                                    },
                                    index
                                ) => (

                                    <div
                                        key={title}
                                        className={`
                      premium-card
                      group
                      transform
                      p-6
                      text-center
                      transition-all
                      duration-700
                      hover:-translate-y-1
                      ${reasonsVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-12 opacity-0"
                                            }
                    `}
                                        style={{
                                            transitionDelay: `${200 + index * 150
                                                }ms`,
                                        }}
                                    >

                                        <div
                                            className="
                        mx-auto
                        grid
                        size-14
                        place-items-center
                        rounded-2xl
                        bg-gold/10
                        text-gold
                        transition-all
                        duration-500
                        group-hover:rotate-3
                        group-hover:scale-110
                        group-hover:bg-gold
                        group-hover:text-ink
                      "
                                        >
                                            <Icon size={25} />
                                        </div>


                                        <h3 className="mt-5 text-lg font-semibold text-ink">
                                            {title}
                                        </h3>


                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {text}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>

            </main>



            {/* =====================================================
          FLOATING ACTIONS
      ===================================================== */}

            <FloatingActions />


            {/* =====================================================
          PAGE ANIMATION CSS
      ===================================================== */}

            <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </>
    );
}