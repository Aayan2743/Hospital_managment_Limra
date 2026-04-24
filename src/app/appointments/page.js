"use client";

import { useState, useEffect } from "react";

import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);

  const steps = ["Doctor", "Date", "Time", "Details", "OTP", "Payment", "Done"];

  const { user, setShowLogin } = useAuth();

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canGoBack = step > 1 && step < 7;

  useEffect(() => {
    if (!user) setShowLogin(true);
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Please login to book appointment...
          </p>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex-grow flex justify-center items-center px-4 py-10">
        <div className="w-full max-w-4xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 transition-all">
          {/* Premium Stepper */}
          <div className="mb-8">
            <div className="flex justify-between items-center relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10">
                <div
                  className="h-1 bg-blue-500 transition-all"
                  style={{
                    width: `${(step - 1) * (100 / (steps.length - 1))}%`,
                  }}
                ></div>
              </div>

              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center z-10">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition ${
                      step >= i + 1
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            {/* Back Button */}
            {canGoBack && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition shadow-sm"
              >
                ← Back
              </button>
            )}

            {/* Step Indicator */}
            <span className="text-sm text-gray-500">
              Step {step} of {steps.length}
            </span>
          </div>

          {/* Step Content */}
          <div className="animate-fadeIn">
            {step === 1 && <SelectDoctor next={() => setStep(2)} />}
            {step === 2 && <SelectDate next={() => setStep(3)} />}
            {step === 3 && <SelectTime next={() => setStep(4)} />}
            {step === 4 && <PatientForm next={() => setStep(5)} />}
            {step === 5 && <OtpStep next={() => setStep(6)} />}
            {step === 6 && <PaymentStep next={() => setStep(7)} />}
            {step === 7 && <Success />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SelectDoctor({ next }) {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ramesh",
      specialization: "Cardiologist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    },
    {
      id: 2,
      name: "Dr. Suresh",
      specialization: "Neurologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Doctor</h2>

      <div className="grid grid-cols-2 gap-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => next(doc)}
            className="cursor-pointer border rounded-xl p-4 flex items-center gap-4 hover:border-blue-500 hover:shadow-lg transition"
          >
            <img src={doc.image} className="w-14 h-14 rounded-full" />
            <div>
              <h3 className="font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-500">{doc.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectDate({ next }) {
  const today = new Date();

  const dates = [0, 1, 2].map((d) => {
    const date = new Date();
    date.setDate(today.getDate() + d);
    return date.toDateString();
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Date</h2>

      <div className="grid grid-cols-3 gap-4">
        {dates.map((date, i) => (
          <button
            key={i}
            onClick={() => next(date)}
            className="p-4 border rounded-xl hover:bg-blue-500 hover:text-white"
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectTime({ next }) {
  const times = [];

  for (let h = 9; h < 18; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(`${h}:${m === 0 ? "00" : m}`);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Time</h2>

      <div className="grid grid-cols-4 gap-3">
        {times.map((t, i) => (
          <button
            key={i}
            onClick={() => next(t)}
            className="p-2 border rounded-lg hover:bg-blue-500 hover:text-white"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

function PatientForm({ next }) {
  return (
    <div className="max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Patient Details
      </h2>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 border">
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-600">Phone Number</label>
          <input
            placeholder="Enter phone number"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <label className="text-sm text-gray-600">Age</label>
          <input
            placeholder="Enter age"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={next}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

function OtpStep({ next }) {
  return (
    <div className="max-w-md mx-auto text-center">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify OTP</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter the 4-digit code sent to your phone
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3 mb-6">
        {[1, 2, 3, 4].map((_, i) => (
          <input
            key={i}
            maxLength={1}
            className="w-12 h-12 text-center text-xl border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        onClick={next}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
      >
        Verify OTP
      </button>

      {/* Resend */}
      <p className="text-sm text-gray-500 mt-4">
        Didn’t receive OTP?{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          Resend
        </span>
      </p>
    </div>
  );
}

function PaymentStep({ next }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment</h2>

      <button
        onClick={next}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Pay ₹500
      </button>
    </div>
  );
}

function Success() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600">
        Appointment Confirmed 🎉
      </h2>
      <p className="mt-3">Check your WhatsApp for details</p>
    </div>
  );
}
