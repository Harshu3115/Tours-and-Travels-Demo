export const todayISO = () =>
  new Date().toISOString().split("T")[0];

const isBlank = (value) =>
  !String(value || "").trim();


const isValidLocation = (value) => {
  const location = String(value || "").trim();

  if (!location) return false;

  return /^[A-Za-z]+(?:[ .,'-][A-Za-z]+)*$/.test(location);
};


export const validateBooking = (values) => {

  const errors = {};

  const pickup = String(
    values.pickupLocation || ""
  ).trim().toLowerCase();

  const drop = String(
    values.dropLocation || ""
  ).trim().toLowerCase();


  /* =========================================================
     PICKUP LOCATION
  ========================================================= */

  if (isBlank(values.pickupLocation)) {

    errors.pickupLocation =
      "Pickup location is required.";

  } else if (
    !isValidLocation(values.pickupLocation)
  ) {

    errors.pickupLocation =
      "Please enter a valid pickup location.";

  }


  /* =========================================================
     DROP LOCATION
  ========================================================= */

  if (isBlank(values.dropLocation)) {

    errors.dropLocation =
      "Drop location is required.";

  } else if (
    !isValidLocation(values.dropLocation)
  ) {

    errors.dropLocation =
      "Please enter a valid drop location.";

  }


  /* =========================================================
     PICKUP & DROP MUST BE DIFFERENT
  ========================================================= */

  if (
    pickup &&
    drop &&
    pickup === drop
  ) {

    errors.dropLocation =
      "Pickup and drop locations must be different.";

  }


  /* =========================================================
     PICKUP DATE
  ========================================================= */

  if (!values.pickupDate) {

    errors.pickupDate =
      "Pickup date is required.";

  }

  if (
    values.pickupDate &&
    values.pickupDate < todayISO()
  ) {

    errors.pickupDate =
      "Please select today or a future date.";

  }


  /* =========================================================
     PICKUP TIME
  ========================================================= */

  if (!values.pickupTime) {

    errors.pickupTime =
      "Pickup time is required.";

  }


  /* =========================================================
     VEHICLE CATEGORY
  ========================================================= */

  if (!values.vehicleCategory) {

    errors.vehicleCategory =
      "Vehicle category is required.";

  }


  /* =========================================================
     VEHICLE
  ========================================================= */

  if (!values.vehicleId) {

    errors.vehicleId =
      "Please select a vehicle.";

  }


  /* =========================================================
     DURATION
  ========================================================= */

  if (!values.duration) {

    errors.duration =
      "Duration is required.";

  }


  /* =========================================================
     CUSTOM DAYS
  ========================================================= */

  if (
    values.duration === "Custom" &&
    (
      !values.customDays ||
      Number(values.customDays) < 1
    )
  ) {

    errors.customDays =
      "Enter a valid number of days.";

  }


  /* =========================================================
     PASSENGER NAME
  ========================================================= */

  const passengerName =
    String(values.passengerName || "").trim();

  if (
    !/^[A-Za-z ]{2,}$/.test(passengerName)
  ) {

    errors.passengerName =
      "Please enter a valid passenger name.";

  }


  /* =========================================================
     MOBILE NUMBER
  ========================================================= */

  const mobileNumber =
    String(values.mobileNumber || "").trim();

  if (
    !/^[6-9]\d{9}$/.test(mobileNumber)
  ) {

    errors.mobileNumber =
      "Please enter a valid 10-digit mobile number.";

  }


  /* =========================================================
     NUMBER OF PASSENGERS
     ONLY REQUIRED FOR OTHER
  ========================================================= */

  if (
    values.vehicleCategory === "Other"
  ) {

    if (!values.passengers) {

      errors.passengers =
        "Enter passenger count.";

    } else if (
      Number(values.passengers) < 1 ||
      Number(values.passengers) > 11
    ) {

      errors.passengers =
        "Passengers must be between 1 and 11.";

    }

  }


  return errors;
};


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

export const validateContact = (values) => {

  const errors = {};


  /* NAME */

  const name =
    String(values.name || "").trim();

  if (
    !/^[A-Za-z ]{2,}$/.test(name)
  ) {

    errors.name =
      "Please enter a valid name.";

  }


  /* EMAIL */

  const email =
    String(values.email || "").trim();

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {

    errors.email =
      "Please enter a valid email.";

  }


  /* SUBJECT */

  if (
    isBlank(values.subject)
  ) {

    errors.subject =
      "Please enter a valid subject.";

  }


  /* PHONE */

  const phone =
    String(values.phone || "").trim();

  if (
    !/^[6-9]\d{9}$/.test(phone)
  ) {

    errors.phone =
      "Please enter a valid 10-digit mobile number.";

  }


  /* MESSAGE */

  const message =
    String(values.message || "").trim();

  if (message.length < 8) {

    errors.message =
      "Please enter a message.";

  }


  return errors;
};