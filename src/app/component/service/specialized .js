import Link from "next/link";

export default function Specialized() {
    const services = [
        {
            title: "Ammbulance",
            description: `01333199085 Or 01333199085`,
            icon: "🏥", // Replace with actual icon
            buttonText: "More Information",
            link:"/location"
        },
        {
            title: "DOCTORS",
            description: "02334496572 (Office)",
            icon: "📋", // Replace with actual icon
            buttonText: "Meet Our Doctors",
            link:"/doctor/profile"
        },
        {
            title: "APPOINTMENTS",
            description: "01792991827 (Psychologist)",
            icon: "📅", // Replace with actual icon
            buttonText: "Appoint Consultation",
             link:"/appointment"
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="mx-auto max-w-screen-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-0">
                {services.map((service, index) => (
                    <div key={index} className="bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
                        <div className="bg-white text-blue-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-white mb-4 mt-2">{service.description}</p>
                        <Link href={service.link} className="mt-4 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-500 transition">
                            {service.buttonText}
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
