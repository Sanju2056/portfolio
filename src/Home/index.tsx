import { GithubImage, LinkedInImage, ProfileImage } from "../assets/images";

const Home = () => {
  return (
    <div>
      <div className=" mt-28 mb-10 lg:mt-44 flex-col flex  md:flex-row items-center md:justify-center md:items-center gap-20 w-full font-sans ">
        <div className="h-72 w-72 rounded-full  overflow-hidden">
          <img src={ProfileImage} className="obeject-contain" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col text-center font-medium gap-1">
            <p className="text-lg">Hello , I'm </p>
            <p className=" text-3xl">Sanju Gurung</p>
            <p className="text-4xl">Frontend Developer </p>
          </div>
          <div className="flex gap-6">
            <button className="border-[1px] px-8 py-3 rounded-3xl border-[#000] font-medium">
              Download CV
            </button>
            <button className="border bg-[#000] text-[#fff] px-8 py-3 rounded-3xl">
              Contact Info
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full">
              <img src={LinkedInImage} />
            </div>
            <div className="h-10 w-10 rounded-full">
              <img src={GithubImage} />
            </div>
            {/* <img
            src={HamBurger}
            /> */}
            {/* <HamBurger/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
