import SlideCarousel from "./component/header/SlideCarouel";
import HelpSupport from "./component/support/Support";
import AllService from "./component/service/Service";
import DoctorProfile from "./component/doctor/Profile";
import DutyDoctor from "./component/doctor/DutyDoc";
import Specialized from "./component/service/specialized ";

export default function Home() {
  return (
    <>
     
      <SlideCarousel />
      <DutyDoctor /> 
      <AllService />
      <DoctorProfile />
      <Specialized />
      <HelpSupport />
    
      
    </>
  );
}
