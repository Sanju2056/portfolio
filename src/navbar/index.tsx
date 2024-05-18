const NavBar = () => {
  const NavLiks = [
    {
      title: "About",
      Link: "/about",
    },
    {
      title: "Experience",
      Link: "/experience",
    },
    {
      title: "Project",
      Link: "/project",
    },
    {
      title: "Contact Us",
      Link: "/contact",
    },
  ];
  return (
    <div className="bg-[red]">
      <div className="mx-8 bg-[green]">
        <div>
          <p>Sanju Gurung</p>
        </div>
        <div>
          {NavLiks.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
