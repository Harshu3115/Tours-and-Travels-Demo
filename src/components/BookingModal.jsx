import { CheckCircle2, Loader2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  durationOptions,
  pickupTimes,
  vehicles,
  vehiclesByCategory,
} from "../data/vehicles";

import {
  sendBookingEmail,
  formatBookingMessage,
  openWhatsAppBooking,
} from "../utils/whatsapp";

import { todayISO, validateBooking } from "../utils/validation";

/* =========================================================
   EMPTY INITIAL FORM
========================================================= */

const initialValues = {
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  pickupTime: "",
  vehicleCategory: "",
  vehicleId: "",
  duration: "",
  customDays: "",
  passengerName: "",
  mobileNumber: "",
  passengers: "",
};

/* =========================================================
   FIELD ERROR
========================================================= */

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

/* =========================================================
   FIELD STATE
========================================================= */

function fieldState(errors, touched, name, inline = false) {
  if (errors[name]) {
    return inline
      ? "border-red-400/70 bg-red-500/10 text-white placeholder:text-white/50 focus:border-red-400 focus:ring-red-400/20"
      : "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-100";
  }

  if (touched[name]) {
    return inline
      ? "border-emerald-300/70 bg-emerald-400/10 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-300/20"
      : "border-emerald-300 bg-emerald-50/40 focus:border-emerald-500 focus:ring-emerald-100";
  }

  return inline
    ? "border-white/25 bg-white/10 text-white placeholder:text-white/55 focus:border-gold focus:bg-white/15 focus:ring-gold/20"
    : "border-slate-200 bg-white focus:border-gold focus:ring-gold/10";
}

/* =========================================================
   BOOKING MODAL
========================================================= */

export default function BookingModal({
  isOpen,
  onClose,
  preselectedVehicle,
  inline = false,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  /* =======================================================
     AVAILABLE VEHICLES
  ======================================================= */

  const availableVehicles = useMemo(() => {
    if (!values.vehicleCategory) {
      return [];
    }

    return vehiclesByCategory[values.vehicleCategory] || [];
  }, [values.vehicleCategory]);

  /* =======================================================
     SELECTED VEHICLE
  ======================================================= */

  const selectedVehicle = vehicles.find(
    (vehicle) => vehicle.id === values.vehicleId
  );

  /* =======================================================
     LOCK BODY SCROLL WHEN MODAL OPEN
  ======================================================= */

  useEffect(() => {
    if (!isOpen || inline) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, inline]);

  /* =======================================================
     RESET FORM WHEN MODAL OPENS
     
     IMPORTANT:
     No vehicle/category is automatically selected.
  ======================================================= */

  useEffect(() => {
    if (!isOpen) return;

    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }, [isOpen]);

  /* =======================================================
     UPDATE VEHICLE WHEN CATEGORY CHANGES
     
     Do NOT automatically select first vehicle.
  ======================================================= */

  useEffect(() => {
    if (!values.vehicleCategory) {
      if (values.vehicleId) {
        setValues((current) => ({
          ...current,
          vehicleId: "",
        }));
      }

      return;
    }

    const vehicleExists = availableVehicles.some(
      (vehicle) => vehicle.id === values.vehicleId
    );

    if (!vehicleExists && values.vehicleId) {
      setValues((current) => ({
        ...current,
        vehicleId: "",
      }));
    }
  }, [
    values.vehicleCategory,
    values.vehicleId,
    availableVehicles,
  ]);

  /* =======================================================
     UPDATE FIELD
  ======================================================= */

  const update = (name, value) => {
    let newValue = value;

    /* Passenger name - only letters and spaces */
    if (name === "passengerName") {
      newValue = value.replace(/[^A-Za-z ]/g, "");
    }

    /* Mobile - only numbers, max 10 digits */
    if (name === "mobileNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    /* Passengers - only numbers */
    if (name === "passengers") {
      newValue = value.replace(/\D/g, "");

      if (newValue !== "") {
        const number = Number(newValue);

        if (number > 11) {
          newValue = "11";
        }
      }
    }

    /* Custom days - only numbers */
    if (name === "customDays") {
      newValue = value.replace(/\D/g, "");
    }

    const next = {
      ...values,
      [name]: newValue,
    };

    /*
      If category changes, clear selected vehicle.
    */
    if (name === "vehicleCategory") {
      next.vehicleId = "";
      next.passengers = "";
    }

    /*
      If duration changes from Custom,
      clear custom days.
    */
    if (name === "duration" && newValue !== "Custom") {
      next.customDays = "";
    }

    setValues(next);

    /*
      Validate only if field was already touched
      or has an existing error.
    */
    if (touched[name] || errors[name]) {
      const allErrors = validateBooking(next);

      setErrors((currentErrors) => {
        const nextErrors = {
          ...currentErrors,
        };

        if (allErrors[name]) {
          nextErrors[name] = allErrors[name];
        } else {
          delete nextErrors[name];
        }

        return nextErrors;
      });
    }
  };

  /* =======================================================
     BLUR VALIDATION
  ======================================================= */

  /* =======================================================
   BLUR VALIDATION
   Validate ONLY the field that was touched
======================================================= */

  const handleBlur = (name) => {
    const nextTouched = {
      ...touched,
      [name]: true,
    };

    setTouched(nextTouched);

    const allErrors = validateBooking(values);

    setErrors((currentErrors) => {
      const nextErrors = {
        ...currentErrors,
      };

      if (allErrors[name]) {
        nextErrors[name] = allErrors[name];
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("========== BOOKING SUBMIT ==========");

    // 1. Validate form
    const validationErrors = validateBooking(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      console.log(
        "SUBMISSION STOPPED - VALIDATION ERROR"
      );
      return;
    }

    console.log("VALIDATION PASSED");

    try {
      // 2. Find selected vehicle
      const selectedVehicle = vehicles.find(
        (vehicle) => vehicle.id === values.vehicleId
      );

      // 3. Send booking to agency email
      console.log("Sending booking email...");

      await sendBookingEmail(
        values,
        selectedVehicle
      );

      console.log(
        "BOOKING EMAIL SENT SUCCESSFULLY"
      );

      // 4. Create WhatsApp message
      const message = formatBookingMessage(
        values,
        selectedVehicle
      );

      console.log(
        "WhatsApp message:",
        message
      );

      // 5. Open WhatsApp
      openWhatsAppBooking(message);

      // 6. Success message
      setStatus("success");

      // 7. Clear form if you want
      // setValues(initialValues);

    } catch (error) {
      console.error(
        "BOOKING SUBMISSION ERROR:",
        error
      );

      setErrors({
        submit:
          "Unable to submit booking. Please try again.",
      });
    }
  };

  /* =======================================================
     RESET
  ======================================================= */

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  /* =======================================================
     CLOSE
  ======================================================= */

  const closeModal = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");

    onClose();
  };

  if (!isOpen && !inline) {
    return null;
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div
      className={
        inline
          ? "relative w-full"
          : "fixed inset-0 z-[80] flex items-end justify-center bg-ink/72 px-0 backdrop-blur-sm sm:items-center sm:px-4"
      }
    >
      <div
        className={
          inline
            ? `
        relative
        w-full
        overflow-hidden
        rounded-xl

        border
        border-white/20
        bg-white/10
        shadow-2xl
        backdrop-blur-2xl
        backdrop-saturate-150
      `
            : `
        modal-panel
        max-h-[94vh]
        w-full
        overflow-hidden
        bg-white
        shadow-premium
        sm:max-w-3xl
      `
        }
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className={`
    sticky
    top-0
    z-20
    flex
    items-start
    justify-between
    border-b
    px-5
    py-5
    backdrop-blur-2xl
    backdrop-saturate-150
    sm:px-7
    ${inline
              ? "border-white/15 bg-white/10"
              : "border-slate-100 bg-white/95"
            }
  `}
        >
          <div>
            <h2
              className={`font-display text-3xl font-semibold ${inline ? "text-white" : "text-ink"
                }`}
            >
              Book Your Ride
            </h2>

            <p
              className={`mt-1 text-sm ${inline ? "text-white/70" : "text-slate-500"
                }`}
            >
              Fill in your trip details and we'll get back to you shortly.
            </p>
          </div>

          {!inline && (
            <button
              onClick={closeModal}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              aria-label="Close booking form"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {status === "success" ? (

          <div className="px-5 py-10 text-center sm:px-10">

            <div className="booking-success-icon mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={34} />
            </div>

            <h3 className="mt-5 font-display text-3xl font-semibold text-ink">
              Booking Request Sent Successfully!
            </h3>

            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Thank you for choosing Gitam Tours & Travels.
              Our team will contact you shortly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                onClick={closeModal}
                className="btn-secondary border-slate-200 text-ink"
              >
                Close
              </button>

              <button
                onClick={reset}
                className="btn-primary"
              >
                Book Another Ride
              </button>

            </div>

          </div>

        ) : (

          /* =================================================
             BOOKING FORM
          ================================================= */

          <form
            onSubmit={handleSubmit}
            noValidate
            className={`
    hero-booking-scroll
    booking-form-animated
    relative
    overflow-y-auto
    px-5
    py-6
    sm:px-7
    ${inline
                ? "max-h-[560px] text-white"
                : "max-h-[calc(94vh-88px)]"
              }
  `}
          >



            <div className="grid gap-4 sm:grid-cols-2">

              {/* =================================================
                  PICKUP LOCATION
              ================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "100ms" }}
              >
                Pickup Location
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="text"
                  className={`form-input booking-field-control ${fieldState(
                    errors,
                    touched,
                    "pickupLocation",
                    inline
                  )}`}
                  placeholder="Enter pickup location"
                  value={values.pickupLocation}
                  onBlur={() => handleBlur("pickupLocation")}
                  onChange={(e) =>
                    update("pickupLocation", e.target.value)
                  }
                />

                <FieldError
                  message={errors.pickupLocation}
                />
              </label>

              {/* =================================================
                  DROP LOCATION
              ================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "150ms" }}
              >
                Drop Location
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="text"
                  className={`form-input ${fieldState(errors, touched, "dropLocation", inline)}`}
                  placeholder="Enter drop location"
                  value={values.dropLocation}
                  onBlur={() =>
                    handleBlur("dropLocation")
                  }
                  onChange={(e) =>
                    update(
                      "dropLocation",
                      e.target.value
                    )
                  }
                />

                <FieldError
                  message={errors.dropLocation}
                />
              </label>

              {/* =================================================
                  PICKUP DATE
              ================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "200ms" }}
              >
                Pickup Date
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="date"
                  min={todayISO()}
                  className={`form-input ${fieldState(errors, touched, "pickupDate", inline)}`}
                  value={values.pickupDate}
                  onBlur={() =>
                    handleBlur("pickupDate")
                  }
                  onChange={(e) =>
                    update(
                      "pickupDate",
                      e.target.value
                    )
                  }
                />

                <FieldError
                  message={errors.pickupDate}
                />
              </label>

              {/* =================================================
    PICKUP TIME
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "250ms" }}
              >
                Pickup Time
                <span className="ml-1 text-red-500">*</span>

                <select
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "pickupTime",
                    inline
                  )} [&>option]:bg-white [&>option]:text-slate-900`}
                  value={values.pickupTime}
                  onBlur={() => handleBlur("pickupTime")}
                  onChange={(e) =>
                    update("pickupTime", e.target.value)
                  }
                >
                  <option
                    value=""
                    className="bg-white text-slate-900"
                  >
                    Select Pickup Time
                  </option>

                  {pickupTimes.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="bg-white text-slate-900"
                    >
                      {time}
                    </option>
                  ))}
                </select>

                <FieldError message={errors.pickupTime} />
              </label>

              {/* =================================================
    VEHICLE CATEGORY
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "300ms" }}
              >
                Vehicle Category
                <span className="ml-1 text-red-500">*</span>

                <select
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "vehicleCategory",
                    inline
                  )} [&>option]:bg-white [&>option]:text-slate-900`}
                  value={values.vehicleCategory}
                  onBlur={() => handleBlur("vehicleCategory")}
                  onChange={(e) =>
                    update("vehicleCategory", e.target.value)
                  }
                >
                  <option
                    value=""
                    className="bg-white text-slate-900"
                  >
                    Select Vehicle Category
                  </option>

                  {Object.keys(vehiclesByCategory).map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-white text-slate-900"
                    >
                      {category}
                    </option>
                  ))}
                </select>

                <FieldError message={errors.vehicleCategory} />
              </label>

              {/* =================================================
    VEHICLE SELECTION
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "350ms" }}
              >
                Vehicle Selection
                <span className="ml-1 text-red-500">*</span>

                <select
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "vehicleId",
                    inline
                  )} [&>option]:bg-white [&>option]:text-slate-900 ${!values.vehicleCategory
                    ? "cursor-not-allowed opacity-50"
                    : ""
                    }`}
                  value={values.vehicleId}
                  disabled={!values.vehicleCategory}
                  onBlur={() => handleBlur("vehicleId")}
                  onChange={(e) =>
                    update("vehicleId", e.target.value)
                  }
                >
                  <option
                    value=""
                    className="bg-white text-slate-900"
                  >
                    {values.vehicleCategory
                      ? "Select Vehicle"
                      : "Select Category First"}
                  </option>

                  {availableVehicles.map((vehicle) => (
                    <option
                      key={vehicle.id}
                      value={vehicle.id}
                      className="bg-white text-slate-900"
                    >
                      {vehicle.name}
                    </option>
                  ))}
                </select>

                <FieldError message={errors.vehicleId} />
              </label>

              {/* =================================================
                  DURATION
              ================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "400ms" }}
              >
                Duration
                <span className="ml-1 text-red-500">*</span>

                <select
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "duration",
                    inline
                  )} [&>option]:bg-white [&>option]:text-slate-900`}
                  value={values.duration}
                  onBlur={() => handleBlur("duration")}
                  onChange={(e) =>
                    update("duration", e.target.value)
                  }
                >
                  <option value="" className="bg-white text-slate-900">
                    Select Duration
                  </option>

                  {durationOptions.map((duration) => (
                    <option
                      key={duration}
                      value={duration}
                      className="bg-white text-slate-900"
                    >
                      {duration}
                    </option>
                  ))}
                </select>

                <FieldError
                  message={errors.duration}
                />
              </label>

              {/* =================================================
                  CUSTOM DAYS
              ================================================= */}

              {values.duration === "Custom" && (
                <label
                  className={`form-label booking-field ${inline ? "!text-white" : ""
                    }`}
                  style={{ animationDelay: "450ms" }}
                >
                  Number of Days
                  <span className="ml-1 text-red-500">*</span>

                  <input
                    type="number"
                    min="1"
                    className={`form-input ${fieldState(errors, touched, "customDays", inline)}`}
                    placeholder="Enter number of days"
                    value={values.customDays}
                    onBlur={() =>
                      handleBlur("customDays")
                    }
                    onChange={(e) =>
                      update(
                        "customDays",
                        e.target.value
                      )
                    }
                  />

                  <FieldError
                    message={errors.customDays}
                  />
                </label>
              )}

              {/* =================================================
    NUMBER OF PASSENGERS
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "500ms" }}
              >
                Number of Passengers
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="number"
                  min="1"
                  max="11"
                  disabled={values.vehicleCategory !== "Other"}
                  className={`form-input w-full ${fieldState(
                    errors,
                    touched,
                    "passengers",
                    inline
                  )
                    } ${values.vehicleCategory !== "Other"
                      ? "cursor-not-allowed opacity-50"
                      : ""
                    }`}
                  placeholder={
                    values.vehicleCategory === "Other"
                      ? "Enter number of passengers"
                      : "Available only for Other Vehicle Category"
                  }
                  value={values.passengers}
                  onBlur={() => handleBlur("passengers")}
                  onChange={(e) =>
                    update("passengers", e.target.value)
                  }
                />

                <FieldError message={errors.passengers} />
              </label>

              {/* =================================================
    PASSENGER NAME
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "550ms" }}
              >
                Passenger Name
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="text"
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "passengerName",
                    inline
                  )}`}
                  placeholder="Enter passenger name"
                  value={values.passengerName}
                  onBlur={() => handleBlur("passengerName")}
                  onChange={(e) =>
                    update("passengerName", e.target.value)
                  }
                />

                <FieldError message={errors.passengerName} />
              </label>

              {/* =================================================
    MOBILE NUMBER
================================================= */}

              <label
                className={`form-label booking-field ${inline ? "!text-white" : ""
                  }`}
                style={{ animationDelay: "600ms" }}
              >
                Mobile Number
                <span className="ml-1 text-red-500">*</span>

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className={`form-input ${fieldState(
                    errors,
                    touched,
                    "mobileNumber",
                    inline
                  )}`}
                  placeholder="Enter 10-digit mobile number"
                  value={values.mobileNumber}
                  onBlur={() => handleBlur("mobileNumber")}
                  onChange={(e) =>
                    update("mobileNumber", e.target.value)
                  }
                />

                <FieldError message={errors.mobileNumber} />
              </label>



            </div>

            {/* =================================================
                BOOK NOW BUTTON
            ================================================= */}

            <button
              type="submit"
              disabled={status === "loading"}
              onClick={() => console.log("BOOK NOW CLICKED")}
              className={`
    btn-primary
    booking-submit-btn
    mt-6
    w-full
    disabled:cursor-not-allowed
    disabled:opacity-70
    ${status === "loading" ? "loading" : ""}
  `}
            >
              {status === "loading" ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={18}
                  />
                  Processing Booking...
                </>
              ) : (
                "Book Now"
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}