import { Link } from "react-router-dom";
const WhyChooseUs = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]"></div>

        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide">
            Why Choose <span className="text-gray-400">GREENVOLT</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover what makes GREENVOLT a trusted name in electric mobility,
            delivering innovation, reliability, and sustainability across Gujarat.
          </p>
        </div>
      </section>

      {/* ================= CORE REASONS ================= */}
     <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-20">
      Built on Innovation & Trust
    </h2>

    <div className="grid md:grid-cols-2 gap-14">

      {[
        {
          title: "Advanced Technology",
          desc: "Smart EV systems and modern engineering designed for a smooth, future-ready ride.",
          icon: "⚡",
        },
        {
          title: "Eco-Friendly Mobility",
          desc: "Zero-emission vehicles that reduce pollution and support a cleaner tomorrow.",
          icon: "🌿",
        },
        {
          title: "Safety First",
          desc: "Advanced safety features that give you confidence on every journey.",
          icon: "🛡",
        },
        {
          title: "Premium Build Quality",
          desc: "Durable materials and strong design built for Indian road conditions.",
          icon: "🏆",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >

          {/* subtle left accent */}
          <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-gray-400 to-transparent rounded-full opacity-40 group-hover:opacity-80 transition"></div>

          {/* title with inline icon */}
          <h3 className="flex items-center gap-4 text-xl font-semibold text-gray-900 mb-4">
            <span className="text-gray-500 text-lg">
              {item.icon}
            </span>
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


      {/* ================= TRUST STATS ================= */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
            Trusted by the Community
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["500+", "Happy Customers"],
              ["3+ Years", "Industry Experience"],
              ["24/7", "Customer Assistance"],
              ["100%", "Commitment to Quality"],
            ].map(([value, label], i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-10 shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)] rounded-3xl"></div>

                <div className="relative">
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                    {value}
                  </h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            What Makes GREENVOLT Different
          </h2>

          <p className="text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            We go beyond selling electric vehicles — we create a complete ownership
            experience focused on value, trust, and long-term satisfaction.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Personalized Customer Support",
              "Flexible Financing & EMI Options",
              "Strong EV Expertise",
              "Reliable Local Service Network",
            ].map((text, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white"
              >
                <p className="text-sm font-semibold tracking-wide">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

            
            {/* ================= ELECTRIC ADVANTAGE BREAKDOWN ================= */}
<section className="bg-gray-200 py-32">
  <div className="max-w-6xl mx-auto  px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-4 px-5 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
        Electric Advantage Breakdown
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        One Graph. <span className="text-gray-600">All the Benefits.</span>
      </h2>

      <p className="text-gray-600 text-lg mb-10 leading-relaxed">
        This chart shows how electric vehicles outperform petrol vehicles across
        cost, maintenance, environment, comfort, and government incentives.
      </p>

      <ul className="space-y-3 text-sm text-gray-700">
        <li>✔ Lower running & maintenance cost</li>
        <li>✔ Cleaner environment & zero emissions</li>
        <li>✔ Silent & smoother rides</li>
        <li>✔ Strong government subsidies</li>
      </ul>
    </div>

    {/* PIE CHART */}
    <div className="flex justify-center">
      <div className="relative w-80 h-80">

        <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">

          {/* Energy Cost – 30% */}
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#111827"
            strokeWidth="4"
            strokeDasharray="30 70"
          />

          {/* Maintenance – 25% */}
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#374151"
            strokeWidth="4"
            strokeDasharray="25 75"
            strokeDashoffset="-30"
          />

          {/* Environment – 20% */}
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#6b7280"
            strokeWidth="4"
            strokeDasharray="20 80"
            strokeDashoffset="-55"
          />

          {/* Noise – 15% */}
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="4"
            strokeDasharray="15 85"
            strokeDashoffset="-75"
          />

          {/* Subsidy – 10% */}
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="4"
            strokeDasharray="10 90"
            strokeDashoffset="-90"
          />
        </svg>

        {/* CENTER LABEL */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-extrabold text-gray-900">100%</h3>
          <p className="text-sm text-gray-500">Electric Advantage</p>
        </div>
      </div>
    </div>
  </div>

  {/* LEGEND */}
  <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-700">
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-gray-900"></span>
      Energy Cost Savings (30%)
    </div>
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-gray-700"></span>
      Maintenance Savings (25%)
    </div>
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-gray-500"></span>
      Environmental Impact (20%)
    </div>
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-gray-400"></span>
      Noise Reduction (15%)
    </div>
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-gray-300"></span>
      Government Benefits (10%)
    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]"></div>

        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Experience <span className="text-gray-400">Electric Freedom?</span>
          </h2>

          <p className="text-gray-300 mb-12 text-lg">
            Step into a smarter, cleaner future with GREENVOLT.
            Visit our showroom or book a test ride today.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/vehicles"
              className="bg-gray-200 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Explore Vehicles
            </a>

            <a
              href="/contact"
              className="border border-gray-200 text-gray-200 px-10 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition"
            >
              Visit Showroom
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

export default WhyChooseUs;
