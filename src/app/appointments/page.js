export default function Appointments() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Book Appointment</h1>

      <input type="date" className="border p-2 mb-3 block" />
      <input type="time" className="border p-2 mb-3 block" />

      <button className="bg-green-500 text-white px-4 py-2">Book Now</button>
    </div>
  );
}
