import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "../config/site";
import { validateContact } from "../utils/validation";
import {
  sendContactEmail
} from "../utils/contactService";

import SectionHeader from "./SectionHeader";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState()


  /* =========================================
     SCROLL ANIMATION
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


  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors =
      validateContact(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      console.log("Sending contact email...");

      await sendContactEmail(values);

      toast.success("Message sent successfully! We will contact you soon.");

      setStatus("success");

      setValues({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(
        "CONTACT EMAIL ERROR:",
        error
      );

      setStatus("error");
    }
  };


  /* =========================================
     UPDATE INPUT
  ========================================= */

  const update = (name, value) => {
    const nextValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    const next = {
      ...values,
      [name]: nextValue,
    };

    setValues(next);

    if (errors[name]) {
      setErrors(validateContact(next));
    }
  };


  /* =========================================
     CONTACT ITEMS
  ========================================= */

  const items = [
    [
      Phone,
      "Telephone",
      siteConfig.phone,
      `tel:${siteConfig.phone}`,
    ],
    [
      FaWhatsapp,
      "WhatsApp",
      siteConfig.whatsapp,
      `https://wa.me/${siteConfig.whatsapp}`,
    ],
    [
      Mail,
      "Email",
      siteConfig.email,
      `mailto:${siteConfig.email}`,
    ],
    [
      MapPin,
      "Location",
      siteConfig.address,
      "#contact",
    ],
  ];


  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section w-full max-w-full overflow-x-hidden bg-white"
    >

      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">


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
            eyebrow="Contact Us"
            title="Let's Plan Your Travel"
            subtitle="Have questions or need assistance? We're here to help! Fill out the form below and our team will get back to you as soon as possible."
          />
        </div>


        {/* =====================================
            CONTACT CONTENT
        ===================================== */}

        <div className="mt-12 grid w-full min-w-0 max-w-full grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">


          {/* =====================================
              CONTACT DETAILS
          ===================================== */}

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {items.map(([Icon, label, value, href], index) => (
              <a
                key={label}
                href={href}
                className={`
                premium-card
                group
                flex
                w-full
                min-w-0
                max-w-full
                items-center
                gap-4
                overflow-hidden
                p-5
                transform
                transition-all
                duration-700
                ease-out
                hover:-translate-y-1
                ${isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                  }
            `}
                style={{
                  transitionDelay: `${200 + index * 150}ms`,
                }}
              >

                {/* ICON */}
                <span
                  className="
                    flex
                    h-12
                    w-12
                    min-h-12
                    min-w-12
                    shrink-0
                    grow-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-ink
                    text-gold
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-gold
                    group-hover:text-white
                "
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                  />
                </span>

                {/* TEXT */}
                <span
                  className="
                    min-w-0
                    flex-1
                    overflow-hidden
                "
                >

                  {/* LABEL */}
                  <span
                    className="
                        block
                        truncate
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-500
                    "
                  >
                    {label}
                  </span>

                  {/* VALUE */}
                  <span
                    className="
                        mt-1
                        block
                        min-w-0
                        max-w-full
                        break-words
                        text-base
                        font-semibold
                        leading-6
                        text-ink
                        [overflow-wrap:anywhere]
                        transition-colors
                        duration-300
                        group-hover:text-gold
                    "
                  >
                    {value}
                  </span>

                </span>

              </a>
            ))}

          </div>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <form
            onSubmit={handleSubmit}
            className={`
  premium-card
  relative
  block
  w-full
  min-w-0
  max-w-full
  box-border
  overflow-hidden
  p-5
  sm:p-7
  transform
  transition-all
  duration-1000
  ease-out
  ${isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 lg:translate-x-16 lg:translate-y-0"
              }
`}
            style={{
              transitionDelay: "300ms",
            }}
          >

            <div className="grid gap-4  sm:grid-cols-2">


              {/* =================================
                  NAME / EMAIL / PHONE
              ================================= */}

              {["name", "email", "phone", "subject"].map(
                (field, index) => (
                  <label
                    key={field}
                    className={`
                      form-label
                      capitalize
                      transform
                      transition-all
                      duration-700
                      ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${500 + index * 100
                        }ms`,
                    }}
                  >

                    {field === "phone"
                      ? "Phone"
                      : field}

                    <input
                      className={`form-input block w-full min-w-0 max-w-full box-border rounded-md ${errors[field]
                        ? "border-red-400 bg-red-50"
                        : "border-slate-200 bg-white"
                        }`}
                      value={values[field]}
                      onChange={(e) =>
                        update(
                          field,
                          e.target.value
                        )
                      }
                      placeholder={
                        field === "phone"
                          ? "Enter mobile number"
                          : `Enter ${field}`
                      }
                    />

                    {errors[field] && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">
                        {errors[field]}
                      </p>
                    )}

                  </label>
                )
              )}


              {/* =================================
                  MESSAGE
              ================================= */}

              <label
                className={`
                  form-label
                  transform
                  transition-all
                  duration-700
                  sm:col-span-2
                  ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "800ms",
                }}
              >

                Message

                <textarea
                  rows="5"
                  className={`form-input block w-full min-w-0 max-w-full box-border rounded-md resize-none ${errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 bg-white"
                    }`}
                  value={values.message}
                  onChange={(e) =>
                    update(
                      "message",
                      e.target.value
                    )
                  }
                  placeholder="Tell us about your trip"
                />

                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.message}
                  </p>
                )}

              </label>

            </div>


            {/* =====================================
                SUCCESS MESSAGE
            ===================================== */}

            {sent && (
              <p
                className="
                  mt-4
                  rounded-2xl
                  bg-emerald-50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-emerald-700
                "
              >
                Message ready. Our team will connect
                shortly.
              </p>
            )}

            {errors.submit && (
              <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {errors.submit}
              </p>
            )}


            {/* =====================================
                SUBMIT BUTTON
            ===================================== */}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-3 w-full"
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}