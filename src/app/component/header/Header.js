"use client";

import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-white text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/medical.jpg" // 🔹 Replace with actual image path
          alt="Medical Centre Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">Shahid Mugdho Medical Center</h1>
        <p className="mt-4 text-lg md:text-xl">
          At emergency when every moment is important, we care you within less waiting time.
          Please call our hotline 24/7 for any query.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🚑", title: "Ambulance"},
            { icon: "📈", title: "Location" },
            { icon: "🩺", title: "Doctors" },
            
          ].map((service, index) => (
            <div key={index} className="bg-white text-black rounded-lg p-4 shadow-md flex flex-col items-center">
              <span className="text-4xl">{service.icon}</span>
              <p className="mt-2 font-semibold">{service.title}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/service/" className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition">
            More Services
          </Link>
          <Link href="/contact/" className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
