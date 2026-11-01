import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function VehicleCard({ vehicle, onBook }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className="
        premium-card
        group
        flex
        h-full
        flex-col
        overflow-hidden
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-premium
      "
    >

      {/* =====================================
          VEHICLE IMAGE
      ===================================== */}

      <div className="relative h-60 shrink-0 overflow-hidden bg-slate-100">

        <img
          src={vehicle.image}
          alt={`${vehicle.name} for rent`}
          onLoad={() => setImageLoaded(true)}
          className={`
            h-full
            w-full
            object-cover
            transition-all
            duration-1000
            ease-out
            group-hover:scale-105
            ${imageLoaded
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
            }
          `}
          loading="lazy"
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-ink/40
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* CATEGORY BADGE */}

        <span
          className="
            absolute
            left-4
            top-4
            rounded-md
            bg-ink
            px-3
            py-1
            text-xs
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:bg-gold
            group-hover:text-white
          "
        >
          {vehicle.category}
        </span>

      </div>


      {/* =====================================
          VEHICLE CONTENT
      ===================================== */}

      <div className="flex flex-1 flex-col p-6">

        {/* VEHICLE NAME */}

        <h3
          className="
            font-display
            text-2xl
            font-semibold
            text-ink
            transition-colors
            duration-300
            group-hover:text-gold
          "
        >
          {vehicle.name}
        </h3>


        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            min-h-[58px]
            leading-7
            text-slate-600
          "
        >
          {vehicle.description}
        </p>


        {/* =====================================
            FEATURES
        ===================================== */}

        <div className="mt-5 min-h-[132px]">

          <div className="flex flex-wrap content-start gap-2">

            {vehicle.features.map(
              (feature, index) => (
                <span
                  key={feature}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-600
                    opacity-100
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-gold/40
                    hover:bg-gold/10
                    hover:text-ink
                  "
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    className="
                      shrink-0
                      text-jade
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  {feature}
                </span>
              )
            )}

          </div>

        </div>


        {/* =====================================
            BOOK BUTTON
        ===================================== */}

        <button
          onClick={() => onBook(vehicle.id)}
          className="
            btn-primary
            mt-auto
            w-full
            transition-all
            text-white
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            active:translate-y-0
          "
        >
          Book Now
        </button>

      </div>

    </article>
  );
}