import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../config/site";

export default function Footer() {
  const services = [
    "Devotional Trips",
    "Outstation Trips",
    "Local Travel",
    "Corporate Travel",
    "Family Trips",
  ];

  return (
    <footer className="bg-ink pb-10 pt-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* BRAND */}
        <div>
          <Link
            to="/"
            className="font-display text-2xl font-semibold transition-colors hover:text-gold"
          >
            {siteConfig.name}
          </Link>

          <p className="mt-4 leading-7 text-white/65">
            Premium car rental and travel services for safe, clean and
            comfortable journeys.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-gold">
            Quick Links
          </h4>

          <div className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="
                  block
                  text-white/68
                  transition-colors
                  duration-200
                  hover:text-gold
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>


        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-gold">
            Our Services
          </h4>

          <div className="mt-4 space-y-3">
            {services.map((service) => (
              <Link
                key={service}
                to="/service"
                className="
                  block
                  text-white/68
                  transition-colors
                  duration-200
                  hover:text-gold
                "
              >
                {service}
              </Link>
            ))}
          </div>
        </div>


        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-gold">
            Contact
          </h4>

          <div className="mt-4 space-y-3 text-white/68">

            {/* PHONE */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="block transition-colors hover:text-gold"
            >
              {siteConfig.phone}
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-gold"
            >
              {siteConfig.whatsapp}
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="block break-words transition-colors hover:text-gold"
            >
              {siteConfig.email}
            </a>

            {/* ADDRESS */}
            <p>
              {siteConfig.address}
            </p>

          </div>
        </div>

      </div>


      {/* COPYRIGHT */}
      <div
        className="
          mx-auto
          mt-10
          max-w-7xl
          border-t
          border-white/10
          px-4
          pt-6
          text-sm
          text-white/50
          sm:px-6
          lg:px-8
        "
      >
        © 2026 Gitam Tours & Travels. All Rights Reserved | Made  by <a className="italic underline" href="https://dddigitalsolution.com/" target="_blank" rel="noopener noreferrer">Darshan Digital Solutions</a>
      </div>
    </footer>
  );
}