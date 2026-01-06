import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          GREEN<span className="text-green-400">VOLT</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About</Link>
          <Link to="/vehicles" className="hover:text-green-400 transition">Vehicles</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-green-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition"
        >
          Visit Showroom
        </Link>
      </div>
    </header>
  );
};

export default Header;
