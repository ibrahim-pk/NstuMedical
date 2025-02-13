export default function DutyDoctor() {
    const doctor = {
        name: "Dr. Jessica Tailor",
        degree: "MBBS, FCPS (Cardiology)",
        phone: "+880 1234 567 890",
        email: "jessica@example.com",
        date: "February 14, 2025",
        time: "10:00 AM - 4:00 PM",
        image: "/images/doctor.png", // Replace with actual image path
    };

    return (
        <div className="bg-gray-100 shadow-lg rounded-lg px-5 md:px-0 py-5">
        <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center bg-white p-5">
            {/* Left Side - Doctor Image */}
            <div className="w-full md:w-1/3 flex justify-center">
                <img src={doctor.image} alt={doctor.name} className="rounded-lg w-48 h-48 object-cover shadow-md" />
            </div>

            {/* Right Side - Doctor Bio */}
            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                <p className="text-gray-600 mt-1">{doctor.degree}</p>
                
                <div className="mt-4">
                    <p className="text-gray-700"><strong>📞 Phone:</strong> {doctor.phone}</p>
                    <p className="text-gray-700"><strong>✉ Email:</strong> {doctor.email}</p>
                    <p className="text-gray-700"><strong>📅 Date:</strong> {doctor.date}</p>
                    <p className="text-gray-700"><strong>⏰ Time:</strong> {doctor.time}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
