import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { vehicles } from "../data/vehicles";
import BookingModal from "./BookingModal";

export default function HeroSlider({ onBook }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(() => vehicles, []);

  const currentVehicle = slides[active];

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 15000);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  /* =========================================================
     CHANGE SLIDE
  ========================================================= */

  const move = (direction) => {
    setActive(
      (index) =>
        (index + direction + slides.length) % slides.length
    );
  };

  const handleFormFocus = () => {
    setPaused(true);
  };

  const handleFormBlur = (event) => {
    // Keep slider paused if focus moves
    // to another field inside the form
    if (
      event.currentTarget.contains(
        event.relatedTarget
      )
    ) {
      return;
    }

    setPaused(false);
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-ink
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}

      {/* =====================================================
    BACKGROUND SLIDES
===================================================== */}

      {slides.map((vehicle, index) => (
        <div
          key={vehicle.id}
          className={`
      absolute
      inset-0
      transition-opacity
      duration-[1400ms]
      ease-in-out
      ${active === index
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
            }
    `}
        >
          {/* CAR IMAGE */}
          <img
            src={vehicle.image}
            alt={`${vehicle.name} rental car`}
            className={`
        absolute
        inset-0
        h-full
        w-full
        object-cover
        transition-transform
        duration-[6500ms]
        ease-out
        ${active === index
                ? "scale-100"
                : "scale-110"
              }
      `}
          />

          {/* =================================================
        MAIN DARK OVERLAY
    ================================================= */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: `
          linear-gradient(
            90deg,
            rgba(5, 10, 20, 0.95) 0%,
            rgba(5, 10, 20, 0.82) 28%,
            rgba(5, 10, 20, 0.60) 52%,
            rgba(5, 10, 20, 0.38) 75%,
            rgba(5, 10, 20, 0.25) 100%
          )
        `,
            }}
          />

          {/* =================================================
        BOTTOM OVERLAY
    ================================================= */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: `
          linear-gradient(
            0deg,
            rgba(5, 10, 20, 0.92) 0%,
            rgba(5, 10, 20, 0.68) 25%,
            rgba(5, 10, 20, 0.25) 58%,
            rgba(5, 10, 20, 0.05) 100%
          )
        `,
            }}
          />

          {/* =================================================
        MOBILE EXTRA OVERLAY
    ================================================= */}
          <div
            className="pointer-events-none absolute inset-0 z-10 sm:hidden"
            style={{
              background:
                "rgba(5, 10, 20, 0.20)",
            }}
          />
        </div>
      ))}


      {/* =====================================================
          AMBIENT BLOBS
      ===================================================== */}

      <div
        className="
          hero-glow
          pointer-events-none
          absolute
          -top-10
          right-[8%]
          z-10
          h-72
          w-72
          rounded-full
          blob-coral
        "
      />

      <div
        className="
          hero-glow-delay
          pointer-events-none
          absolute
          bottom-0
          right-[22%]
          z-10
          h-56
          w-56
          rounded-full
          blob-sunny
        "
      />

      <div
        className="
          hero-glow
          pointer-events-none
          absolute
          bottom-10
          right-[2%]
          z-10
          h-64
          w-64
          rounded-full
          blob-ocean
        "
      />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-24
          sm:px-6
          sm:py-28
          lg:px-8
          lg:py-24
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[minmax(0,1fr)_430px]
            lg:gap-14
            xl:grid-cols-[minmax(0,1fr)_470px]
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            key={currentVehicle.id}
            className="
              max-w-2xl
              text-white
              animate-heroContent
            "
          >

            {/* EYEBROW */}

            <p
              className="
                animate-heroFadeUp
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-xl
                border
                border-gold/30
                bg-gold/10
                px-3
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-gold
                backdrop-blur-md
                sm:px-4
                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              <span className="size-1.5 shrink-0 rounded-full bg-sunny animate-pulse" />

              <span>
                Chauffeur comfort, made simple
              </span>
            </p>


            {/* TITLE */}

            <h1
              className="
                animate-heroTitle
                mt-5
                max-w-3xl
                font-display
                text-5xl
                font-semibold
                leading-[1.05]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              {currentVehicle.name}
            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                animate-heroDescription
                mt-5
                max-w-xl
                text-base
                leading-7
                text-white/85
                sm:text-lg
                sm:leading-8
              "
            >
              {currentVehicle.description}
            </p>


            {/* BUTTONS */}

            <div
              className="
                animate-heroButtons
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <button
                onClick={() =>
                  onBook(currentVehicle.id)
                }
                className="
                  btn-primary
                  w-full
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  sm:w-auto
                "
              >
                Book Your Ride
              </button>

              <a
                href="#vehicles"
                className="
                  btn-secondary
                  w-full
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  sm:w-auto
                "
              >
                Explore Fleet
              </a>

            </div>


            {/* TRUST ITEMS */}

            <div
              className="
                animate-heroTrust
                mt-7
                flex
                flex-wrap
                gap-x-5
                gap-y-3
                text-xs
                text-white/75
                sm:mt-8
                sm:gap-x-6
                sm:text-sm
              "
            >

              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" />
                Safe Travel
              </span>

              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" />
                Clean Vehicles
              </span>

              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" />
                24/7 Support
              </span>

            </div>

          </div>


          {/* =================================================
              BOOKING FORM
          ================================================= */}

          <div
            key={`booking-${currentVehicle.id}`}
            className="
        hero-booking-form
        w-full
        animate-bookingForm
        lg:mt-8
    "
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          >

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                border
                border-white/20
                bg-white/[0.08]
                shadow-2xl
                backdrop-blur-2xl
                backdrop-saturate-150
              "
            >

              <BookingModal
                isOpen={true}
                inline={true}
                onClose={() => { }}
                preselectedVehicle={currentVehicle.id}
              />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SLIDER CONTROLS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-4
          left-4
          right-4
          z-30
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          sm:bottom-6
          sm:px-2
        "
      >

        {/* DOTS */}

        <div className="flex gap-2">

          {slides.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to ${slide.name}`}
              onClick={() => setActive(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-500
                sm:h-2.5
                ${active === index
                  ? "w-8 bg-gold sm:w-9"
                  : "w-2 bg-white/45 hover:bg-white/70 sm:w-2.5"
                }
              `}
            />
          ))}

        </div>




      </div>

    </section>
  );
}