import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest">
            GREEN<span className="text-gray-400">VOLT</span>
          </h1>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/About" className="hover:text-gray-300 transition">About</Link>
            <Link to="/Vehicles" className="hover:text-gray-300 transition">Vehicles</Link>
            <Link to="/Whychooseus" className="hover:text-gray-300 transition">WhyChooseUse</Link>
            <Link to="/Contact" className="hover:text-gray-300 transition">Contact</Link>
          </nav>
         

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

        {/* ================= VEHICLES ================= */}
        <section className="py-28 max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Our Electric Vehicles
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={`/image/ev${id}.png`}
                  alt="EV"
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-3">
                    EV Model {id}
                  </h4>
                  <p className="text-gray-600 text-sm mb-5">
                    Smart electric vehicle designed for modern urban mobility.
                  </p>
                  <span className="text-gray-900 font-semibold text-sm">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
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
      </main>

      {/* ================= FOOTER ================= */}
      {/* <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="text-center text-sm">
          © 2025 <span className="text-gray-200 font-semibold">GREENVOLT</span>.  
          Driving India’s Electric Future.
        </div>
      </footer> */}
      <footer className="bg-gray-900 text-gray-300 py-12"> 
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8"> <div>
          <h3 className="text-xl font-bold text-white mb-2">GREENVOLT</h3>
           <p className="text-sm">Driving India towards a smarter electric future.</p> </div>
            <div> <h4 className="font-semibold text-white mb-2">Quick Links</h4> 
            <ul className="space-y-2 text-sm"> 
              <li>Home</li> <li>About</li> 
              <li>Vehicles</li>
              <li>Contact</li> 
            </ul> </div>
             <div> <h4 className="font-semibold text-white mb-2">Contact</h4>
              <p className="text-sm">Mahesana, Gujarat</p>
              <p className="text-sm">📞 +91 XXXXX XXXXX</p> </div> </div> 
              <div className="text-center text-xs text-gray-400 mt-8"> © 2025 GREENVOLT. All rights reserved. </div>
        </footer>
    </>
  
  );
};

export default Home;
