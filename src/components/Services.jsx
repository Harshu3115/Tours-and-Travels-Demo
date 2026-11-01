import { useEffect, useRef, useState } from "react";
import { services } from "../data/services";
import SectionHeader from "./SectionHeader";


const tones = [
  "bg-gold",
  "bg-ocean",
  "bg-jade",
  "bg-sunny",
];

export default function Services() {
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
      id="services"
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
            eyebrow="Our Services"
            title="Travel Services Built Around Your Plans"
            subtitle="We offer comprehensive car rental and tour services to meet all your transportation needs."
          />
        </div>


        {/* =====================================
            SERVICE CARDS
        ===================================== */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map(
            ({ icon: Icon, title, text }, index) => {
              const tone = tones[index % tones.length];
              return (
                <article
                  key={title}
                  className={`
                  premium-card group
                  transform p-6
                  transition-all
                  duration-700
                  ease-out
                  ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                    }
                `}
                  style={{
                    transitionDelay: `${index * 180}ms`,
                  }}
                >

                  {/* TOP ROW */}

                  <div className="flex items-start justify-between gap-4">

                    {/* ICON */}

                    <div
                      className={`
                      grid size-12
                      place-items-center
                      rounded-2xl
                      bg-ink
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-110
                      ${tone}
                    `}
                    >
                      <Icon
                        size={23}
                        strokeWidth={2}
                      />
                    </div>


                    {/* ENQUIRE */}

                    <a
                      href="#contact"
                      className="
                      relative
                      text-sm
                      font-semibold
                      text-gold
                      transition-colors
                      duration-300
                      hover:text-ink
                    "
                    >
                      Enquire

                      {/* UNDERLINE */}
                      <span
                        className="
                        absolute
                        -bottom-1
                        left-0
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gold
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                      />
                    </a>

                  </div>


                  {/* TITLE */}

                  <h3
                    className="
                    mt-6
                    text-xl
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
                    lg:text-[14px]
                    leading-7
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