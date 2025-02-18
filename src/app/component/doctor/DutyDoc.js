
"use client"
import { useEffect, useState } from "react";

export default function DutyDoctor() {
    
    const [doctor,setDoctors]=useState({})


        useEffect(() => {
            fetchDoctors();
        }, []);
    
        const fetchDoctors = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/v1/doctors/duty-doctor`
                );
                const data = await res.json();
                console.log(data)
                setDoctors(data);
            } catch (error) {
                console.error("Error fetching doctors", error);
            }
        };

    return (
        <div className="bg-gray-100 shadow-lg rounded-lg px-5 md:px-0 py-5">
        <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center bg-white p-5">
            {/* Left Side - Doctor Image */}
            <div className="w-full md:w-1/3 flex justify-center">
                <img src={doctor?.imageUrl || '/images/doctor.png'} alt={doctor?.name} className="rounded-lg w-48 h-48 object-cover" />
            </div>

            {/* Right Side - Doctor Bio */}
            <div className="flex justify-center">
            <div className="w-full md:w-full mt-5 md:mt-0 md:ml-6  text-left">
                <h2 className="text-2xl font-bold text-gray-800">{doctor?.name}</h2>
                <p className="text-gray-600 mt-1">{doctor?.degree}</p>
                
                <div className="mt-4">
                    <p className="text-gray-700"><strong>📞 Phone:</strong> {doctor?.phone}</p>
                    <p className="text-gray-700"><strong>✉ Email:</strong> {doctor?.email}</p>
                    <p className="text-gray-700"><strong>📅 Date:</strong> {doctor?.dutyDate}</p>
                    <p className="text-gray-700"><strong>⏰ Time:</strong> {doctor?.dutyTime}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}
