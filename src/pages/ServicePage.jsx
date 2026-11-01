import {
    ArrowRight,
    Briefcase,
    CalendarCheck,
    Car,
    CheckCircle2,
    Globe,
    Headphones,
    HeartHandshake,
    Landmark,
    MapPin,
    Plane,
    Route,
    School,
    ShieldCheck,
    Sparkles,
    Users,
    UsersRound,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import FloatingActions from "../components/FloatingActions";


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
    {
        icon: Users,
        title: "Family Trips",
        desc: "Comfortable and safe transportation for your family outings and vacations. Travel together, create memories.",
        points: [
            "Family friendly",
            "Extra luggage comfort",
            "Smooth rides",
        ],
    },
    {
        icon: HeartHandshake,
        title: "Wedding Trips",
        desc: "Make your special day memorable with our premium wedding transportation services. Luxury vehicles for the bride and groom.",
        points: [
            "Family friendly",
            "Extra luggage comfort",
            "Smooth rides",
        ],
    },

    {
        icon: Landmark,
        title: "Devotional Trips",
        desc: "Comfortable transport for your spiritual journeys to temples and pilgrimage sites. Peace and comfort guaranteed.",
        points: [
            "On-time pickup",
            "Flight-friendly planning",
            "Doorstep drop",
        ],
    },
    {
        icon: MapPin,
        title: "Local Trip",
        desc: "Convenient local transportation within the city. Perfect for daily commutes, shopping, and local errands.",
        points: [
            "City rides",
            "Hourly rental",
            "Clean AC vehicles",
        ],
    },

    {
        icon: Globe,
        title: "Outstation Trip",
        desc: "Long-distance travel made comfortable. Explore destinations beyond your city with our reliable outstation services.",
        points: [
            "One-way trips",
            "Round trips",
            "Multi-day journeys",
        ],
    },

    {
        icon: School,
        title: "School Trip",
        desc: "Safe and reliable transportation for school excursions and educational tours. Children's safety is our priority.",
        points: [
            "Professional drivers",
            "Reliable timing",
            "Comfortable travel",
        ],
    },

    {
        icon: UsersRound,
        title: "Picnic Trip",
        desc: "Fun and comfortable transport for picnics and group outings. Make your day trips memorable with us.",
        points: [
            "7 and 11 seater options",
            "Group comfort",
            "Route planning",
        ],
    },
];


const sliderDestinations = [
    {
        name: 'Pune',
        image: '/images/pune.png',
    },
    {
        name: 'Mumbai',
        image: '/images/mumbai.png',
    },
    {
        name: 'Lonavala',
        image: '/images/lonavala.png',
    },
    {
        name: 'Mahabaleshwar',
        image: '/images/mahabaleshwar.png',
    },
    {
        name: 'Shirdi',
        image: '/images/shirdi.png',
    },
    {
        name: 'Nashik',
        image: '/images/nashik.png',
    },
    {
        name: 'Chhatrpati ShambhajiNagar',
        image: '/images/Chh.sambhajiNagar.png',
    },
    {
        name: 'Kolhapur',
        image: '/images/kolhapur.png',
    },
    {
        name: 'Satara',
        image: '/images/satara.png',
    },
    {
        name: 'Sangli',
        image: '/images/sangli.png',
    },
    {
        name: 'Alibaug',
        image: '/images/alibaug.png',
    },
    {
        name: 'Matheran',
        image: '/images/matheran.png',
    },
    {
        name: 'Panchgani',
        image: '/images/panchgani.png',
    },
    {
        name: 'Khandala',
        image: '/images/khandala.png',
    },
    {
        name: 'Goa',
        image: '/images/goa.png',
    },
];


/* =========================================================
   WHY SERVICES DATA
========================================================= */

const whyServices = [
    {
        icon: ShieldCheck,
        title: "Safe Travel",
        text: "Verified drivers and dependable travel support.",
    },

    {
        icon: Car,
        title: "Clean Vehicles",
        text: "Well-maintained AC fleet for every ride.",
    },

    {
        icon: CalendarCheck,
        title: "Easy Booking",
        text: "Simple booking for planned or urgent travel.",
    },

    {
        icon: Headphones,
        title: "24/7 Support",
        text: "Assistance whenever your journey needs it.",
    },
];


/* =========================================================
   REVEAL HOOK
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

function DestinationCard({ destination }) {
    return (
        <div
            className="
        w-[280px]
        shrink-0
        px-2
        sm:w-[320px]
        lg:w-[380px]
      "
        >
            <div
                className="
          group
          relative
          h-48
          overflow-hidden
          rounded-2xl
          border
          border-transparent
          bg-white
          shadow-md
          transition-all
          duration-500
          hover:border-[#FF6B47]/40
          hover:shadow-[0_15px_40px_rgba(11,18,32,0.18)]
          sm:h-52
        "
            >
                {/* IMAGE */}
                <img
                    src={destination.image}
                    alt={`${destination.name} destination`}
                    className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-105
          "
                    loading="lazy"
                />

                {/* OVERLAY */}
                <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0B1220]/95
            via-[#0B1220]/25
            to-transparent
          "
                />

                {/* TOP BADGE */}
                <div
                    className="
            absolute
            right-4
            top-4
            rounded-md
            border
            border-white/20
            bg-black/20
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-[#FF6B47]/50
            group-hover:bg-[#FF6B47]
            group-hover:text-[#0B1220]
          "
                >
                    Destination
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-5">

                    <div className="flex items-center gap-2">

                        <MapPin
                            size={18}
                            className="
                shrink-0
                text-[#FF6B47]
                transition-transform
                duration-300
                group-hover:scale-110
              "
                        />

                        <h3 className="text-lg font-bold text-white">
                            {destination.name}
                        </h3>

                    </div>

                    <p className="mt-1 text-xs text-white/70">
                        Explore with Gitam Tours & Travels
                    </p>

                </div>

            </div>
        </div>
    );
}
/* =========================================================
   SERVICE PAGE
========================================================= */

export default function ServicePage({ onBook }) {

    const [isPaused, setIsPaused] = useState(false);

    /* =======================================================
       SECTION REFS
    ======================================================= */

    const [servicesRef, servicesVisible] =
        useReveal(0.12);

    const [whyRef, whyVisible] =
        useReveal(0.15);

    const [ctaRef, ctaVisible] =
        useReveal(0.2);


    return (
        <>
            {/* =====================================================
          NAVBAR
      ===================================================== */}

            <Navbar onBook={onBook} />


            {/* =====================================================
          MAIN
      ===================================================== */}

            <main className="overflow-hidden mt-20 bg-white">



                {/* ===================================================
            SERVICES LIST
        =================================================== */}

                <section
                    ref={servicesRef}
                    id="services-list"
                    className="relative overflow-hidden px-4 py-20 sm:px-6"
                    style={{
                        background:
                            "radial-gradient(circle at top left, rgba(255,107,71,0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #F8FAFC",
                    }}
                >

                    <div className="mx-auto max-w-7xl">


                        {/* SECTION HEADER */}

                        <div
                            className={`
                mb-14
                transform
                text-center
                transition-all
                duration-1000
                ease-out
                ${servicesVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-12 opacity-0"
                                }
              `}
                        >

                            <p
                                className="mb-2 text-sm font-semibold uppercase tracking-widest"
                                style={{
                                    color: "#FF6B47",
                                }}
                            >
                                What We Offer
                            </p>

                            <h2
                                className="text-3xl font-bold sm:text-4xl"
                                style={{
                                    color: "#0B1220",
                                    fontFamily:
                                        "Poppins, sans-serif",
                                }}
                            >
                                Our Travel Services
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                                We offer comprehensive transportation solutions for all your travel needs
                            </p>

                        </div>




                        {/* SERVICE CARDS */}

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {services.map(
                                (
                                    {
                                        icon: Icon,
                                        title,
                                        desc,
                                        points,
                                    },
                                    index
                                ) => (

                                    <div
                                        key={title}
                                        className={`
                    group
                    [perspective:1200px]
                    transition-all
                    duration-700
                    ease-out
                    ${servicesVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-20 opacity-0"
                                            }
                `}
                                        style={{
                                            transitionDelay: `${200 + index * 150}ms`,
                                        }}
                                    >

                                        {/* =========================================
                    FLIP CARD
                ========================================= */}

                                        <div
                                            className="
                        relative
                        h-[380px]
                        w-full
                        [transform-style:preserve-3d]
                        transition-transform
                        duration-700
                        ease-in-out
                        group-hover:[transform:rotateY(180deg)]
                    "
                                        >

                                            {/* =====================================
                        FRONT
                    ===================================== */}

                                            <div
                                                className="
                            absolute
                            inset-0
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white
                            bg-white
                            p-7
                            shadow-sm
                            [backface-visibility:hidden]
                        "
                                            >

                                                {/* Hover Background */}

                                                <div
                                                    className="
                                pointer-events-none
                                absolute
                                inset-0
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(11,18,32,0.04), rgba(255,107,71,0.09))",
                                                    }}
                                                />

                                                {/* TOP ROW */}

                                                <div className="relative mb-6 flex items-start justify-between gap-4">

                                                    {/* ICON */}

                                                    <div
                                                        className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    group-hover:rotate-3
                                    group-hover:scale-110
                                "
                                                        style={{
                                                            backgroundColor:
                                                                index % 2 === 0
                                                                    ? "#EEF6FF"
                                                                    : "#FFE4D6",
                                                        }}
                                                    >

                                                        <Icon
                                                            size={25}
                                                            className="
                                        transition-transform
                                        duration-500
                                        group-hover:scale-110
                                    "
                                                            style={{
                                                                color: "#0B1220",
                                                            }}
                                                        />

                                                    </div>

                                                    {/* BADGE */}

                                                    <span
                                                        className="
                                    rounded-full
                                    px-3
                                    py-1
                                    text-[11px]
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    transition-all
                                    duration-300
                                    group-hover:scale-105
                                "
                                                        style={{
                                                            backgroundColor: "#FFE4D6",
                                                            color: "#FF6B47",
                                                        }}
                                                    >
                                                        Service
                                                    </span>

                                                </div>


                                                {/* TITLE */}

                                                <h3
                                                    className="
                                relative
                                mb-3
                                text-xl
                                font-bold
                                transition-colors
                                duration-300
                                group-hover:text-[#FF6B47]
                            "
                                                    style={{
                                                        color: "#0B1220",
                                                        fontFamily: "Poppins, sans-serif",
                                                    }}
                                                >
                                                    {title}
                                                </h3>


                                                {/* DESCRIPTION */}

                                                <p className="relative mb-5 text-sm leading-relaxed text-slate-500">
                                                    {desc}
                                                </p>


                                                {/* POINTS */}

                                                <div className="relative space-y-2">

                                                    {points.map((point) => (

                                                        <div
                                                            key={point}
                                                            className="
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-600
                                        transition-all
                                        duration-300
                                        hover:translate-x-1
                                    "
                                                        >

                                                            <CheckCircle2
                                                                size={16}
                                                                className="shrink-0"
                                                                style={{
                                                                    color: "#FF6B47",
                                                                }}
                                                            />

                                                            {point}

                                                        </div>

                                                    ))}

                                                </div>

                                            </div>


                                            {/* =====================================
                        BACK
                    ===================================== */}

                                            <div
                                                className="
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        border
        border-white/25
        bg-white/10
        p-7
        text-center
        shadow-2xl
        backdrop-blur-2xl
        backdrop-saturate-150
        [backface-visibility:hidden]
        [transform:rotateY(180deg)]
    "
                                            >
                                                {/* Glass Highlight */}

                                                <div
                                                    className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/20
            via-white/5
            to-[#FF6B47]/10
        "
                                                />

                                                {/* Top Glow */}

                                                <div
                                                    className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-[#FF6B47]/20
            blur-3xl
        "
                                                />

                                                {/* Bottom Glow */}

                                                <div
                                                    className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            h-48
            w-48
            rounded-full
            bg-[#FFB347]/15
            blur-3xl
        "
                                                />

                                                {/* CONTENT */}

                                                <div className="relative z-10 flex flex-col items-center">

                                                    {/* SERVICE ICON */}

                                                    <div
                                                        className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/15
                text-[#FF6B47]
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:scale-110
            "
                                                    >
                                                        <Icon size={34} />
                                                    </div>

                                                    {/* TITLE */}

                                                    <h3 className="mt-6 text-2xl font-bold text-dark">
                                                        {title}
                                                    </h3>

                                                    {/* DESCRIPTION */}

                                                    <p className="mt-3 max-w-xs text-sm leading-6 text-dark/75">
                                                        Ready to plan your{" "}
                                                        <span className="font-semibold text-dark">
                                                            {title.toLowerCase()}
                                                        </span>
                                                        ?
                                                        <br />
                                                        Book your comfortable ride with us today.
                                                    </p>

                                                    {/* BOOK NOW */}

                                                    <button
                                                        type="button"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            onBook?.();
                                                        }}
                                                        className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-[#FF6B47]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff5a35]
                hover:shadow-[0_12px_30px_rgba(255,107,71,0.35)]
                active:scale-95
            "
                                                    >
                                                        <CalendarCheck size={18} />

                                                        Book Now

                                                        <ArrowRight
                                                            size={17}
                                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                                        />
                                                    </button>

                                                    {/* TRUST TEXT */}

                                                    <span className="mt-4 text-xs text-dark/50">
                                                        Safe • Comfortable • Reliable
                                                    </span>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* ===================================================
            WHY OUR SERVICES
        =================================================== */}

                <section
                    ref={whyRef}
                    className="overflow-hidden bg-white px-4 py-20 sm:px-6"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="grid items-center gap-10 lg:grid-cols-2">


                            {/* LEFT CONTENT */}

                            <div
                                className={`
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${whyVisible
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-16 opacity-0"
                                    }
                `}
                            >

                                <p
                                    className="mb-2 text-sm font-semibold uppercase tracking-widest"
                                    style={{
                                        color: "#FF6B47",
                                    }}
                                >
                                    Why Our Services
                                </p>


                                <h2
                                    className="text-3xl font-bold leading-tight sm:text-4xl"
                                    style={{
                                        color: "#0B1220",
                                        fontFamily:
                                            "Poppins, sans-serif",
                                    }}
                                >
                                    Comfortable Travel With Trusted
                                    Service Quality
                                </h2>


                                <p className="mt-4 leading-7 text-slate-500">
                                    Every service is planned around safety,
                                    punctuality and passenger comfort. Whether
                                    it is a local transfer or a long route, our
                                    team keeps your journey simple and reliable.
                                </p>

                            </div>


                            {/* RIGHT BENEFITS */}

                            <div className="grid gap-4 sm:grid-cols-2">

                                {whyServices.map(
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
                        group
                        transform
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-5
                        transition-all
                        duration-700
                        hover:-translate-y-2
                        hover:bg-white
                        hover:shadow-xl
                        ${whyVisible
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-12 opacity-0"
                                                }
                      `}
                                            style={{
                                                transitionDelay: `${250 + index * 150
                                                    }ms`,
                                            }}
                                        >

                                            {/* ICON */}

                                            <div
                                                className="
                          mb-4
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                                                style={{
                                                    backgroundColor:
                                                        "#FFE4D6",
                                                }}
                                            >
                                                <Icon
                                                    size={21}
                                                    style={{
                                                        color: "#FF6B47",
                                                    }}
                                                />
                                            </div>


                                            {/* TITLE */}

                                            <h3
                                                className="
                          mb-1
                          font-bold
                          transition-colors
                          duration-300
                          group-hover:text-[#FF6B47]
                        "
                                                style={{
                                                    color: "#0B1220",
                                                }}
                                            >
                                                {title}
                                            </h3>


                                            {/* TEXT */}

                                            <p className="text-sm leading-6 text-slate-500">
                                                {text}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
    POPULAR DESTINATIONS
===================================================== */}

                <section
                    id="destinations"
                    className="overflow-hidden bg-white py-16 sm:py-20"
                >
                    {/* HEADING */}

                    <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6">

                        <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#FF6B47]">
                            Popular Destinations
                        </p>

                        <h2
                            className="text-3xl font-bold text-[#0B1220] sm:text-4xl"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Where Can We Take You?
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                            Explore popular destinations across Maharashtra
                            with Gitam Tours and Travels.
                        </p>

                    </div>


                    {/* =====================================================
      SLIDER
  ===================================================== */}

                    <div
                        className="relative w-full overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >






                        {/* TRACK */}

                        <div
                            className={`
        destination-track
        flex
        w-max
        ${isPaused
                                    ? "destination-paused"
                                    : ""
                                }
      `}
                        >

                            {/* FIRST SET */}

                            {sliderDestinations.map(
                                (destination, index) => (
                                    <DestinationCard
                                        key={`first-${destination.name}-${index}`}
                                        destination={destination}
                                    />
                                )
                            )}


                            {/* DUPLICATE SET */}

                            {sliderDestinations.map(
                                (destination, index) => (
                                    <DestinationCard
                                        key={`second-${destination.name}-${index}`}
                                        destination={destination}
                                    />
                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* ===================================================
            FINAL CTA
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
              rounded-3xl
              px-6
              py-12
              text-center
              shadow-2xl
              transition-all
              duration-1000
              ease-out
              sm:px-10
              ${ctaVisible
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-16 scale-95 opacity-0"
                            }
            `}
                        style={{
                            background:
                                "linear-gradient(135deg, #0B1220, #0a2444)",
                        }}
                    >

                        {/* CTA ICON */}

                        <Route
                            className={`
                mx-auto
                mb-4
                transition-all
                duration-700
                ${ctaVisible
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "rotate-[-25deg] scale-50 opacity-0"
                                }
              `}
                            size={34}
                            style={{
                                color: "#FF6B47",
                            }}
                        />


                        {/* TITLE */}

                        <h2
                            className="
                text-3xl
                font-bold
                text-white
                sm:text-4xl
              "
                            style={{
                                fontFamily:
                                    "Poppins, sans-serif",
                            }}
                        >
                            Ready To Plan Your Next Trip?
                        </h2>


                        {/* DESCRIPTION */}

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            Book a clean, comfortable vehicle with
                            Gitam Tours and Travels today.
                        </p>


                        {/* BUTTON */}

                        <button
                            onClick={() =>
                                onBook && onBook()
                            }
                            className="
                mt-7
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-8
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-2xl
                active:scale-95
              "
                            style={{
                                backgroundColor: "#FF6B47",
                            }}
                        >
                            Book Now

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300"
                            />
                        </button>

                    </div>

                </section>

            </main>

            <FloatingActions />
        </>
    );
}