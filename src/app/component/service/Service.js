"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const ambulanceData = {
  logo: "/car-logo.png", // Replace with actual logo
  ambulanceNo: "AB-1234",
  driverName: "John Doe",
  driverNumber: "+880 1234-567890",
};

const medicines = [
  { id: 1, name: "Paracetamol", available: true },
  { id: 2, name: "Aspirin", available: false },
  { id: 3, name: "Amoxicillin", available: true },
  { id: 4, name: "Cetrizine", available: false },
  { id: 5, name: "Ibuprofen", available: true },
];

export default function AllService() {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % medicines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-5 gap-6">
     

      {/* Medicine Table */}
      <div className="bg-white p-6 rounded-lg  mx-auto max-w-screen-lg ">
        <h3 className="text-lg font-semibold mb-3">Medicine Availability</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">Medicine Name</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr
                key={medicine.id}
                className={`border p-2 transition-all duration-500 ${index === highlightIndex &&medicine.available && "bg-green-400"  || index === highlightIndex && !medicine.available && "bg-rose-400" 
                }`}
              >
                <td className="border p-2 text-center">{medicine.id}</td>
                <td className="border p-2">{medicine.name}</td>
                <td className="border p-2 text-center">
                  {medicine.available ? "✔" : "✖"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
