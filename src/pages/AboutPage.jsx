import {
    Award,
    CalendarCheck,
    Car,
    Headphones,
    MapPin,
    Route,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import FloatingActions from "../components/FloatingActions";


/* =========================================================
   STATS
========================================================= */

const stats = [
    {
        value: "500+",
        label: "Happy Clients",
    },
    {
        value: "1000+",
        label: "Successful Trips",
    },
    {
        value: "24/7",
        label: "Travel Support",
    },
];


/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
    {
        icon: ShieldCheck,
        text: "Safe & verified travel experience",
    },
    {
        icon: Sparkles,
        text: "Clean, air-conditioned vehicles",
    },
    {
        icon: CalendarCheck,
        text: "Easy advance booking support",
    },
];


/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        icon: Headphones,
        title: "24/7 Car Rental Support",
        desc: "Get quick assistance for bookings, trip planning, route guidance and travel changes whenever you need it.",
    },
    {
        icon: Car,
        title: "Car Reservation anytime",
        desc: "Travel in clean, comfortable and air-conditioned vehicles suitable for local, airport and outstation trips.",
    },
    {
        icon: MapPin,
        title: "Lots of Pickup Locations",
        desc: "Flexible pickup and drop options across Pune, Mumbai, Nashik and nearby travel destinations.",
    },
];


/* =========================================================
   COUNTER COMPONENT
========================================================= */

function Counter({
    value,
    isVisible,
    duration = 1800,
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        // 24/7 is not a normal number counter
        if (value === "24/7") {
            setCount(24);
            return;
        }

        const target = parseInt(
            value.replace(/\D/g, ""),
            10
        );

        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            // Smooth ease-out
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            setCount(
                Math.floor(
                    easedProgress * target
                )
            );

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrame =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, value, duration]);

    if (value === "24/7") {
        return <>24/7</>;
    }

    return (
        <>
            {count}
            {value.includes("+") && "+"}
        </>
    );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage({ onBook }) {
    const sectionRef = useRef(null);

    const [isVisible, setIsVisible] =
        useState(false);


    /* =========================================================
       INTERSECTION OBSERVER
    ========================================================= */

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Animate only once
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>
            {/* =====================================================
          NAVBAR
      ===================================================== */}

            <Navbar onBook={onBook} />


            {/* =====================================================
          HERO
      ===================================================== */}

            <HeroSlider onBook={onBook} />


            {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

            <section
                ref={sectionRef}
                id="about"
                className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24"
                style={{
                    background:
                        "radial-gradient(circle at top left, rgba(255,107,71,0.14), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.12), transparent 32%), #F8FAFC",
                }}
            >

                {/* =================================================
            BACKGROUND DECORATIONS
        ================================================= */}

                <div
                    className="
            absolute
            left-0
            top-16
            h-48
            w-48
            rounded-full
            bg-champagne/60
            blur-3xl
            animate-pulse
          "
                />

                <div
                    className="
            absolute
            bottom-8
            right-0
            h-64
            w-64
            rounded-full
            bg-ocean/10
            blur-3xl
            animate-pulse
          "
                />


                <div className="relative mx-auto max-w-7xl">


                    {/* =================================================
              TOP ABOUT AREA
          ================================================= */}

                    <div className="mb-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">


                        {/* =================================================
                LEFT CONTENT
            ================================================= */}

                        <div
                            className={`
                transform
                transition-all
                duration-1000
                ease-out
                ${isVisible
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-16 opacity-0"
                                }
              `}
                        >

                            {/* ABOUT BADGE */}

                            <div
                                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-gold/20
                  bg-white
                  px-4
                  py-2
                  shadow-sm
                  transition-all
                  duration-700
                  ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "-translate-y-6 opacity-0"
                                    }
                `}
                            >
                                <Sparkles
                                    size={15}
                                    style={{
                                        color: "#F59E0B",
                                    }}
                                />

                                <p
                                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    sm:text-sm
                  "
                                    style={{
                                        color: "#F59E0B",
                                    }}
                                >
                                    About Us
                                </p>
                            </div>


                            {/* TITLE */}

                            <h2
                                className={`
                  mt-5
                  max-w-xl
                  transform
                  text-3xl
                  font-bold
                  font-display
                  leading-tight
                  transition-all
                  duration-1000
                  sm:text-4xl
                  lg:text-5xl
                  ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                    }
                `}
                                style={{
                                    color: "#0F3460",
                                    fontFamily:
                                        "layfair Display, Georgia, serif;",
                                    transitionDelay: "150ms",
                                }}
                            >
                                Welcome To Gitam Tours and Travels
                            </h2>


                            {/* FIRST DESCRIPTION */}

                            <p
                                className={`
  mt-5
  max-w-2xl
  transform
  text-sm
  leading-7
  text-slate-600
  transition-all
  duration-1000
  sm:text-base
  lg:text-[14px]
  ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                    }
`}
                                style={{
                                    transitionDelay: "300ms",
                                }}
                            >
                                Gitam Tours and Travels is your trusted partner for all transportation needs in Pune and across Maharashtra. We specialize in providing premium car rental and tour services with a diverse fleet of well-maintained vehicles. Whether you need a luxury car for a wedding, an economy car for daily commute, a spacious SUV for family trips, or a bus for group travel, we have the perfect solution for you. Our commitment is to provide safe, comfortable, and affordable transportation with professional drivers and 24/7 customer support. With years of experience in the industry, we understand that every journey is unique and strive to make your travel experience memorable and hassle-free. At Gitam Tours and Travels, customer satisfaction is our top priority. We offer flexible rental plans, competitive pricing, and a wide range of pickup locations across the city. Book with confidence and experience the difference of traveling with Gitam Tours and Travels.
                            </p>




                            {/* =================================================
                  HIGHLIGHTS
              ================================================= */}

                            <div className="mt-7 space-y-3">

                                {highlights.map(
                                    ({ icon: Icon, text }, index) => (
                                        <div
                                            key={text}
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
                        text-sm
                        font-medium
                        text-slate-700
                        shadow-sm
                        backdrop-blur
                        transition-all
                        duration-700
                        hover:-translate-y-1
                        hover:shadow-lg
                        ${isVisible
                                                    ? "translate-x-0 opacity-100"
                                                    : "-translate-x-10 opacity-0"
                                                }
                      `}
                                            style={{
                                                transitionDelay: `${600 + index * 150
                                                    }ms`,
                                            }}
                                        >

                                            {/* ICON */}

                                            <span
                                                className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
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
                                                    size={17}
                                                    style={{
                                                        color: "#F59E0B",
                                                    }}
                                                />
                                            </span>

                                            {text}

                                        </div>
                                    )
                                )}

                            </div>





                        </div>


                        {/* =================================================
    RIGHT IMAGE + STATS
================================================= */}

                        <div
                            className={`
    relative
    transform
    transition-all
    duration-1200
    ease-out
    ${isVisible
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-20 opacity-0"
                                }
  `}
                            style={{
                                transitionDelay: "250ms",
                            }}
                        >
                            {/* =================================================
      IMAGE OUTER CONTAINER
  ================================================= */}

                            <div className="relative">

                                {/* IMAGE GLOW */}
                                <div
                                    className={`
        absolute
        -inset-3
        rounded-[2rem]
        bg-gradient-to-br
        from-champagne
        via-white
        to-mist
        blur-sm
        transition-all
        duration-1000
        ${isVisible
                                            ? "scale-100 opacity-100"
                                            : "scale-90 opacity-0"
                                        }
      `}
                                />

                                {/* IMAGE CONTAINER */}
                                <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/70">

                                    <img
                                        src="/images/showcase%20c-1.png"
                                        alt="Gitam Tours and Travels premium car rental service"
                                        className={`
          h-[340px]
          w-full
          object-cover
          transition-all
          duration-[1600ms]
          ease-out
          sm:h-[460px]
          ${isVisible
                                                ? "scale-100 opacity-100"
                                                : "scale-110 opacity-0"
                                            }
          group-hover:scale-105
        `}
                                        loading="lazy"
                                    />

                                    {/* IMAGE OVERLAY */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(11,18,32,0.72), rgba(11,18,32,0.08) 58%, rgba(255,107,71,0.12))",
                                        }}
                                    />

                                    {/* =================================================
          TRUSTED TRAVEL PARTNER
      ================================================= */}

                                    <div
                                        className={`
          absolute
          bottom-4
          left-4
          right-4
          transform
          rounded-2xl
          border
          border-white/80
          bg-white/95
          p-4
          shadow-xl
          backdrop-blur
          transition-all
          duration-1000
          ${isVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-12 opacity-0"
                                            }
        `}
                                        style={{
                                            transitionDelay: "850ms",
                                        }}
                                    >
                                        <div className="flex items-center gap-3">

                                            {/* ICON */}
                                            <div
                                                className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              shadow-lg
              transition-transform
              duration-300
              hover:scale-110
            "
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, #0F3460, #1a4a7a)",
                                                }}
                                            >
                                                <Award
                                                    size={22}
                                                    style={{
                                                        color: "#F59E0B",
                                                    }}
                                                />
                                            </div>

                                            {/* TEXT */}
                                            <div>
                                                <h3
                                                    className="
                text-sm
                font-bold
                sm:text-base
              "
                                                    style={{
                                                        color: "#0F3460",
                                                    }}
                                                >
                                                    Trusted Travel Partner
                                                </h3>

                                                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                                                    Local, airport and outstation car rental service.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                {/* =================================================
        YEARS EXPERIENCE BADGE
        KEEP OUTSIDE IMAGE CONTAINER
    ================================================= */}

                                <div
                                    className={`
        absolute
        -left-5
        -top-5
        hidden
        h-28
        w-28
        transform
        flex-col
        items-center
        justify-center
        rounded-2xl
        text-white
        shadow-xl
        ring-4
        ring-white/70
        transition-all
        duration-1000
        sm:flex
        ${isVisible
                                            ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
                                            : "-translate-x-10 -translate-y-10 -rotate-12 opacity-0"
                                        }
      `}
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #F59E0B, #D97706)",
                                        transitionDelay: "500ms",
                                    }}
                                >
                                    <Route size={24} />

                                    <span className="mt-1 text-xl font-bold">
                                        10+
                                    </span>

                                    <span className="px-2 text-center text-[11px] leading-tight">
                                        Years Experience
                                    </span>
                                </div>


                                {/* =================================================
        HAPPY CLIENTS BADGE
    ================================================= */}

                                <div
                                    className={`
        absolute
        -bottom-5
        -right-5
        hidden
        h-28
        w-28
        transform
        flex-col
        items-center
        justify-center
        rounded-2xl
        text-white
        shadow-xl
        ring-4
        ring-white/70
        transition-all
        duration-1000
        sm:flex
        ${isVisible
                                            ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
                                            : "translate-x-10 translate-y-10 rotate-12 opacity-0"
                                        }
      `}
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #0F3460, #0a2444)",
                                        transitionDelay: "700ms",
                                    }}
                                >
                                    <Users size={24} />

                                    <span className="mt-1 text-xl font-bold">
                                        500+
                                    </span>

                                    <span className="px-2 text-center text-[11px] leading-tight">
                                        Happy Clients
                                    </span>
                                </div>

                            </div>


                            {/* =================================================
      STATS — COMPLETELY BELOW IMAGE OUTER DIV
  ================================================= */}

                            <div
                                className="
      relative
      z-10
      mt-10
      grid
      grid-cols-3
      gap-3
      sm:mt-12
      sm:gap-4
    "
                            >
                                {stats.map(({ value, label }, index) => (
                                    <div
                                        key={label}
                                        className={`
          group
          relative
          transform
          rounded-2xl
          border
          border-white
          bg-white/90
          p-4
          text-center
          shadow-sm
          backdrop-blur
          transition-all
          duration-700
          hover:-translate-y-2
          hover:shadow-xl
          ${isVisible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-12 opacity-0"
                                            }
        `}
                                        style={{
                                            transitionDelay: `${1050 + index * 150}ms`,
                                        }}
                                    >

                                        {/* NUMBER */}
                                        <div
                                            className="
            text-2xl
            font-bold
            sm:text-3xl
          "
                                            style={{
                                                color: "#0F3460",
                                                fontFamily: "Poppins, sans-serif",
                                            }}
                                        >
                                            <Counter
                                                value={value}
                                                isVisible={isVisible}
                                                duration={1800}
                                            />
                                        </div>

                                        {/* LABEL */}
                                        <div
                                            className="
            mt-1
            text-[11px]
            leading-snug
            text-slate-500
            sm:text-xs
          "
                                        >
                                            {label}
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>


                    {/* =================================================
              FEATURES
          ================================================= */}

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {features.map(
                            ({ icon: Icon, title, desc }, index) => (
                                <div
                                    key={title}
                                    className={`
                    group
                    relative
                    transform
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white
                    bg-white
                    p-7
                    shadow-sm
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:shadow-2xl
                    ${isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-16 opacity-0"
                                        }
                  `}
                                    style={{
                                        transitionDelay: `${1300 + index * 180
                                            }ms`,
                                    }}
                                >

                                    {/* CARD HOVER BACKGROUND */}

                                    <div
                                        className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(11,18,32,0.04), rgba(255,107,71,0.08))",
                                        }}
                                    />


                                    {/* ICON */}

                                    <div
                                        className="
                      relative
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #EFF6FF, #FFE4D6)",
                                        }}
                                    >
                                        <Icon
                                            size={22}
                                            style={{
                                                color: "#0F3460",
                                            }}
                                        />
                                    </div>


                                    {/* TITLE */}

                                    <h3
                                        className="
                      relative
                      mb-2
                      text-lg
                      font-bold
                      transition-colors
                      duration-300
                      group-hover:text-gold
                    "
                                        style={{
                                            color: "#0F3460",
                                            fontFamily:
                                                "Poppins, sans-serif",
                                        }}
                                    >
                                        {title}
                                    </h3>


                                    {/* DESCRIPTION */}

                                    <p className="relative text-sm leading-relaxed text-slate-500">
                                        {desc}
                                    </p>

                                </div>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
          FOOTER
      ===================================================== */}

            <FloatingActions />

        </>
    );
}