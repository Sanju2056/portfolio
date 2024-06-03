import Home from "../Home";
import AboutUs from "../aboutUs";
import ContactUs from "../contact";
import Projects from "../projects";
import Skills from "../skills";

const MainComponent = () => {
  return (
    <div className="flex flex-col gap-20
     md:gap-40 lg:gap-56">
      <div id="home">
        <Home />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
      {/* <a href="#home"><Home/></a>
      <a href="#aboutUs"><AboutUs/></a>
      <a href="#contactUs"><ContactUs/></a> */}
      {/* <a href="project"><Projects/></a> */}
    </div>
  );
};

export default MainComponent;
