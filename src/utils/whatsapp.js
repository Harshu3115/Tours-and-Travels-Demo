
import { siteConfig } from "../config/site";

/* =========================================================
   FORMAT BOOKING MESSAGE
========================================================= */

export const formatBookingMessage = (
  booking,
  selectedVehicle
) => {
  const duration =
    booking.duration === "Custom"
      ? `${booking.customDays} Days`
      : booking.duration;

  return [
    "🚗 NEW BOOKING REQUEST",
    "",
    `Passenger: ${booking.passengerName}`,
    `Mobile: ${booking.mobileNumber}`,
    "",
    `Pickup: ${booking.pickupLocation}`,
    `Drop: ${booking.dropLocation}`,
    "",
    `Date: ${booking.pickupDate}`,
    `Time: ${booking.pickupTime}`,
    "",
    `Vehicle Category: ${booking.vehicleCategory}`,
    `Vehicle: ${selectedVehicle?.name || "Not selected"}`,
    "",
    `Duration: ${duration}`,

    booking.vehicleCategory === "Other"
      ? `Number of Passengers: ${booking.passengers}`
      : "Number of Passengers: Not required",

  ].join("\n");
};


/* =========================================================
   OPEN WHATSAPP
========================================================= */

export const openWhatsAppBooking = (message) => {
  const url =
    `https://wa.me/${siteConfig.whatsapp}` +
    `?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
};


/* =========================================================
   SEND BOOKING EMAIL - EMAILJS
========================================================= */


export const sendBookingEmail = async (
  booking,
  selectedVehicle
) => {
  const duration =
    booking.duration === "Custom"
      ? `${booking.customDays} Days`
      : booking.duration;

  const passengers =
    booking.vehicleCategory === "Other"
      ? booking.passengers
      : "Not required";

  const response = await fetch(
    siteConfig.formspreeEndpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        subject:
          "🚗 New Booking - Gitam Tours & Travels",

        passenger_name:
          booking.passengerName,

        mobile:
          booking.mobileNumber,

        pickup_location:
          booking.pickupLocation,

        drop_location:
          booking.dropLocation,

        pickup_date:
          booking.pickupDate,

        pickup_time:
          booking.pickupTime,

        vehicle_category:
          booking.vehicleCategory,

        vehicle:
          selectedVehicle?.name ||
          "Not selected",

        duration,

        passengers,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to send booking email"
    );
  }

  return response.json();
};