import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import VehiclesPage from "./pages/VehiclesPage";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const openBooking = (vehicleId = null) => {
    setSelectedVehicle(vehicleId);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar onBook={openBooking} />

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={<Home onBook={openBooking} />}
        />

        <Route
          path="/about"
          element={<About onBook={openBooking} />}
        />

        <Route
          path="/service"
          element={<ServicePage onBook={openBooking} />}
        />

        <Route
          path="/vehicles"
          element={<VehiclesPage onBook={openBooking} />}
        />
        <Route
          path="/contact"
          element={<ContactPage onBook={openBooking} />}
        />
      </Routes>

      {/* FOOTER */}
      <Footer />

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={closeBooking}
        preselectedVehicle={selectedVehicle}
      />




      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}