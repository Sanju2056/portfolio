import { useState } from "react";
import { HamBurger } from "../assets/icons";
import { useNavigate } from "react-router-dom";

const MobileNavBar = () => {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);
  const NavLiks = [
    {
      title: "About",
      Link: "/aboutUs",
      // activeLink:false
    },
    {
      title: "Skills",
      Link: "/skills",
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
    <div className="visible lg:hidden md:px-14 px-8 flex items-center justify-between mt-5 ">
      <div className="text-3xl md:text-2xl cursor-pointer caveat-uniquifier-600" 
      onClick={()=>{
        navigate('/')
      }}>Sanju Gurung</div>
      <div
        className="h-6 w-6 cursor-pointer"
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        <img src={HamBurger} />
      </div>
      <div
        className={`ease-in duration-300 ${
          showSideBar ? "opacity-100" : "opacity-0"
        } caveat-uniquifier-500 flex flex-col h-max w-full right-0 absolute top-14 bg-white text-gray-g-500 shadow transition-opacity`}
      >
        {showSideBar &&
          NavLiks.map((item) => (
            <div
              key={item.title}
              className="border border-gray-g-200-1px gap-1 p-6 flex flex-col"
            >
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => navigate(item.Link)}
              >
                <span className="font-medium">{item.title}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
