export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-5 text-2xl font-bold border-b border-gray-700">
          🏥 Admin
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a className="block px-4 py-2 rounded-lg bg-gray-800">📊 Dashboard</a>

          <a className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            📅 Appointments
          </a>

          <a className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            👨‍⚕️ Doctors
          </a>

          <a className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            👩‍⚕️ Nurses
          </a>

          <a className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            👤 Patients
          </a>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Total Patients</h2>
              <p className="text-3xl font-bold mt-2">120</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Appointments</h2>
              <p className="text-3xl font-bold mt-2">75</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Doctors</h2>
              <p className="text-3xl font-bold mt-2">15</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2">Patient</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-2">Ravi Kumar</td>
                  <td>24 Apr 2026</td>
                  <td className="text-green-500">Completed</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2">Sita Devi</td>
                  <td>25 Apr 2026</td>
                  <td className="text-yellow-500">Pending</td>
                </tr>

                <tr>
                  <td className="py-2">John</td>
                  <td>26 Apr 2026</td>
                  <td className="text-red-500">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
