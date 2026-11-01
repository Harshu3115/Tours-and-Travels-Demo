import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import Chatbot from "./Chatbot";

export default function FloatingActions({ onBook }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 520);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="
        fixed
        bottom-5
        right-4
        z-[9999]
        flex
        flex-col
        items-center
        gap-3
        sm:bottom-6
        sm:right-6
      "
    >
      {/* BACK TO TOP */}
      {showTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-gold
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-xl
          "
        >
          <ArrowUp size={25} strokeWidth={2.5} />
        </button>
      )}

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
        className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-[#25D366]
    text-white
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-xl
  "
      >
        <FaWhatsapp size={25} />
      </a>

      {/* CALL */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call Gitam Tours and Travels"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-ink
          text-white
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <Phone size={20} />
      </a>

      {/* CHATBOT */}
      <Chatbot onBook={onBook} />
    </div>
  );
}