"use client";

import { useState, useEffect } from "react";

export default function DoctorProfile() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchDoctors();
    }, [page, search]);

    const fetchDoctors = async () => {
        try {
            const res = await fetch(
                `http://localhost:5000/api/v1/doctors?page=${page}&limit=${limit}&search=${search}`
            );
            const data = await res.json();
            setDoctors(data.doctors);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error fetching doctors", error);
        }
    };

    const handleViewDoctor = (doctorId) => {
        const doctor = doctors.find((doc) => doc.id === doctorId);
        setSelectedDoctor(doctor || null);
    };

    return (
        <div className="bg-gray-100 py-10 px-5">
            <div className="mx-auto max-w-screen-lg bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold my-5">Doctors List</h2>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search Doctor..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 mb-4 w-full rounded"
                />

                {doctors.length > 0 ? (
                    doctors.map((doctor, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between border-b pb-4 last:border-none"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={doctor?.imageUrl}
                                    alt={doctor?.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="text-md font-semibold">{doctor?.name}</h3>
                                    <p className="text-sm text-gray-500">{doctor?.degree}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleViewDoctor(doctor.id)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                View
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No doctors found</p>
                )}

                {/* Pagination */}
                <div className="flex justify-between mt-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-gray-700">Page {page} of {totalPages}</span>
                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Doctor Details Modal */}
            {selectedDoctor && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                        <h2 className="text-xl font-semibold">{selectedDoctor.name}</h2>
                        <p className="text-gray-600">{selectedDoctor.degree}</p>
                        <p className="text-gray-600">
                           Phone: {selectedDoctor.phone}
                        </p>
                        <p className="text-gray-600">
                           Email: {selectedDoctor.email}
                        </p>
                        <p className="text-gray-600">
                           About: {selectedDoctor.about}
                        </p>
                        <button
                            onClick={() => setSelectedDoctor(null)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
