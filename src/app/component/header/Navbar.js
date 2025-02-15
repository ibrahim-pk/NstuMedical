

"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, User, Bell, Settings, CalendarCheck, Stethoscope, BriefcaseMedical, Phone, LocateIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white text-lg text-black font-semibold shadow-md">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/images/nstu_logo1.jpg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/appointment">Appointment</Link>
          <Link href="/doctor/profile">Doctors</Link>
          <Link href="/service">Services</Link>
          <Link href="/location">Location</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded">Login</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-500 text-white py-4">

          <Link href="/">Home</Link>
          <Link href="/appointment">Appointment</Link>
          <Link href="/doctor/profile">Doctors</Link>
          <Link href="/service">Services</Link>
          <Link href="/location">Location</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>

          <Link href="/login" className="bg-white text-blue-600 px-4 py-2 mt-2 rounded">Login</Link>
        </div>
      )}

      {/* Bottom Navbar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md p-2 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center text-blue-600">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/appointment" className="flex flex-col items-center text-gray-600">
          <CalendarCheck size={24} />
          <span className="text-xs">Appointment</span>
        </Link>
        <Link href="/doctor/profile" className="flex flex-col items-center text-gray-600">
          <Stethoscope size={24} />
          <span className="text-xs">Doctors</span>
        </Link>
        <Link href="/location" className="flex flex-col items-center text-gray-600">
          <LocateIcon size={24} />
          <span className="text-xs">Location</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center text-gray-600">
          <Phone size={24} />
          <span className="text-xs">Contact</span>
        </Link>
      </div>

    </>
  );
}
