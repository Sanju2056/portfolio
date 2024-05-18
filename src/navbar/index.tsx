// import { useState } from "react";
import { ProfileImage } from "../assets/images";

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState(false)
  const NavLiks = [
    {
      title: "About",
      Link: "/about",
      // activeLink:false
    },
    {
      title: "Experience",
      Link: "/experience",
      // activeLink:false
    },
    {
      title: "Project",
      Link: "/project",
      // activeLink:false
    },
    {
      title: "Contact Us",
      Link: "/contact",
      // activeLink:false
    },
  ];
  return (
    <div>
      <div className="mx-20  grid grid-cols-2 mt-8">
        <div>
          <p className="text-3xl font-normal font-sans text-[#2d2b2b]">
            Sanju Gurung
          </p>
        </div>
        <div className="flex items-center gap-8">
          {NavLiks.map((item, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer hover:border-b-2  border-gray-500 pb-2`}
                // onClick={()=>{
                //   setActiveLink(!activeLink)
                // }}
              >
                <p className="text-3xl font-normal font-sans text-[#2d2b2b]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center gap-10 w-full font-sans ">
        <div className="h-72 w-72 rounded-full  overflow-hidden">
          <img src={ProfileImage}  className="obeject-contain"/>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col text-center font-medium gap-1">
            <p className="">Hello , I'm </p>
            <p className=" text-5xl">Sanju Gurung</p>
            <p className="text-2xl">Frontend Developer </p>
          </div>
          <div className="flex gap-8">
            <button className="border">Download CV</button>
            <button className="border">Contact Info</button>
          </div>
          <div className="flex items-center gap-4">
            <p className="cursor-pointer">LinkedIn</p>
            <p className="cursor-pointer">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
