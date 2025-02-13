"use client";

import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";

const AppointmentOption = ({ appointmentOption, date }) => {
  const { title, time, value, slot } = appointmentOption;
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  //const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const userInfo={
    name:""
  }
  const [formData, setFormData] = useState({
    patientName: userInfo.name || "",
    studentId: userInfo.id || "",
    mobileNo: userInfo.phone || "",
    date: date,
    time: time,
    gender: userInfo.gender || "",
    issues: "",
    slot: value,
    userId: userInfo._id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoader(false);
      if (data?.msg) {
        toast.success(data.msg);
        setOpen(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoader(false);
      toast.error("Error booking appointment");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h4 className="text-xl font-semibold">{title}</h4>
      <h6 className="text-gray-600">{time}</h6>
      <button
        className={`mt-4 px-4 py-2 rounded-md text-white ${slot ? "bg-red-500" : "bg-blue-500 hover:bg-blue-600"}`}
        disabled={slot}
        onClick={() => setOpen(true)}
      >
        {slot ? "Booked" : "Book Now"}
      </button>
      
      <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between">
        <h3 className="text-lg font-semibold">Appointment Form</h3>
        <h3 className="text-xl font-bold text-rose-400"><span onClick={() => setOpen(false)}>X</span></h3>
        </div>
          <hr className="my-2" />
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="w-full p-2 border rounded" required />
            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="ID" className="w-full p-2 border rounded" required />
            <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="Mobile No" className="w-full p-2 border rounded" required />
            <input type="text" name="time" value={time} disabled className="w-full p-2 border rounded bg-gray-100" required />
            <input type="text" name="date" value={date} disabled className="w-full p-2 border rounded bg-gray-100" required />
            <textarea name="issues" value={formData.issues} onChange={handleChange} placeholder="Describe your issue" className="w-full p-2 border rounded" required></textarea>
            <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md">
              {loader ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default AppointmentOption;
