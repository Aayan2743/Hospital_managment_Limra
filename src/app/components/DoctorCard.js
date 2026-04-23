export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition group">
      {/* Image */}
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
          {doctor.specialization}
        </span>

        {/* Name on Image */}
        <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
          {doctor.name}
        </h2>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Info */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>⭐ 4.8 Rating</span>
          <span>5+ Years</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3">
          Experienced specialist providing top-quality healthcare services.
        </p>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
