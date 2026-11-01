export const vehicles = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    category: "4 Seater",
    seats: 4,
    image: '/images/s-1.png',
    description: "Best Rental Cars In Your Location.Experience the best car rental services with Gitam Tours and Travels.",
    features: ["AC", "Comfortable interiors", "Best for city & outstation travel", "Economical"],
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    category: "7 Seater",
    seats: 7,
    image: '/images/ertiga.png',
    description: "Best Rental Cars In Your Location.Experience the best car rental services with Gitam Tours and Travels.",
    features: ["AC", "Spacious interiors", "Family friendly", "Perfect for group travel"],
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "11 Seater",
    seats: 11,
    image: "/images/s-2.png",
    description: "Best Rental Cars In Your Location.Experience the best car rental services with Gitam Tours and Travels.",
    features: ["AC", "Premium interiors", "Large luggage space", "Best for family & group travel"],
  },
];

export const vehiclesByCategory = {
  "4 Seater": vehicles,
  "7 Seater": vehicles.filter((vehicle) => vehicle.seats >= 7),
  "11 Seater": vehicles.filter((vehicle) => vehicle.seats >= 11),
  "Other": vehicles,
};

export const pickupTimes = [
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
];

export const durationOptions = ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days", "Custom"];
