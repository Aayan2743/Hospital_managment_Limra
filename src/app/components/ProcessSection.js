export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Book Appointment",
      desc: "Choose your doctor and select a suitable time slot.",
      icon: "📅",
    },
    {
      id: 2,
      title: "Check Vitals",
      desc: "Nurse records BP, temperature, and other vitals.",
      icon: "🩺",
    },
    {
      id: 3,
      title: "Doctor Consultation",
      desc: "Doctor reviews your condition and provides treatment.",
      icon: "👨‍⚕️",
    },
    {
      id: 4,
      title: "Get Prescription",
      desc: "Receive medicines and follow-up instructions.",
      icon: "💊",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-500 mt-3">
            Simple and easy steps to get the best healthcare
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="text-blue-500 font-bold mb-2">Step {step.id}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
