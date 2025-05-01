// import SlideCarousel from "./component/header/SlideCarouel";
import HelpSupport from "./component/support/Support";
import AllService from "./component/service/Service";
import DoctorProfile from "./component/doctor/Profile";
import DutyDoctor from "./component/doctor/DutyDoc";
import Specialized from "./component/service/specialized ";
import HeaderSection from "./component/header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NSTU MEDICAL CENTER</title>
        <meta name="description" content="The Shahid Mugdho Medical Center of Noakhali science and technology university (NSTU) located in the medical center building offers free experienced general practitioner and emergency medical care services to all members (students, teachers, officers, staff, also family members of the teachers, officers, staff­ ) of the university community.The center provides service usually 8.30 am to 5.00 pm in working days but provide emergency services 24 hours. All members of the university get medicine from the medical center at free of cost .The center also has an ambulance, for 24 hours service" />
        <meta property="og:title" content="NSTU MEDICAL CENTER" />
        <meta property="og:description" content="The Shahid Mugdho Medical Center of Noakhali science and technology university (NSTU) located in the medical center building offers free experienced general practitioner and emergency medical care services to all members (students, teachers, officers, staff, also family members of the teachers, officers, staff­ ) of the university community.The center provides service usually 8.30 am to 5.00 pm in working days but provide emergency services 24 hours. All members of the university get medicine from the medical center at free of cost .The center also has an ambulance, for 24 hours service" />
        <meta property="og:image" content="https://res.cloudinary.com/dokcqy6gn/image/upload/v1744207012/WhatsApp_Image_2025-04-09_at_7.37.28_AM_k3026z.jpg" />
        <meta property="og:url" content="https://medicalcenter.nstu.edu.bd/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://medicalcenter.nstu.edu.bd/" />
      </Head>

      {/* <SlideCarousel /> */}
      <HeaderSection />
      <DutyDoctor />
      <AllService />
      <DoctorProfile />
      <Specialized />
      <HelpSupport />

    </>
  );
}
