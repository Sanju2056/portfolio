const NavBar = () => {
  const NavLinks = [
    {
      title: "About",
      id: "aboutUs",
    },
    {
      title: "Skills",
      id: "skills",
    },
    {
      title: "Project",
      id: "projects",
    },
    {
      title: "Contact Us",
      id: "contactUs",
    },
  ];
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hidden  w-full lg:px-10 lg:flex lg:items-center lg:justify-center">
      <div className="grid grid-cols-2 mt-12">
        <div>
          <p className="text-3xl font-normal caveat-uniquifier-500 text-[#2d2b2b]">
            Sanju Gurung
          </p>
        </div>
        <div className="flex items-center gap-8 caveat-uniquifier-500">
          {NavLinks.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer"
              >
                <p className="xl:text-3xl md:text-xl text-sm font-normal  text-[#2d2b2b]">
                  {item.title}
                </p>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2d2b2b] transition-all group-hover:w-full"></span>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
