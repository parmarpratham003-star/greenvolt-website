import { Link } from "react-router-dom";
const About = () => {
  return (
      
    <div className="font-sans text-gray-800">
      {/* ================= HEADER ================= */}
   <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      {/* LOGO + BRAND */}
      <div className="flex items-center gap-3">
      <img
        src="/image/logo.jpeg"   // 🔁 replace with your actual path
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

      
      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide">
            About <span className="text-gray-400">GREENVOLT</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Leading the electric mobility revolution in Gujarat with innovation,
            sustainability, and trust.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* Intro */}
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            At GREENVOLT, we are not just selling electric vehicles — we are shaping
            the future of transportation. Based in Mahesana, Gujarat, we deliver
            clean, efficient, and reliable electric mobility solutions designed
            for India.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To accelerate EV adoption by delivering high-quality, affordable, and technologically advanced electric vehicles backed by dependable service.",
              },
              {
                title: "Our Vision",
                text: "To become Gujarat’s most trusted electric vehicle brand and a driving force in India’s sustainable mobility ecosystem.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-14">
              Our Core Values
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Customer First",
                "Environmental Responsibility",
                "Quality Excellence",
                "Trust & Reliability",
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white"
                >
                  <p className="font-semibold tracking-wide">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-14">
              Our Achievements
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                ["500+", "Happy Customers"],
                ["4.9★", "Customer Rating"],
                ["3+", "Years of Excellence"],
                ["15+", "Cities Served"],
              ].map(([count, label], index) => (
                <div
                  key={index}
                  className="relative bg-gray-900 text-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] rounded-3xl"></div>
                  <div className="relative">
                    <h3 className="text-4xl font-extrabold text-gray-200 mb-2">
                      {count}
                    </h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= ELECTRIC FUTURE ================= */}
      <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-6 px-5 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-semibold tracking-widest">
              THE ELECTRIC REVOLUTION
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
              Why We Believe in <br />
              <span className="text-gray-400">Electric Future</span>
            </h2>

            <ul className="space-y-7">
              {[
                ["Zero Emissions", "Cleaner air and reduced carbon footprint."],
                ["Cost Efficiency", "Lower fuel and maintenance expenses."],
                ["Advanced Technology", "Smart EV systems and innovation."],
                ["Energy Independence", "Reduced reliance on fossil fuels."],
              ].map(([title, desc], index) => (
                <li key={index} className="flex gap-5">
                  <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-gray-700 text-gray-200 font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT STATS */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              ["90%", "Carbon Emission Reduction"],
              ["75%", "Lower Operating Costs"],
              ["100%", "Clean Energy Powered"],
              ["24/7", "Sustainable Transport"],
            ].map(([value, label], index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-lg hover:scale-[1.03] transition"
              >
                <h3 className="text-4xl font-extrabold text-gray-200 mb-3">
                  {value}
                </h3>
                <p className="text-gray-400 text-sm tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Ready to Join the <span className="text-gray-600">Electric Revolution?</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
            Experience the future of transportation with GREENVOLT. Visit our showroom
            to explore our electric vehicles and speak with our expert team.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/vehicles"
              className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Explore Vehicles →
            </a>

            <a
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              Visit Showroom 📍
            </a>
          </div>
        </div>
      </section>

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

    </div>
  );
};

export default About;
