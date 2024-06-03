import { GithubImage, LinkedInImage, ProfileImage } from "../assets/images";

const Home = () => {
  const Profiles = [
    {
      image: LinkedInImage,
      href: "https://www.linkedin.com/in/sanju-gurung-25a451284/",
    },
    {
      image: GithubImage,
      href: "https://github.com/Sanju2056",
    },
  ];
  return (
    <div
      className="
    flex-col flex justify-center md:flex-row items-center gap-20 w-full font-sans mt-24 md:mt-36"
    >
      <div className="h-72 w-72 rounded-full  overflow-hidden">
        <img src={ProfileImage} className="obeject-contain" />
      </div>
      <div className="flex flex-col items-center gap-4 caveat-uniquifier-500">
        <div className="flex flex-col text-center  gap-1">
          <p className="text-lg opacity-60">Hello , I'm </p>
          <p className=" text-3xl">Sanju Gurung</p>
          <p className="text-4xl">Frontend Developer </p>
        </div>
        <div className="flex gap-6">
          <button className="border-[1px] px-8 py-3 rounded-3xl border-[#000] caveat-uniquifier-500 ">
            Download CV
          </button>
          <button className="border bg-[#000] text-[#fff] px-8 py-3 rounded-3xl c">
            Contact Info
          </button>
        </div>
        <div className="flex items-center gap-4">
          {Profiles.map((item, index) => {
            return (
              <a
                key={index}
                className="h-10 w-10 rounded-full"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.image} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
