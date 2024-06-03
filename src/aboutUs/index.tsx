import { BadgeImage, EducationImage, ProfileImage } from "../assets/images";

const AboutUs = () => {
  const data = [
    {
      icon: BadgeImage,
      desc: ["Experience", "2+ years", "Frontend Development"],
    },  
    {
      icon: EducationImage,
      desc: ["Education", "BCE. Bachelors Degree"],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="text-center gap-4 flex flex-col">
        <p className="text-lg caveat-uniquifier-500 opacity-60">Get To Know Me More</p>
        <p className="text-3xl caveat-uniquifier-600">About Me</p>
      </div>
      <div className="w-full mt-10 flex flex-col items-center gap-10 lg:flex-row  lg:justify-center">
        <div className="h-80 w-80 rounded-3xl overflow-hidden">
          <img src={ProfileImage} className="object-contain" />
        </div>
        <div className="mt-20 md:grid md:grid-rows-2 md:mt-10 md:gap-5 max-w-[600px]">
          <div className="flex md:flex-row flex-col items-center justify-center gap-10 mb-10 max-h-48 lg:mb-0">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-6 px-10 border border-[black] rounded-2xl flex flex-col items-center max-w caveat-uniquifier-500 h-full "
                >
                  <div className="h-10 w-10 mb-2">
                    <img src={item.icon} />
                  </div>
                  {item.desc.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <p className="caveat-uniquifier-500 italic mt-28 md:mt-0 px-8 md:px-0 text-center opacity-60">
            " Sanju Gurung, a Computer Engineering graduate, brings a wealth of
            frontend development experience. Proficient in HTML, CSS, and
            JavaScript, I am dedicated to crafting seamless user experiences.
            Let's collaborate to bring your digital vision to life. "
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
