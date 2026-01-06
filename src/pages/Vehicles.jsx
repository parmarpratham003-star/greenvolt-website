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
<section className="bg-gray-50 py-28">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold tracking-wide">
      Financing Options
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
      Easy Financing Solutions
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
      We offer flexible financing options to make your electric vehicle purchase
      affordable, simple, and stress-free.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Easy EMI */}
      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-800 text-2xl">
          💳
        </div>

        <h3 className="text-xl font-semibold mb-4">Easy EMI</h3>

        <p className="text-3xl font-extrabold text-gray-900 mb-2">
          ₹2,500
        </p>
        <p className="text-sm text-gray-500 mb-6">
          per month starting
        </p>

        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• Flexible tenure options</li>
          <li>• Competitive interest rates</li>
          <li>• Quick approval process</li>
          <li>• Minimal documentation</li>
        </ul>
      </div>

      {/* Bank Loans */}
      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-800 text-2xl">
          🏦
        </div>

        <h3 className="text-xl font-semibold mb-4">Bank Loans</h3>

        <p className="text-3xl font-extrabold text-gray-900 mb-2">
          7.5%
        </p>
        <p className="text-sm text-gray-500 mb-6">
          interest rate onwards
        </p>

        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• Partner bank network</li>
          <li>• Pre-approved loans</li>
          <li>• Instant loan processing</li>
          <li>• Attractive interest rates</li>
        </ul>
      </div>
      

      {/* Government Schemes */}
      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-800 text-2xl">
          ✅
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Government Schemes
        </h3>

        <p className="text-3xl font-extrabold text-gray-900 mb-2">
          ₹15,000
        </p>
        <p className="text-sm text-gray-500 mb-6">
          subsidy available
        </p>

        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• FAME II benefits</li>
          <li>• State government incentives</li>
          <li>• Tax exemptions</li>
          <li>• Registration fee waiver</li>
        </ul>
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
    </div>
  );
};

export default Vehicles;
