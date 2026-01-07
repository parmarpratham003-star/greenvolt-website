import { Link } from "react-router-dom";
import { useState } from "react";
import StatsSection from "./StatsSection";

const vehicles = [
  {
    id: 1,
    name: "EV Model 1",
    image: "/image/ev1.png",
    description: "Smart electric vehicle designed for modern urban mobility.",
    range: "180 km",
    charging: "Fast Charging – 1.5 hrs",
    price: "₹7.5 Lakhs",
  },
  {
    id: 2,
    name: "EV Model 2",
    image: "/image/ev2.png",
    description: "High performance EV with premium comfort and safety.",
    range: "220 km",
    charging: "Fast Charging – 2 hrs",
    price: "₹9.2 Lakhs",
  },
  {
    id: 3,
    name: "EV Model 3",
    image: "/image/ev3.png",
    description: "Luxury electric vehicle built for long city rides.",
    range: "250 km",
    charging: "Ultra Fast – 1 hr",
    price: "₹11.8 Lakhs",
  },
];

const Home = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">
            <img
              src="/image/logo.jpeg"
              alt="GreenVolt Logo"
              className="w-10 h-10 rounded-full object-contain"
            />
            <h1 className="text-2xl font-bold tracking-widest">
              GREEN<span className="text-gray-400">VOLT</span>
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/About" className="hover:text-gray-300 transition">About</Link>
            <Link to="/Vehicles" className="hover:text-gray-300 transition">Vehicles</Link>
            <Link to="/Whychooseus" className="hover:text-gray-300 transition">Why Choose Us</Link>
            <Link to="/Contact" className="hover:text-gray-300 transition">Contact</Link>
          </nav>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
          >
            Visit Showroom
          </Link>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="bg-gray-50">
        {/* ================= HERO ================= */}
        <section className="relative h-[92vh] flex items-center overflow-hidden">
          <img
            src="/image/image1.png"
            alt="Electric Vehicle"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/80 to-gray-950/95"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Drive the <br />
                <span className="text-gray-400">Electric Revolution</span>
              </h2>

              <p className="text-lg text-gray-300 mb-10 max-w-xl">
                Premium electric vehicles crafted with cutting-edge technology,
                bold design and sustainable innovation.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/vehicles"
                  className="bg-gray-200 text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
                >
                  Explore Vehicles
                </Link>
                <Link
                  to="/contact"
                  className="border border-gray-400 px-7 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-gray-900 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Glass Card */}
            <div className="hidden md:block bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <h4 className="text-xl font-semibold mb-4">Why Electric?</h4>
              <ul className="space-y-3 text-sm text-gray-200">
                <li>⚡ Zero Emissions</li>
                <li>🔋 Smart Battery System</li>
                <li>💰 Ultra Low Running Cost</li>
                <li>🌍 Clean & Silent Mobility</li>
              </ul>
            </div>
          </div>
        </section>

        
        {/* ================= VEHICLES ================= */}
        <section className="py-28 max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Our Electric Vehicles
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-3">
                    {vehicle.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-5">
                    {vehicle.description}
                  </p>
                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="text-gray-900 font-semibold text-sm hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ================= EXPERIENCE ================= */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-28 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Experience the <span className="text-gray-400">Future Today</span>
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 mb-14">
              Every GREENVOLT vehicle blends performance, technology and
              sustainability into one powerful ride.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {["Fast Charging", "Long Range", "Zero Emission", "Low Maintenance"].map((f) => (
                <div
                  key={f}
                  className="bg-white/10 backdrop-blur-lg py-6 rounded-2xl border border-white/10 hover:bg-white/20 transition"
                >
                  {f}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-gray-200 text-gray-900 px-10 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Book Test Ride
            </Link>
          </div>
        </section>


        {/* ================= WHY CHOOSE ================= */}
        <section className="bg-gray-100 py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-20">
              Why Choose GREENVOLT
            </h3>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                "Advanced EV Technology",
                "Eco-Friendly Mobility",
                "Affordable Ownership",
                "Indian Road Ready",
                "Reliable Service Network",
                "Trusted EV Brand",
              ].map((title) => (
                <div
                  key={title}
                  className="bg-white p-10 rounded-3xl shadow hover:shadow-xl transition"
                >
                  <h4 className="font-semibold text-lg mb-3">{title}</h4>
                  <p className="text-gray-600 text-sm">
                    Engineered to deliver performance, comfort and confidence.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
<StatsSection/> 

        {/* ================= CUSTOMER REVIEWS ================= */}
{/* ================= CUSTOMER REVIEWS ================= */}
<section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">

  {/* Soft gray background glow */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"></div>
  <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-24">
      <span className="inline-block mb-6 px-5 py-1.5 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full tracking-wide">
        CUSTOMER REVIEWS
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
        What Our Customers Say
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        Real experiences from people who chose smarter,
        quieter and cleaner electric mobility with
        <span className="font-semibold text-gray-900"> GREENVOLT</span>.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-14 items-stretch">

      {[
        {
          name: "Rajesh Patel",
          city: "Mahesana",
          review:
            "Outstanding service and quality vehicles. My electric scooter has been running perfectly for over a year.",
        },
        {
          name: "Priya Shah",
          city: "Gandhinagar",
          review:
            "GREENVOLT made my transition to electric smooth and stress-free. Their team is professional and reliable.",
          featured: true,
        },
        {
          name: "Amit Kumar",
          city: "Ahmedabad",
          review:
            "Best investment I’ve made. Lower running costs and the satisfaction of contributing to a cleaner future.",
        },
      ].map((r, i) => (
        <div
          key={i}
          className={`group relative rounded-3xl p-10 border transition-all duration-500
          ${
            r.featured
              ? "bg-gradient-to-b from-white to-gray-100 scale-105 shadow-2xl border-gray-300"
              : "bg-white shadow-xl border-gray-200 hover:-translate-y-3 hover:shadow-2xl"
          }`}
        >

          {/* subtle border glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition ring-1 ring-gray-300"></div>

          {/* Stars */}
          <div className="flex gap-1 mb-6 text-gray-800">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-700 italic leading-relaxed mb-12">
            “{r.review}”
          </p>

          {/* User */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
              {r.name.charAt(0)}
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 text-lg">
                {r.name}
              </h4>
              <p className="text-sm text-gray-500">{r.city}</p>
            </div>
          </div>

          {/* Featured badge */}
          {r.featured && (
            <span className="absolute -top-4 right-6 bg-gray-900 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg tracking-wide">
              MOST TRUSTED
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</section>



      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-gray-300 pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP FOOTER */}
          <div className="grid md:grid-cols-3 gap-14 pb-14">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/image/logo.jpeg"
                  alt="GreenVolt Logo"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold text-white tracking-wider">
                    GREENVOLT
                  </h2>
                  <p className="text-sm text-gray-400">
                    Mahesana, Gujarat
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                Leading the electric revolution in Gujarat with sustainable,
                stylish, and reliable electric vehicles.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="hover:text-green-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/vehicles" className="hover:text-green-400 transition">
                    Our Vehicles
                  </Link>
                </li>
                <li>
                  <Link to="/whychooseus" className="hover:text-green-400 transition">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-green-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h3>

              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-green-400">📍</span>
                  <span>
                    10, Dediyasan G.I.D.C., Opp. Swagat Residency,
                    Modhera Road, Mehsana — 384 002
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400">📞</span>
                  <span>9712304660</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400">📞</span>
                  <span>9974451950</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400">✉️</span>
                  <span>info@greenvoltev.in</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            © 2024 GREENVOLT. All rights reserved | Electric Vehicles in Mahesana |
            EV Showroom Gujarat
          </div>
        </div>
      </footer>

      {/* ================= VEHICLE DETAILS MODAL ================= */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8 relative animate-scaleUp mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <img
              src={selectedVehicle.image}
              alt={selectedVehicle.name}
              className="h-56 w-full object-cover rounded-2xl mb-6"
            />

            <h4 className="text-2xl font-bold mb-3">
              {selectedVehicle.name}
            </h4>

            <p className="text-gray-600 mb-4">
              {selectedVehicle.description}
            </p>

            <div className="space-y-2 text-sm text-gray-800 mb-6">
              <p><strong>Range:</strong> {selectedVehicle.range}</p>
              <p><strong>Charging:</strong> {selectedVehicle.charging}</p>
              <p><strong>Price:</strong> {selectedVehicle.price}</p>
            </div>

            <Link
              to="/contact"
              className="block text-center bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
            >
              Book Test Ride
            </Link>
          </div>
        </div>
      )}

      {/* ================= MODAL ANIMATION ================= */}
      <style>
        {`
          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
};

export default Home;