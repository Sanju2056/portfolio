import { EcommerceSS, HospitalSS, QuizAppSS } from "../assets/images";

const Projects = () => {
  const project = [
    {
      name: "Hospital Website",
      links: [
        {
          name: "Demo",
          link: "https://react-project-1-p34z.vercel.app/",
        },
        {
          name: "Github",
          link: "https://github.com/Sanju2056/ReactProject-1",
        },
      ],

      image: HospitalSS,
    },
    {
      name: "Quiz App / Firebase Authentication",
      links: [
        {
          name: "Demo",
          link: "https://quiz-app-five-woad.vercel.app/",
        },
        {
          name: "Github",
          link: "https://github.com/Sanju2056/QuizApp",
        },
      ],
      image: QuizAppSS,
    },
    {
      name: "Ecommerce Site",
      links: [
        {
          name: "Demo",
          link: "https://ecommerce-next-js-lovat.vercel.app//",
        },
        {
          name: "Github",
          link: "https://github.com/Sanju2056/ecommerce_nextJS",
        },
      ],

      image: EcommerceSS,
    },
  ];
  return (
    <div className="flex flex-col items-center px-8 gap-20">
      <div className="text-center gap-4 flex flex-col">
        <p className="text-lg caveat-uniquifier-500 opacity-60">Check Out My</p>
        <p className="text-3xl caveat-uniquifier-600">Projects</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 xl:gap-8">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className="p-4 xl:p-6 shadow flex flex-col items-center justify-center rounded-lg w-max gap-6"
            >
              <div className="h-[300px] w-72 md:h-[230px] md:w-48  lg:h-[300px]  lg:w-72 rounded-lg overflow-hidden shadow flex ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover
                "
                />
              </div>
              <div>
                <p className="text-xs xl:text-lg caveat-uniquifier-500  text-center">
                  {item.name}
                </p>
              </div>
              <div className="flex gap-4 lg:gap-14">
                {item.links.map((item, index) => {
                  return (
                    <a
                    key={index}
                      className="px-6 py-2 shadow rounded font-semibold text-sm opacity-60 cursor-pointer caveat-uniquifier-500"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
