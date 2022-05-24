import "./App.css";
import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import MainPageMobile from "./components/MainPageMobile";
import { Routes, Route } from "react-router-dom";
import Government from "./components/subpages/Government";
import GovernmentPc from "./components/subpages/GovernmentPc";
import Dollar from "./components/subpages/Dollar";
import DollarPc from "./components/subpages/DollarPc";
import MedicalSupport from "./components/subpages/MedicalSupport";
import SocialSupport from "./components/subpages/SocialSupport";
import SocialSupportPc from "./components/subpages/SocialSupportPc";
import Job from "./components/subpages/Job";
import JobPc from "./components/subpages/JobPc";
import SelfcarePc from "./components/subpages/SelfcarePc";
import Selfcare from "./components/subpages/Selfcare";
import Transport from "./components/subpages/Transport";
import TransportPc from "./components/subpages/TransportPc";
import MedicalSupportPc from "./components/subpages/MedicalSupportPc";
import SupportUkraine from "./components/subpages/SupportUkraine";
import SupportUkrainePc from "./components/subpages/SupportUkrainePc";
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowsSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowsSizeChange);
    // console.log("mount");
    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowsSizeChange);
      // console.log("unmount");
    };
  }, []);

  const isMobile = width <= 1024;

  const mobile = {
    home: <MainPageMobile />,
    government: <Government />,
    dollar: <Dollar />,
    medicalSupport: <MedicalSupport />,
    socialSupport: <SocialSupport />,
    supportUkraine: <SupportUkraine />,
    job: <Job />,
    selfcare: <Selfcare />,
    transport: <Transport />,
  };
  const pc = {
    home: <MainPage windowWidth={width} />,
    government: <GovernmentPc />,
    dollar: <DollarPc />,
    medicalSupport: <MedicalSupportPc />,
    socialSupport: <SocialSupportPc />,
    supportUkraine: <SupportUkrainePc />,
    job: <JobPc />,
    selfcare: <SelfcarePc />,
    transport: <TransportPc />,
  };
  const typeOfScreen = isMobile ? mobile : pc;
  return (
    <div className="App">
      <Routes>
        <Route path="/government" element={typeOfScreen.government} />
        <Route path="/financialSupport" element={typeOfScreen.dollar} />
        <Route path="/socialSupport" element={typeOfScreen.socialSupport} />
        <Route path="/supportUkraine" element={typeOfScreen.supportUkraine} />
        <Route path="/job" element={typeOfScreen.job} />
        <Route path="/selfcare" element={typeOfScreen.selfcare} />
        <Route path="/transport" element={typeOfScreen.transport} />
        <Route path="/medicalSupport" element={typeOfScreen.medicalSupport} />

        {["/home", "/"].map((path, index) => (
          <Route path={path} element={typeOfScreen.home} key={index} />
        ))}
      </Routes>
    </div>
  );
  //   if (isMobile) {
  //     return <div className="App">{mainPageMobile}</div>;
  //   } else
  //     return (
  //       <div className="App">
  //         <MainPage windowWidth={width} />
  //       </div>
  //     );
}

export default App;
