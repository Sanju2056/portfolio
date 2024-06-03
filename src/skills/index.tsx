import {
  CssIcon,
  HtmlIcon,
  JSIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/icons";
import { NextJsImage } from "../assets/images";

const Skills = () => {
  const skillIcons = [
    {
      icon: HtmlIcon,
    },
    {
      icon: CssIcon,
    },
    {
      icon: JSIcon,
    },
    {
      icon: TailwindIcon,
    },
    {
      icon: ReactIcon,
    },
    {
      icon: NextJsImage,
    },
    {
      icon: TypeScriptIcon,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-20 md:px-4 ">
      <div className="text-center flex flex-col gap-6">
        <p className="caveat-uniquifier-500 text-lg opacity-60">Explore My </p>
        <p className="caveat-uniquifier-600  text-3xl">Skills</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10">
        {skillIcons.map((icon, index) => {
          return (
            <div
              key={index}
              className="size-32  md:size-52  flex-row shadow rounded flex items-center justify-center "
            >
              <img src={icon.icon} alt="images" className="  size-20 md:size-40" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
