"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

export default function Header() {
  const { user, logout, setShowLogin } = useAuth();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Appointments", path: "/appointments" },
    { name: "Doctors", path: "/#doctors" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🏥</span>
            <span className="text-xl font-bold text-blue-600 hover:text-blue-700 transition">
              Hospital
            </span>
          </Link>

          {/* Nav + Profile */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <nav className="flex gap-6">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative font-medium ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Profile */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer"
                >
                  {user.phone?.[0]?.toUpperCase()}
                </div>

                {open && (
                  <div className="absolute right-0 mt-3 w-40 bg-white shadow rounded p-2">
                    <p className="px-3 py-2 text-sm">{user.phone}</p>

                    <button
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ✅ CORRECT PLACE */}
      <LoginModal />
    </>
  );
}
