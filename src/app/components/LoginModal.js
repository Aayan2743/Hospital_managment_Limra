"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal() {
  const { showLogin, setShowLogin, login } = useAuth();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-80 shadow-xl">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

            <input
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 mb-4 rounded"
            />

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Enter OTP</h2>

            <input
              placeholder="1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border p-3 mb-4 rounded text-center"
            />

            <button
              onClick={() => {
                if (otp === "1234") login(phone);
                else alert("Invalid OTP");
              }}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Verify
            </button>
          </>
        )}

        <button
          onClick={() => setShowLogin(false)}
          className="mt-3 text-gray-500 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
