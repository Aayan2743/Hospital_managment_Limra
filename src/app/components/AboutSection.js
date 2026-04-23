export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="hospital"
            className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-500">Experience</p>
            <h3 className="text-xl font-bold text-blue-600">10+ Years</h3>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            About Our Hospital
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            We are committed to providing the best healthcare services with
            highly qualified doctors and modern medical facilities. Our goal is
            to ensure patient satisfaction through compassionate care and
            advanced treatment.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500 text-sm">Patients Daily</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500 text-sm">Expert Doctors</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500 text-sm">Emergency Service</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="/appointments"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
