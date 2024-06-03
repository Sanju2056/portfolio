import "./App.css";
import Home from "./Home";
import MainComponent from "./Important";
import AboutUs from "./aboutUs";
import ContactUs from "./contact";
import MobileNavBar from "./mobileNavBar";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import Skills from "./skills";
import Projects from "./projects";

function App() {
  return (
    <div className="w-full">
      <MobileNavBar />
      <NavBar />
      {/* <MainComponent/> */}
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
