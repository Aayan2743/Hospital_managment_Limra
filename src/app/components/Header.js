"use client";

import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", link: "/", key: "home" },
    { name: "Appointments", link: "/appointments", key: "appointments" },
    { name: "Doctors", link: "#doctors", key: "doctors" },
    { name: "Contact", link: "#contact", key: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-blue-400 text-white flex items-center justify-center rounded-2xl shadow-md text-lg">
            🏥
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-wide">
            City Hospital
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 relative">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.link}
              onClick={() => setActive(item.key)}
              className={`relative font-medium transition ${
                active === item.key
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.name}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  active === item.key ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <a
            href="/appointments"
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Book Now
          </a>

          {/* Profile */}
          <div className="relative group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow cursor-pointer">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </a>
              <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </a>
              <a className="block px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
