import { Link } from "react-router-dom";
const Vehicles = () => {
  
  const vehicles = [
    {
      name: "Electric Scooter A",
      desc: "Fast Charging • Lightweight • Digital Display",
    },
    {
      name: "Electric Scooter B",
      desc: "High Range • Comfortable • Eco Friendly",
    },
    {
      name: "Electric Bike C",
      desc: "Sporty Design • Powerful Motor • Zero Emission",
    },
    {
      name: "Electric 3 Wheeler D",
      desc: "Heavy Duty • Cargo Ready • High Efficiency",
    },
  ];

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
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            Choose Your <span className="text-gray-400">Electric Vehicle</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our premium range of reliable, efficient, and eco-friendly
            electric vehicles built for modern India.
          </p>
        </div>
      </section>

      {/* ================= VEHICLE SHOWCASE ================= */}
<section className="bg-gray-50 py-28">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
      Our Electric Scooter Range
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">
        <img
          src="/image/ev4.png"
          alt="GreenVolt Urban Pro"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Premium Scooter
            </span>
            <span className="text-yellow-400">★★★★★</span>
          </div>

          <h3 className="text-xl font-bold mb-2">GreenVolt Urban Pro</h3>
          <p className="text-gray-600 text-sm mb-6">
            Perfect for city commuting with premium features and elegant design.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ 3.5–4 Hour Charging</li>
            <li>✔ 170kg Capacity</li>
            <li>✔ Digital Display</li>
            <li>✔ Keyless Entry</li>
          </ul>

          <p className="text-3xl font-extrabold text-gray-900">
            ₹85,000
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">
        <img
          src="/image/ev5.png"
          alt="GreenVolt Eco Max"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Efficient Scooter
            </span>
            <span className="text-yellow-400">★★★★★</span>
          </div>

          <h3 className="text-xl font-bold mb-2">GreenVolt Eco Max</h3>
          <p className="text-gray-600 text-sm mb-6">
            Maximum efficiency and range for eco-conscious riders.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ Long Range Battery</li>
            <li>✔ Eco Mode</li>
            <li>✔ LED Lighting</li>
            <li>✔ Mobile Charging</li>
          </ul>

          <p className="text-3xl font-extrabold text-gray-900">
            ₹72,000
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">
        <img
          src="/image/ev6.png"
          alt="GreenVolt City Rider"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Standard Scooter
            </span>
            <span className="text-yellow-400">★★★★★</span>
          </div>

          <h3 className="text-xl font-bold mb-2">GreenVolt City Rider</h3>
          <p className="text-gray-600 text-sm mb-6">
            Reliable and affordable option for everyday urban transportation.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ Quick Charging</li>
            <li>✔ Compact Design</li>
            <li>✔ Safety Features</li>
            <li>✔ Affordable</li>
          </ul>

          <p className="text-3xl font-extrabold text-gray-900">
            ₹65,000
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= BUILT FOR EXCELLENCE ================= */}
<section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-36 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-28">
      <span className="inline-block mb-4 px-6 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold tracking-wide">
        Advanced Engineering
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
        Built for <span className="text-gray-600">Everyday Excellence</span>
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Every component is designed with precision — delivering unmatched comfort,
        safety, and reliability for modern electric mobility.
      </p>
    </div>

    {/* TOP FEATURE STRIP */}
    <div className="grid lg:grid-cols-4 gap-8 mb-24">

      {[
        ["Charging Time", "3.5 – 4 Hrs"],
        ["Top Speed", "Smooth & Stable"],
        ["Load Capacity", "170 kg"],
        ["Braking", "Disk Brakes"],
      ].map(([title, value], index) => (
        <div
          key={index}
          className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
            {title}
          </p>
          <h3 className="text-3xl font-extrabold">
            {value}
          </h3>
        </div>
      ))}

    </div>

    {/* SPLIT SECTION */}
    <div className="grid lg:grid-cols-3 gap-16 items-start">

      {/* LEFT – STICKY FEATURE COLUMN */}
      <div className="lg:sticky lg:top-32 space-y-10">

        {[
          ["Telescopic Suspension", "Smooth rides on rough roads"],
          ["Digital Speedometer", "Clear real-time metrics"],
          ["Reverse Gear", "Easy maneuvering"],
        ].map(([title, desc], index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              {title}
            </h4>
            <p className="text-gray-600 text-sm">
              {desc}
            </p>
          </div>
        ))}

      </div>

      {/* RIGHT – TECH DETAILS */}
      <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-12">

        <h3 className="text-2xl font-extrabold text-gray-900 mb-10">
          Complete Technical Specifications
        </h3>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">

          {[
            ["LED Headlights", "Stylish & Energy Efficient"],
            ["Mobile Charging Port", "On-the-go device charging"],
            ["Keyless Entry", "Smart access system"],
            ["Battery Info Display", "Live battery tracking"],
            ["Water & Dust Resistance", "All-weather protection"],
            ["Dimensions", "1905 × 675 × 1104 mm"],
          ].map(([title, value], index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-5 last:border-none"
            >
              <span className="text-gray-600 font-medium">
                {title}
              </span>
              <span className="text-gray-900 font-bold">
                {value}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-32 text-center">
      <p className="text-gray-500 text-sm tracking-wide">
        Designed for Indian roads • Engineered for long-term reliability •
        Built with future-ready technology
      </p>
    </div>

  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Experience <span className="text-gray-400">Electric Mobility?</span>
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Book a test ride or visit our showroom to explore the future of
          transportation with GREENVOLT.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/contact"
            className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            Book Test Ride
          </a>

          <a
            href="/contact"
            className="border border-gray-200 text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition"
          >
            Visit Showroom
          </a>
        </div>
      </section>
      {/* ================= FINANCING SOLUTIONS ================= */}
<section className="bg-gray-50 py-32">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-24">
      <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold tracking-widest">
        FINANCING
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Financing That Works For You
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        Designed to keep ownership simple, transparent and stress-free —
        from your first EMI to long-term savings.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative space-y-24">

      {/* Item 1 */}
      <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* LEFT */}
        <div className="text-right pr-12">
          <p className="text-6xl font-extrabold text-gray-900 mb-2">
            ₹2,500
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Monthly EMI Starting
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative pl-14">
          <span className="absolute left-0 top-1 w-5 h-5 rounded-full bg-gray-900"></span>
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"></div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Easy EMI Plans
          </h3>

          <ul className="text-gray-600 space-y-3 text-sm">
            <li>Flexible tenure options</li>
            <li>Low monthly commitment</li>
            <li>Quick approval process</li>
            <li>Minimal documentation</li>
          </ul>
        </div>
      </div>

      {/* Item 2 */}
      <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* LEFT */}
        <div className="relative pr-14 text-right">
          <span className="absolute right-0 top-1 w-5 h-5 rounded-full bg-gray-700"></span>
          <div className="absolute right-2 top-0 bottom-0 w-px bg-gray-300"></div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Partner Bank Loans
          </h3>

          <ul className="text-gray-600 space-y-3 text-sm">
            <li>Trusted banking partners</li>
            <li>Pre-approved loan offers</li>
            <li>Instant processing</li>
            <li>Competitive interest rates</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="pl-12">
          <p className="text-6xl font-extrabold text-gray-900 mb-2">
            7.5%
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Interest Rate Onwards
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* LEFT */}
        <div className="text-right pr-12">
          <p className="text-6xl font-extrabold text-gray-900 mb-2">
            ₹15,000
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Government Subsidy
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative pl-14">
          <span className="absolute left-0 top-1 w-5 h-5 rounded-full bg-gray-500"></span>
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"></div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Government Incentives
          </h3>

          <ul className="text-gray-600 space-y-3 text-sm">
            <li>FAME II subsidy benefits</li>
            <li>State EV incentives</li>
            <li>Tax exemptions</li>
            <li>Registration fee waiver</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= TECHNICAL SPECIFICATIONS ================= */}
<section className="bg-gray-50 py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 px-5 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold tracking-wide">
        Technical Specifications
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Complete <span className="text-gray-600">Technical Details</span>
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Comprehensive specifications to help you make an informed decision
        about your electric vehicle purchase.
      </p>
    </div>

    {/* Tabs (UI only) */}
    <div className="grid grid-cols-4 gap-4 mb-16">
      {["Performance", "Battery", "Features", "Comfort"].map((tab, index) => (
        <div
          key={index}
          className="text-center py-3 rounded-xl bg-gray-200 text-gray-700 font-medium"
        >
          {tab}
        </div>
      ))}
    </div>

    {/* Specs Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Spec Card */}
      {[
        ["Top Speed", "65 km/h"],
        ["Range per Charge", "80 – 100 km"],
        ["Charging Time", "3.5 – 4 hours"],
        ["Motor Power", "2000W BLDC"],
        ["Acceleration", "0 – 40 km/h in 8s"],
      ].map(([label, value], index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
            {label}
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            {value}
          </h3>
        </div>
      ))}

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

export default Vehicles;
