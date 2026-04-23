export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Phone or Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button className="bg-blue-500 text-white w-full p-2">Login</button>
      </div>
    </div>
  );
}
