import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="font-sans text-gray-800">
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
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
          Contact <span className="text-gray-400">GREENVOLT</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We’re here to help you take the next step toward electric mobility.
          Get in touch with our team today.
        </p>
      </section>

     {/* ================= QUICK ASSISTANCE (NEW LAYOUT) ================= */}
<section className="bg-gray-50 py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Choose a quick option below to get instant assistance,
        or scroll down for detailed contact information.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-12 items-stretch">

      {/* LEFT – FEATURED OPTION */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-3xl p-12 shadow-2xl flex flex-col justify-between">
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide">
          Most Popular
        </span>

        <div>
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-6">
            🚗
          </div>

          <h3 className="text-2xl font-extrabold mb-4">
            Schedule a Test Drive
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Experience the performance, comfort, and technology of our electric
            vehicles firsthand before making your decision.
          </p>
        </div>

        <a
          href="/contact"
          className="mt-10 inline-block text-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Book Test Drive
        </a>
      </div>

      {/* RIGHT – STACKED OPTIONS */}
      <div className="lg:col-span-2 flex flex-col gap-8">

        {/* Option */}
        {[
          {
            title: "Get Price Quote",
            desc: "Receive detailed pricing along with EMI and financing options.",
            icon: "💬",
            btn: "Request Quote",
          },
          {
            title: "Showroom Visit",
            desc: "Plan your visit and explore our full EV lineup in person.",
            icon: "📅",
            btn: "Schedule Visit",
          },
          {
            title: "Speak to an Expert",
            desc: "Talk directly with our EV specialists for guidance and support.",
            icon: "📞",
            btn: "Call Now",
            link: "tel:9712304660",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>

            <a
              href={item.link || "/contact"}
              className="inline-block text-center bg-gray-900 text-white px-7 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              {item.btn}
            </a>
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Visit Our Showroom
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Experience our electric vehicles in person and speak with our
              experts to find the perfect EV for your needs.
            </p>

            <div className="space-y-6 text-sm text-gray-700">
              <p>
                📍 <strong>Address:</strong><br />
                Dediyasan GIDC, Modhera Road,<br />
                Mahesana – 384002, Gujarat
              </p>

              <p>
                📞 <strong>Phone:</strong><br />
                <a href="tel:9712304660" className="hover:underline">
                  +91 97123 04660
                </a>{" "}
                /{" "}
                <a href="tel:9974451950" className="hover:underline">
                  +91 99744 51950
                </a>
              </p>

              <p>
                ✉️ <strong>Email:</strong><br />
                <a href="mailto:info@greenvoltev.in" className="hover:underline">
                  info@greenvoltev.in<br />
                  sales@greenvoltev.in
                </a>
              </p>

              <p>
                🕒 <strong>Working Hours:</strong><br />
                Monday – Saturday : 9:30 AM – 7:00 PM
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/vehicles"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Explore Vehicles
              </Link>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </section>
      

      {/* ================= MAP ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="GreenVolt Location"
              src="https://www.google.com/maps?q=Dediyasan%20GIDC%20Mehsana&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-gray-400 py-14 text-center text-sm">
        © 2025 <span className="text-gray-200 font-semibold">GREENVOLT</span>.  
        All rights reserved.
      </footer>

    </div>
  );
};

export default Contact;
