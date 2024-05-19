import React from "react";
import { BadgeImage, EducationImage, ProfileImage } from "../assets/images";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mt-12 lg:mt-14 w-full">
      <div className="text-center gap-2 flex flex-col">
        <p className="text-lg">Get To Know Me More</p>
        <p className="text-3xl font-semibold">About Me</p>
      </div>
      <div className="w-full mt-16 flex flex-col items-center gap-10 lg:flex-row  lg:justify-center">
        <div className="h-80 w-80 rounded-3xl overflow-hidden">
          <img src={ProfileImage} className="object-cover" />
        </div>
        <div className=" grid grid-rows-2 mt-5 gap-5 max-w-[600px]">
          <div className="flex md:flex-row flex-col items-center gap-10">
            <div className="py-6 px-10 border border-[black] rounded-2xl flex flex-col items-center max-w-72">
              <div className="h-10 w-10">
                <img src={BadgeImage} />
              </div>
              <p>Experience</p>
              <p>2+ years</p>
              <p>Frontend Developement</p>
            </div>
            <div className="py-6 px-10 border border-[black] rounded-2xl flex flex-col items-center max-w-72">
              <div className="h-10 w-10">
                <img src={EducationImage} />
              </div>
              <p>Education</p>
              <p>BCE. Bachelors Degree</p>
            </div>
          </div>
          <p className="font-medium italic px-8 md:px-0 text-center">" Sanju Gurung, a Computer Engineering graduate, brings a wealth of frontend development experience. Proficient in HTML, CSS, and JavaScript, I am dedicated to crafting seamless user experiences. Let's collaborate to bring your digital vision to life. "</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
