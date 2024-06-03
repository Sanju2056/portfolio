import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate()
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
    <div className="hidden  w-full lg:px-10 lg:flex lg:items-center lg:justify-center">
      <div className="grid grid-cols-2 mt-12">
        <div onClick={()=>{
          navigate('/')
        }}
        className="cursor-pointer">
          <p className="text-3xl font-normal caveat-uniquifier-500 text-[#2d2b2b]">
            Sanju Gurung
          </p>
        </div>
        <div className="flex items-center gap-8 caveat-uniquifier-500">
          {NavLiks.map((item, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer relative group pb-2`}
                onClick={()=>{
                  navigate(`${item.Link}`)
                }}
              >
                <p className="xl:text-3xl md:text-xl text-sm font-normal  text-[#2d2b2b]">
                  {item.title}
                </p>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2d2b2b] transition-all group-hover:w-full"></span>              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
