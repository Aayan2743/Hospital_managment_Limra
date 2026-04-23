export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            🏥 City Hospital
          </h2>
          <p className="text-gray-400">
            Providing quality healthcare with experienced doctors and modern
            facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/appointments" className="hover:text-white">
                Appointments
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-white">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>📍 Rajahmundry, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 hospital@email.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📘</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        © 2026 City Hospital. All rights reserved.
      </div>
    </footer>
  );
}
