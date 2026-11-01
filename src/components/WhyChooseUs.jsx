import { useEffect, useRef, useState } from "react";
import { reasons } from "../data/services";
import SectionHeader from "./SectionHeader";

const tones = [
  { chip: "bg-champagne", text: "text-gold", hoverBg: "group-hover:bg-gold" },
  { chip: "bg-ocean/15", text: "text-ocean", hoverBg: "group-hover:bg-ocean" },
  { chip: "bg-jade/15", text: "text-jade", hoverBg: "group-hover:bg-jade" },
  { chip: "bg-sunny/20", text: "text-[#B8790A]", hoverBg: "group-hover:bg-sunny" },
];

export default function WhyChooseUs() {
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
    <section
      ref={sectionRef}
      className="section overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div
          className={`transform transition-all duration-1000 ease-out ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
            }`}
        >
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Gitam Tours & Travels?"
          />
        </div>


        {/* =====================================
            REASONS
        ===================================== */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {reasons.map(
            ({ icon: Icon, title, text }, index) => {
              const tone = tones[index % tones.length];
              return (
              <article
                key={title}
                className={`
                  group
                  transform
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-700
                  ease-out
                  hover:-translate-y-2
                  hover:shadow-premium
                  ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 180}ms`,
                }}
              >

                {/* ICON */}

                <div
                  className={`
                    grid
                    size-11
                    place-items-center
                    rounded-2xl
                    ${tone.chip} ${tone.text} ${tone.hoverBg}
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-white
                  `}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                  />
                </div>


                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    text-ink
                    transition-colors
                    duration-300
                    group-hover:text-gold
                  "
                >
                  {title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {text}
                </p>

              </article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}