import DoctorCard from "./DoctorCard";
import { doctors } from "../data/doctors";

export default function DoctorSection() {
  return (
    <section id="doctors" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Doctors</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
