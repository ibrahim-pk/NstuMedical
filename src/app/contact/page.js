"use client"
import { QRCode } from "react-qrcode-logo";
export default function Contact() {
    const phoneNumber = "8801712345678";
    const message = "Hello! I want to contact you.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-gray-100 py-10 px-5">

            <div className="mx-auto max-w-screen-lg gap-6">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Address Section */}

                    <div className="bg-white p-6 flex justify-between rounded-lg shadow">
                        <div>
                        <h3 className="text-lg font-semibold mb-2">Athena Medical Centre</h3>
                        <p>21 Atherden Road,<br /> Clapton,<br /> E5 0QP</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center space-x-2">
                                <span>📍</span>
                                <a href="#" className="text-blue-600 hover:underline">Get Directions</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📞</span>
                                <a href="tel:02089856675" className="text-blue-600 hover:underline">0208 985 6675</a>
                            </div>
                        </div>
                        </div>
                        {/* qr code */}
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-lg font-semibold">📞WhatsApp</h2>
                            <QRCode value={whatsappLink} size={120} />
                        </div>
                    </div>




                    {/* Opening Hours Section */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                            <span>⏰</span>
                            <span>Opening Hours</span>
                        </h3>
                        <ul className="mt-3">
                            {[
                                { day: "Monday", hours: "8:00 am – 6:30 pm" },
                                { day: "Tuesday", hours: "8:00 am – 6:30 pm" },
                                { day: "Wednesday", hours: "8:00 am – 6:30 pm" },
                                { day: "Thursday", hours: "8:00 am – 6:30 pm" },
                                { day: "Friday", hours: "8:00 am – 6:30 pm" },
                                { day: "Saturday", hours: "Closed" },
                                { day: "Sunday", hours: "Closed" },
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between">
                                    <span>{item.day}</span>
                                    <span>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <img className="w-full h-full my-5" src="/images/map.png" alt="map" />
                </div>

            </div>
        </div>
    );
}
