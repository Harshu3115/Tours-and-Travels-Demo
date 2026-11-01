import {
    ArrowRight,
    Car,
    CheckCircle2,
    Clock,
    Headphones,
    Luggage,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import VehicleListing from "../components/VehicleListing";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";


/* =========================================================
   FLEET BENEFITS
========================================================= */

const fleetBenefits = [
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        text: "Professional drivers and dependable vehicles for local and outstation travel.",
    },
    {
        icon: Car,
        title: "Clean AC Vehicles",
        text: "Well-maintained cars with comfortable interiors for a smooth journey.",
    },
    {
        icon: Luggage,
        title: "Travel Friendly",
        text: "Spacious options for families, luggage, business trips and group tours.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        text: "Quick booking assistance whenever you need a ride.",
    },
];


/* =========================================================
   TRAVEL TYPES
========================================================= */

const travelTypes = [
    "Local city travel",
    "Devotional Trips",
    "Outstation tours",
    "Corporate travel",
    "Family trips",
    "Wedding & event travel",
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
   VEHICLE PAGE
========================================================= */

export default function VehiclePage({ onBook }) {

    /* =======================================================
       SECTION VISIBILITY
    ======================================================= */

    const [introRef, introVisible] = useReveal(0.15);

    const [qualityRef, qualityVisible] = useReveal(0.15);

    const [ctaRef, ctaVisible] = useReveal(0.2);


    return (
        <>
            {/* =====================================================
          NAVBAR
      ===================================================== */}

            <Navbar onBook={onBook} />


            {/* =====================================================
          MAIN
      ===================================================== */}

            <main className="overflow-hidden bg-white">


                {/* ===================================================
            HERO SLIDER
        =================================================== */}

                <HeroSlider onBook={onBook} />


                {/* ===================================================
            VEHICLE INTRO SECTION
        =================================================== */}

                <section
                    ref={introRef}
                    className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24"
                    style={{
                        background:
                            "radial-gradient(circle at top left, rgba(255,107,71,0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #EEF6FF",
                    }}
                >

                    {/* Decorative background */}

                    <div
                        className={`
              pointer-events-none
              absolute
              -left-32
              top-20
              h-64
              w-64
              rounded-full
              bg-gold/10
              blur-3xl
              transition-all
              duration-[1500ms]
              ${introVisible
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0"
                            }
            `}
                    />


                    <div
                        className={`
              pointer-events-none
              absolute
              -bottom-32
              right-0
              h-72
              w-72
              rounded-full
              bg-ink/5
              blur-3xl
              transition-all
              duration-[1500ms]
              ${introVisible
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0"
                            }
            `}
                    />


                    <div className="relative mx-auto max-w-7xl">

                        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">


                            {/* =================================================
                  LEFT CONTENT
              ================================================= */}

                            <div
                                className={`
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${introVisible
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-16 opacity-0"
                                    }
                `}
                            >

                                {/* BADGE */}

                                <div
                                    className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-gold/20
                    bg-white
                    px-4
                    py-2
                    shadow-sm
                    transition-all
                    duration-700
                    ${introVisible
                                            ? "translate-y-0 opacity-100"
                                            : "-translate-y-5 opacity-0"
                                        }
                  `}
                                >
                                    <Sparkles
                                        size={16}
                                        className="text-gold"
                                    />

                                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                                        Premium Fleet
                                    </span>
                                </div>


                                {/* TITLE */}

                                <h1
                                    className={`
                    mt-5
                    max-w-2xl
                    transform
                    font-display
                    text-4xl
                    font-semibold
                    leading-tight
                    text-ink
                    transition-all
                    duration-1000
                    delay-100
                    sm:text-5xl
                    ${introVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                        }
                  `}
                                >
                                    Choose The Perfect Vehicle For Your Journey
                                </h1>


                                {/* DESCRIPTION */}

                                <p
                                    className={`
                    mt-5
                    max-w-2xl
                    transform
                    text-base
                    leading-8
                    text-slate-600
                    transition-all
                    duration-1000
                    delay-200
                    sm:text-lg
                    ${introVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                        }
                  `}
                                >
                                    Gitam Tours & Travels offers clean,
                                    comfortable and air-conditioned vehicles
                                    for city rides, family trips, airport
                                    transfers, corporate travel and long
                                    outstation journeys.
                                </p>


                                {/* =================================================
                    TRAVEL TYPES
                ================================================= */}

                                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                    {travelTypes.map(
                                        (type, index) => (

                                            <div
                                                key={type}
                                                className={`
                          group
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
                          hover:border-gold/30
                          hover:bg-white
                          hover:shadow-md
                          ${introVisible
                                                        ? "translate-y-0 opacity-100"
                                                        : "translate-y-8 opacity-0"
                                                    }
                        `}
                                                style={{
                                                    transitionDelay: `${350 + index * 100
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
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-gold/20
                          "
                                                >
                                                    <CheckCircle2
                                                        size={17}
                                                        className="text-jade"
                                                    />
                                                </span>

                                                <span className="text-sm font-semibold text-slate-700">
                                                    {type}
                                                </span>

                                            </div>
                                        )
                                    )}

                                </div>


                                {/* =================================================
                    BUTTONS
                ================================================= */}

                                <div
                                    className={`
                    mt-8
                    flex
                    transform
                    flex-col
                    gap-3
                    transition-all
                    duration-1000
                    ${introVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                        }
                  `}
                                    style={{
                                        transitionDelay: "900ms",
                                    }}
                                >

                                    <div className="flex flex-col gap-3 sm:flex-row">

                                        <button
                                            onClick={() =>
                                                onBook && onBook()
                                            }
                                            className="
                        btn-primary
                        transition-transform
                        duration-300
                        hover:-translate-y-1
                      "
                                        >
                                            Book Your Ride

                                            <ArrowRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </button>


                                        <a
                                            href="#vehicles"
                                            className="
                        btn-secondary
                        border-ink/10
                        bg-ink
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-ink/90
                      "
                                        >
                                            View Vehicles
                                        </a>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                  RIGHT IMAGE
              ================================================= */}

                            <div
                                className={`
                  relative
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${introVisible
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-16 opacity-0"
                                    }
                `}
                                style={{
                                    transitionDelay: "250ms",
                                }}
                            >

                                {/* Glow */}

                                <div
                                    className={`
                    absolute
                    -inset-3
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-gold/30
                    via-white
                    to-ink/10
                    blur-sm
                    transition-all
                    duration-[1500ms]
                    ${introVisible
                                            ? "scale-100 opacity-100"
                                            : "scale-90 opacity-0"
                                        }
                  `}
                                />


                                {/* IMAGE CARD */}

                                <div
                                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-ink
                    shadow-premium
                  "
                                >

                                    <img
                                        src="/images/showcase%20c-3.png"
                                        alt="Gitam Tours and Travels vehicle fleet"
                                        className={`
                      h-[340px]
                      w-full
                      object-cover
                      opacity-90
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      sm:h-[460px]
                      ${introVisible
                                                ? "scale-100"
                                                : "scale-110"
                                            }
                      group-hover:scale-105
                    `}
                                        loading="lazy"
                                    />


                                    {/* Overlay */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />


                                    {/* Bottom Card */}

                                    <div
                                        className={`
                      absolute
                      bottom-5
                      left-5
                      right-5
                      transform
                      rounded-3xl
                      border
                      border-white/20
                      bg-white/15
                      p-5
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-1000
                      hidden sm:block
                      ${introVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-10 opacity-0"
                                            }
                    `}
                                        style={{
                                            transitionDelay: "700ms",
                                        }}
                                    >

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                          grid
                          size-14
                          shrink-0
                          place-items-center
                          rounded-2xl
                          bg-gold
                          text-ink
                          shadow-glow
                          transition-transform
                          duration-500
                          hover:rotate-6
                          hover:scale-110
                        "
                                            >
                                                <Car size={26} />
                                            </div>

                                            <div>

                                                <h2 className="font-display text-2xl font-semibold">
                                                    Swift, Ertiga & Innova
                                                </h2>

                                                <p className="mt-1 text-sm leading-6 text-white/75">
                                                    Flexible fleet options for 4,
                                                    7 and 11 seater travel needs.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                    TOP BADGE
                ================================================= */}

                                <div
                                    className={`
                    absolute
                    -top-5
                    left-5
                    hidden
                    transform
                    rounded-2xl
                    bg-white
                    px-5
                    py-4
                    shadow-premium
                    transition-all
                    duration-1000
                    sm:block
                    ${introVisible
                                            ? "translate-y-0 scale-100 opacity-100"
                                            : "-translate-y-8 scale-90 opacity-0"
                                        }
                  `}
                                    style={{
                                        transitionDelay: "850ms",
                                    }}
                                >

                                    <div className="flex items-center gap-3">

                                        <Users
                                            size={22}
                                            className="text-gold"
                                        />

                                        <div>

                                            <p className="text-xl font-bold text-ink">
                                                3
                                            </p>

                                            <p className="text-xs font-semibold text-slate-500">
                                                Vehicle Options
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                    BOTTOM BADGE
                ================================================= */}

                                <div
                                    className={`
                    absolute
                    -bottom-5
                    right-5
                    hidden
                    transform
                    rounded-2xl
                    bg-gold
                    px-5
                    py-4
                    text-ink
                    shadow-glow
                    transition-all
                    duration-1000
                    sm:block
                    ${introVisible
                                            ? "translate-y-0 scale-100 opacity-100"
                                            : "translate-y-8 scale-90 opacity-0"
                                        }
                  `}
                                    style={{
                                        transitionDelay: "1000ms",
                                    }}
                                >

                                    <div className="flex items-center gap-3">

                                        <Clock size={22} />

                                        <div>

                                            <p className="text-xl font-bold">
                                                24/7
                                            </p>

                                            <p className="text-xs font-semibold">
                                                Booking Support
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================
            VEHICLE LISTING
        =================================================== */}

                <section
                    id="vehicles"
                    className="relative overflow-hidden"
                >

                    <VehicleListing onBook={onBook} />

                </section>


                {/* ===================================================
            FLEET QUALITY
        =================================================== */}

                <section
                    ref={qualityRef}
                    className="overflow-hidden bg-white px-4 py-20 sm:px-6"
                >

                    <div className="mx-auto max-w-7xl">


                        {/* HEADER */}

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
                ${qualityVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-12 opacity-0"
                                }
              `}
                        >

                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                                Fleet Quality
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                                Why Travel With Our Vehicles?
                            </h2>

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                Every vehicle is selected for comfort,
                                cleanliness and dependable travel performance.
                            </p>

                        </div>


                        {/* BENEFITS */}

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {fleetBenefits.map(
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
                      ease-out
                      hover:-translate-y-1
                      ${qualityVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-14 opacity-0"
                                            }
                    `}
                                        style={{
                                            transitionDelay: `${200 + index * 150
                                                }ms`,
                                        }}
                                    >

                                        {/* ICON */}

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
                        group-hover:text-white
                      "
                                        >
                                            <Icon size={25} />
                                        </div>


                                        {/* TITLE */}

                                        <h3 className="mt-5 text-lg font-semibold text-ink">
                                            {title}
                                        </h3>


                                        {/* TEXT */}

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {text}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* ===================================================
            CTA
        =================================================== */}

                <section
                    ref={ctaRef}
                    className="bg-white px-4 pb-20 sm:px-6"
                >

                    <div
                        className={`
              mx-auto
              max-w-7xl
              transform
              overflow-hidden
              rounded-[2rem]
              bg-ink
              px-6
              py-12
              text-center
              shadow-premium
              transition-all
              duration-1000
              ease-out
              sm:px-10
              ${ctaVisible
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-16 scale-95 opacity-0"
                            }
            `}
                    >

                        {/* Decorative glow */}

                        <div className="pointer-events-none absolute" />


                        {/* ICON */}

                        <Car
                            className={`
                mx-auto
                mb-4
                text-gold
                transition-all
                duration-700
                ${ctaVisible
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "rotate-[-25deg] scale-50 opacity-0"
                                }
              `}
                            size={38}
                        />


                        {/* TITLE */}

                        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                            Need Help Choosing A Vehicle?
                        </h2>


                        {/* DESCRIPTION */}

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            Tell us your pickup location,
                            destination, passenger count and duration.
                            Our team will suggest the most comfortable
                            option.
                        </p>


                        {/* BUTTON */}

                        <button
                            onClick={() =>
                                onBook && onBook()
                            }
                            className="
                btn-primary
                mt-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
              "
                        >
                            Book Now

                            <ArrowRight size={17} />
                        </button>

                    </div>

                </section>

            </main>


            {/* =====================================================
          FLOATING ACTIONS
      ===================================================== */}

            <FloatingActions />

        </>
    );
}