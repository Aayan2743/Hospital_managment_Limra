"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your Health, <br /> Our Priority
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Book appointments with top doctors anytime, anywhere. Get quality
            healthcare at your fingertips.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/appointments"
              className="bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              Book Appointment
            </a>

            <a
              href="#doctors"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              View Doctors
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
