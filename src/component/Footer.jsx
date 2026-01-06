const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-2">GREENVOLT</h3>
          <p className="text-sm">
            Leading electric vehicle showroom in Mahesana, Gujarat.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Vehicles</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Mahesana, Gujarat</p>
          <p className="text-sm">📞 +91 XXXXX XXXXX</p>
        </div>

      </div>

      <div className="text-center text-xs text-green-300 mt-8">
        © 2025 GREENVOLT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
