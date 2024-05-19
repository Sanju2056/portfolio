import "./App.css";
import Home from "./Home";
import MainComponent from "./Important";
import AboutUs from "./aboutUs";
import MobileNavBar from "./mobileNavBar";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <MobileNavBar />
      <NavBar />
            {/* <MainComponent/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
