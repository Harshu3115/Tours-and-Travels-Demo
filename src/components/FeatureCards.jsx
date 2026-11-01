import { useEffect, useRef, useState } from "react";
import { featureCards } from "../data/services";

const tones = [
  { bg: "bg-gold/12", text: "text-gold", hoverBg: "group-hover:bg-gold" },
  { bg: "bg-ocean/12", text: "text-ocean", hoverBg: "group-hover:bg-ocean" },
  { bg: "bg-jade/12", text: "text-jade", hoverBg: "group-hover:bg-jade" },
];

export default function FeatureCards() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="overflow-hidden bg-mist py-14"
    >
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">

        {featureCards.map(
          ({ icon: Icon, title, text }, index) => {
            const tone = tones[index % tones.length];
            return (
            <article
              key={title}
              className={`
                premium-card group p-6
                transform
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

              {/* ICON */}
              <div
                className={`
                  grid size-12 place-items-center
                  rounded-2xl
                  ${tone.bg} ${tone.text} ${tone.hoverBg}
                  transition-all
                  duration-300
                  group-hover:text-white
                  group-hover:scale-110
                  group-hover:rotate-3
                `}
              >
                <Icon
                  size={23}
                  strokeWidth={2}
                />
              </div>


              {/* TITLE */}
              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-ink
                "
              >
                {title}
              </h3>


              {/* DESCRIPTION */}
              <p
                className="
                  mt-2
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
    </section>
  );
}