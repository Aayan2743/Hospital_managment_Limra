"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const router = useRouter();

  // Send OTP (fake)
  const sendOtp = () => {
    if (!phone) return alert("Enter phone number");

    setShowOtp(true);
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp !== "1234") {
      return alert("Invalid OTP");
    }

    localStorage.setItem("user", JSON.stringify({ phone }));
    router.push("/appointments");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={sendOtp}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Send OTP
        </button>
      </div>

      {/* OTP MODAL */}
      {showOtp && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-80 shadow-xl animate-fadeIn">
            <h3 className="text-lg font-semibold mb-3 text-center">
              Enter OTP
            </h3>

            <input
              type="text"
              placeholder="1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 text-center text-xl tracking-widest"
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Verify OTP
            </button>

            <button
              onClick={() => setShowOtp(false)}
              className="w-full mt-2 text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
