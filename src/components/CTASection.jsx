import { useEffect, useRef, useState } from "react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "../config/site";

export default function CTASection({ onBook }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =========================================
     SCROLL OBSERVER
  ========================================= */

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
        threshold: 0.2,
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-20 text-white"
    >

      {/* =====================================
          BACKGROUND IMAGE
      ===================================== */}

      <img
        src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury car on open road"
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-cover
          blur-[3px]
          transition-all
          duration-[1800ms]
          ease-out
          ${isVisible
            ? "scale-100 opacity-100"
            : "scale-110 opacity-0"
          }
        `}
        loading="lazy"
      />


      {/* =====================================
          BLUR OVERLAY
      ===================================== */}

      <div className="absolute inset-0 bg-black/0 backdrop-blur-[4px]" />


      {/* =====================================
          DARK GRADIENT
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/55 to-black/10" />


      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        className={`
          relative
          z-10
          mx-auto
          max-w-5xl
          px-4
          text-center
          transition-all
          duration-1000
          ease-out
          sm:px-6
          lg:px-8
          ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
          }
        `}
      >

        {/* EYEBROW */}

        <p
          className={`
            text-sm
            font-semibold
            uppercase
            tracking-[0.28em]
            text-gold
            transition-all
            duration-700
            ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
            }
          `}
        >
          Next Journey
        </p>


        {/* TITLE */}

        <h2
          className={`
            mt-4
            font-display
            text-4xl
            font-semibold
            transition-all
            duration-1000
            sm:text-5xl
            ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
            }
          `}
          style={{
            transitionDelay: "150ms",
          }}
        >
          Ready For Your Next Journey?
        </h2>


        {/* DESCRIPTION */}

        <p
          className={`
            mx-auto
            mt-4
            max-w-2xl
            text-lg
            leading-8
            text-white/80
            transition-all
            duration-1000
            ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
            }
          `}
          style={{
            transitionDelay: "300ms",
          }}
        >
          Book your comfortable ride with Gitam Tours &
          Travels today.
        </p>


        {/* =====================================
            BUTTONS
        ===================================== */}

        <div
          className={`
            mt-8
            flex
            flex-col
            justify-center
            gap-3
            transition-all
            duration-1000
            sm:flex-row
            ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
            }
          `}
          style={{
            transitionDelay: "450ms",
          }}
        >

          {/* BOOK BUTTON */}

          <button
            onClick={() => onBook()}
            className="
              btn-primary
              transition-all
              duration-300
              text-white
              hover:-translate-y-1
              hover:shadow-xl
              active:translate-y-0
            "
          >
            Book Your Ride
          </button>


          {/* CALL BUTTON */}

          <a
            href={`tel:${siteConfig.phone}`}
            className="
              btn-secondary
              transition-all
              rounded-xl 
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              active:translate-y-0
            "
          >
            <PhoneCall
              size={18}
              className="transition-transform duration-300 group-hover:rotate-6"
            />

            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}