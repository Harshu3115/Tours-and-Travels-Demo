import { useEffect, useRef, useState } from "react";
import { vehicles } from "../data/vehicles";
import SectionHeader from "./SectionHeader";
import VehicleCard from "./VehicleCard";

export default function VehicleListing({ onBook }) {
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
      id="vehicles"
      className="section overflow-hidden bg-mist"
    >
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-5">

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
            eyebrow="Our Vehicles"
            title="Choose the perfect vehicle for your journey."
            subtitle="Choose from our diverse range of well-maintained vehicles for your journey"
          />
        </div>


        {/* =====================================
            VEHICLE CARDS
        ===================================== */}

        <div className="mt-12 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-0">

          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`transform transition-all duration-800 ease-out ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
                }`}
              style={{
                transitionDelay: `${250 + index * 200}ms`,
              }}
            >
              <VehicleCard
                vehicle={vehicle}
                onBook={onBook}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}