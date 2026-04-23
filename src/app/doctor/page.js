export default function Doctor() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Doctor Panel</h1>

      <textarea
        placeholder="Write Prescription..."
        className="w-full border p-3 mt-5"
      />

      <button className="bg-blue-500 text-white px-4 py-2 mt-3">Save</button>
    </div>
  );
}
