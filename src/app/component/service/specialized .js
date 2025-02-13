export default function Specialized() {
    const services = [
        {
            title: "Ammbulance",
            description: "Duis sit amet nulla vestibulum, interdum felis a, malesuada enim. Ut vel risus accumsan.",
            icon: "🏥", // Replace with actual icon
            buttonText: "More Information",
        },
        {
            title: "DOCTORS",
            description: "Sed id bibendum lectus, sit amet malesuada erat. Lorem ipsum dolor sit amet, consectetur adipis.",
            icon: "📋", // Replace with actual icon
            buttonText: "Meet Our Doctors",
        },
        {
            title: "APPOINTMENTS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor congue.",
            icon: "📅", // Replace with actual icon
            buttonText: "Appoint Consultation",
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
                        <p className="text-white mt-2">{service.description}</p>
                        <button className="mt-4 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-500 transition">
                            {service.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
