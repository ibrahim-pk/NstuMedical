"use client"
import { QRCode } from "react-qrcode-logo";
export default function Contact() {
    const phoneNumber = "+8801792991827";
    const message = "Hello! I want to contact you.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-gray-100 py-10 px-5">

            <div className="mx-auto max-w-screen-lg gap-6">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Address Section */}

                    <div className="bg-white p-6 flex flex-col justify-between rounded-lg shadow">
                        <div>
                        <h3 className="text-lg font-semibold mb-2">Shahid Mugdho Medical Center</h3>
                        <p>Noakhali Science and Technology University<br /> Noakhali-3814, Noakhali.,<br /> Website : www.nstu.edu.bd</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center space-x-2">
                                <span>📞</span>
                                <a href="tel:02089856675" className="text-blue-600 hover:underline">02334496572 (Office)</a>
                            </div>
                        </div>
                        </div>
                        {/* qr code */}
                        <div className="flex flex-col my-5 space-y-2">
                            <h2 className="text-lg font-semibold">WhatsApp for Psychologist</h2>
                            <QRCode value={whatsappLink} size={150} />
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
                                { day: "Sunday", hours: "9:00 am – 5:00 pm" },
                                { day: "Monday", hours: "9:00 am – 5:00 pm" },
                                { day: "Tuesday", hours: "9:00 am – 5:00 pm" },
                                { day: "Wednesday", hours: "9:00 am – 5:00 pm" },
                                { day: "Thursday", hours: "9:00 am – 5:00 pm" },
                                { day: "Friday", hours: "Closed" },
                                { day: "Saturday", hours: "Closed" },
                                
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
