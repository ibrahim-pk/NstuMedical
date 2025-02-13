"use client"

import { useState, useEffect } from "react";
import Image from "next/image";


const fakeDoctors = [
    {
        id: 1,
        name: "Dr. Ayesha Rahman",
        specialty: "Cardiologist",
        experience: 12,
        image: "/images/teacher.png"
    },
    {
        id: 2,
        name: "Dr. Salman Karim",
        specialty: "Neurologist",
        experience: 15,
        image: "/images/teacher.png"
    },
    {
        id: 3,
        name: "Dr. Nusrat Jahan",
        specialty: "Dermatologist",
        experience: 8,
        image: "/images/teacher.png"
    },
    {
        id: 4,
        name: "Dr. Tanvir Hossain",
        specialty: "Orthopedic Surgeon",
        experience: 10,
        image: "/images/teacher.png"
    },
    {
        id: 5,
        name: "Dr. Sumaiya Ahmed",
        specialty: "Pediatrician",
        experience: 6,
        image: "/images/teacher.png"
    }
];






export default function DoctorProfile() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/teachers")
            .then((res) => res.json())
            .then((data) => setDoctors(data))
            .catch((err) => console.error("Error fetching doctors:", err));
    }, []);

    const handleViewDoctor = (id) => {
        // fetch(`http://localhost:5000/teachers/${id}`)
        //   .then((res) => res.json())
        //   .then((data) => setSelectedDoctor(data))
        //   .catch((err) => console.error("Error fetching doctor details:", err));
        setSelectedDoctor(fakeDoctors.filter((d) => d.id == id))
    };

    return (
        <div className="bg-gray-100 py-10 px-5">
            
            <div className="mx-auto max-w-screen-lg bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold my-5">Doctors List</h2>
                {fakeDoctors.map((doctor) => (
                    <div key={doctor.id} className="flex items-center justify-between border-b pb-4 last:border-none">
                        <div className="flex items-center space-x-4">
                            <div>
                                <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full" />
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">{doctor.name}</h3>
                                <p className="text-sm text-gray-500">{doctor.specialty}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => handleViewDoctor(doctor.id)} className="text-gray-600 hover:text-gray-900">View</button>
                        </div>
                    </div>
                ))}
            </div>



            {/* Modal for doctor details */}
            {selectedDoctor && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                        <h2 className="text-xl font-semibold">{selectedDoctor[0].name}</h2>
                        <p className="text-gray-600">{selectedDoctor[0].specialty}</p>
                        <p className="text-gray-600">Experience: {selectedDoctor[0].experience} years</p>
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

