export default function Nurse() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Nurse Panel</h1>

      <input placeholder="BP" className="border p-2 block mb-2" />
      <input placeholder="Temperature" className="border p-2 block mb-2" />
      <input placeholder="Pulse" className="border p-2 block mb-2" />
      <input placeholder="Weight" className="border p-2 block mb-2" />

      <button className="bg-green-500 text-white px-4 py-2">Save Vitals</button>
    </div>
  );
}
