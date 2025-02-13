export default function DutyDoctor() {
    const doctors = [
        {
            name: "Dr. Jessica Tailor",
            specialty: "Dental Implant Surgeon",
            image: "/images/doctor.png",
        },
        {
            name: "Dr. Brian Adam",
            specialty: "Restorative Dentist",
            image: "/images/doctor.png",
        },
        {
            name: "Dr. Linda Feldman",
            specialty: "Cosmetic Dental Surgeon",
            image: "/images/doctor.png",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="mx-auto max-w-screen-lg">
            <h2 className="text-xl font-bold my-5 text-black">Duty Docctors</h2>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white  rounded-lg overflow-hidden text-center">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-gray-500">{doctor.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>

            </div>
        </div>
    );
}
