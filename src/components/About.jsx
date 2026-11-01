import { useEffect, useRef, useState } from "react";
import {
  CarFront,
  ShieldCheck,
  Timer,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const stats = [
  ["10+", "Years of Experience", "bg-champagne/70"],
  ["500+", "Happy Customers", "bg-ocean/10"],
  ["1000+", "Successful Trips", "bg-jade/10"],
];

const benefits = [
  {
    icon: ShieldCheck,
    text: "Safe rides",
    color: "text-gold",
  },
  {
    icon: Timer,
    text: "On-time trips",
    color: "text-sunny",
  },
  {
    icon: CarFront,
    text: "Clean cars",
    color: "text-ocean",
  },
];

/* =========================================
   ANIMATED COUNTER
========================================= */

function Counter({
  value,
  isVisible,
  duration = 1800,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

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

      // Smooth ease-out effect
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * target)
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

  return (
    <>
      {count}
      {value.includes("+") && "+"}
    </>
  );
}


/* =========================================
   ABOUT COMPONENT
========================================= */

export default function About() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);


  /* =========================================
     INTERSECTION OBSERVER
  ========================================= */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
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
      id="about"
      className="section overflow-hidden bg-white"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">


        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div
          className={`transform transition-all duration-1000 ease-out ${isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-16 opacity-0"
            }`}
        >

          {/* SECTION HEADER */}

          <SectionHeader
            eyebrow="About Gitam"
            title="Welcome To Gitam Tours And Travels"
            align="left"
          />


          {/* DESCRIPTION */}

          <p className="mt-6 text-lg lg:text-[14px] leading-8 text-slate-600">
            Gitam Tours and Travels is your trusted partner for all transportation needs in Pune and across Maharashtra. We specialize in providing premium car rental and tour services with a diverse fleet of well-maintained vehicles. Whether you need a luxury car for a wedding, an economy car for daily commute, a spacious SUV for family trips, or a bus for group travel, we have the perfect solution for you. Our commitment is to provide safe, comfortable, and affordable transportation with professional drivers and 24/7 customer support. With years of experience in the industry, we understand that every journey is unique and strive to make your travel experience memorable and hassle-free. At Gitam Tours and Travels, customer satisfaction is our top priority. We offer flexible rental plans, competitive pricing, and a wide range of pickup locations across the city. Book with confidence and experience the difference of traveling with Gitam Tours and Travels.
          </p>


          {/* =====================================
              STATS
          ===================================== */}

          <div className="mt-8 grid grid-cols-3 gap-3">

            {stats.map(
              ([value, label, tint], index) => (
                <div
                  key={label}
                  className={`transform rounded-2xl border border-slate-100 ${tint} p-4 transition-all duration-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${400 + index * 150
                      }ms`,
                  }}
                >

                  {/* NUMBER */}

                  <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">

                    <Counter
                      value={value}
                      isVisible={isVisible}
                      duration={1800}
                    />

                  </p>


                  {/* LABEL */}

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
                    {label}
                  </p>

                </div>
              )
            )}

          </div>

        </div>


        {/* =====================================
            RIGHT IMAGE
        ===================================== */}

        <div
          className={`relative transform transition-all duration-1000 ease-out ${isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-16 opacity-0"
            }`}
          style={{
            transitionDelay: "200ms",
          }}
        >

          <div className="group relative overflow-hidden rounded-[2rem] bg-ink shadow-premium">


            {/* IMAGE */}

            <img
              src="/images/s-3.png"
              alt="Premium road journey"
              className={`h-[420px] w-full object-cover opacity-80 transition-transform duration-[1400ms] ease-out ${isVisible
                ? "scale-100"
                : "scale-110"
                } group-hover:scale-105`}
              loading="lazy"
            />


            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />


            {/* =====================================
                BENEFITS
            ===================================== */}

            <div className="absolute inset-x-5 bottom-5 grid gap-3 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl sm:grid-cols-3">

              {benefits.map(
                ({ icon: Icon, text, color }, index) => (

                  <div
                    key={text}
                    className={`flex transform items-center gap-2 transition-all duration-700 ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                      }`}
                    style={{
                      transitionDelay: `${700 + index * 150
                        }ms`,
                    }}
                  >

                    <Icon
                      className={`shrink-0 ${color}`}
                      size={20}
                    />

                    <span className="text-sm font-medium">
                      {text}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}