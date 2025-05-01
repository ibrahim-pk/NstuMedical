import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NSTU MEDICAL CENTER",
  description: "The Shahid Mugdho Medical Center of Noakhali science and technology university (NSTU) located in the medical center building offers free experienced general practitioner and emergency medical care services to all members (students, teachers, officers, staff, also family members of the teachers, officers, staff­ ) of the university community.The center provides service usually 8.30 am to 5.00 pm in working days but provide emergency services 24 hours. All members of the university get medicine from the medical center at free of cost .The center also has an ambulance, for 24 hours service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
