"use client";
import { useState, useEffect } from "react";

export default function AllService() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [medicines, setMedicines] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMedicines();
  }, [page, search]);

  const fetchMedicines = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/medicine?page=${page}&limit=${limit}&search=${search}`
      );
      const data = await res.json();
      setMedicines(data.medicines);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching medicines", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % medicines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [medicines]);

  return (
    <div className="bg-gray-100 py-10 px-5 gap-6">
      {/* Medicine Table */}
      <div className="bg-white p-6 rounded-lg mx-auto max-w-screen-lg">
        <h3 className="text-lg font-semibold mb-3">Medicine Availability</h3>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
        />

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">Medicine Name</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {medicines.length > 0 ? (
              medicines.map((medicine, index) => (
                <tr
                  key={index}
                  className={`border p-2 transition-all duration-500 ${
                    index === highlightIndex && medicine.available
                      ? "bg-green-400"
                      : index === highlightIndex && !medicine.available
                      ? "bg-rose-400"
                      : ""
                  }`}
                >
                  <td className="border p-2 text-center">{index+1}</td>
                  <td className="border p-2">{medicine.name}</td>
                  <td className="border p-2 text-center">
                    {medicine.available ? "✔" : "✖"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No medicines found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
