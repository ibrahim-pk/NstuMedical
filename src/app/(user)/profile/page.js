"use client";

import AuthGuard from "@/app/component/privaterouter/AuthGurd";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function UserProfile() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState({
    name: "",
    gender: "",
    dept: "",
    studentID: "",
    password: "",
    email: "",
    phone: "",
    imageUrl: "",
  });

  const [password, setPassword] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Ensure localStorage is accessed only on the client side
  const [userId, setUserId] = useState(null);
  const [stuId, setStuId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUserId(userInfo?._id);
      setStuId(userInfo?.studentID);
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (userId && stuId) {
      fetchAppointments();
      fetchUserProfile();
    }
  }, [userId, stuId]);

  // Fetch Appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/appointment/user/${stuId}`);
      const data = await res.json();
      setAppointments(data?.data || []);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  // Fetch User Profile
  const fetchUserProfile = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/user/${userId}`);
      const data = await res.json();
      setUser(data || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile", error);
      setLoading(false);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      if (!token) {
        toast.error("Unauthorized! Please log in.");
        return;
      }

      const res = await fetch(`http://localhost:5000/api/v1/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ user, password }),
      });

      if (res.ok) {
        toast.success("Profile Updated Successfully!");
        fetchAppointments();
        fetchUserProfile();
      } else {
        toast.error("Error updating user profile!");
      }
    } catch (error) {
      toast.error("Error updating user profile!");
      console.error("Error updating user profile", error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AuthGuard>
      <div className="bg-gray-100 min-h-screen p-10">
        <button onClick={handleLogout} className="m-5 bg-rose-400 btn btn-sm">Logout</button>
        <div className="max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Appointment List */}
          <Toaster />
          <h2 className="text-xl font-bold mb-4">Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">#</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <tr key={index} className="border text-center">
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{appointment?.patientName}</td>
                      <td className="border p-2">{appointment?.studentId}</td>
                      <td className="border p-2">{appointment?.mobileNo}</td>
                      <td className="border p-2">{appointment?.date}</td>
                      <td className="border p-2">{appointment?.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4">No appointments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Profile Form */}
        <div className="mx-auto max-w-screen-lg bg-white p-6 rounded-lg shadow-md my-5">
          <h2 className="text-xl font-bold mt-6 mb-4">Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" value={user?.name} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Gender</label>
              <select name="gender" value={user?.gender} onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Department</label>
              <input type="text" name="dept" value={user?.dept} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-gray-700">ID</label>
              <input type="text" name="studentID" value={user?.studentID} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" value={user?.email} onChange={handleChange} className="w-full border p-2 rounded" disabled />
            </div>

            <div>
              <label className="block text-gray-700">Phone</label>
              <input type="text" name="phone" value={user?.phone} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-gray-700">Profile Image</label>
              {user?.imageUrl && <img src={user?.imageUrl} alt="Profile" className="mt-2 w-24 h-24 rounded-full" />}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Update Profile</button>
          </form>
        </div>
      </div>
    </AuthGuard>
  );
}
