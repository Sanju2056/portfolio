import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { EmailImage, GithubImage, LinkedInImage } from "../assets/images";
import { InstagramIcon, PhoneIcon } from "../assets/icons";

const ContactUs: React.FC = () => {
  const data = [
    {
      label: "Name",
      placeholder: "Your name",
      value: "from_name",
      className: "",
    },
    {
      label: "Email",
      placeholder: "Email",
      value: "from_email",
      className: "",
    },
  ];

  const profiles = [
    {
      icon: GithubImage,
      link: "https://github.com/Sanju2056",
      value: "GitHub",
    },
    {
      icon: LinkedInImage,
      link: "https://www.linkedin.com/in/sanju-gurung-25a451284/",
      value: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      link: "https://www.instagram.com/nbot__official/",
      value: "Instagram",
      className: "size-5 md:size-7",
    },
    {
      icon: PhoneIcon,
      value: "+977-9845929947",
      className: "size-5 md:size-7",
    },
    {
      icon: EmailImage,
      value: "sanjugurung1999@gmail.com",
      className: "size-5 md:size-7",
    },
  ];

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_ohf5m0d', 'template_nanopy9', form.current, 'ylpG0S4Gd2mNsEQ9k')
        .then(() => {
          console.log("SUCCESS!");
        }, (error) => {
          console.log("FAILED...", error.text);
        });
    }
  };

  return (
    <div className="px-8 pb-8 pt-28 flex flex-col items-center justify-center gap-10">
      <div className="flex-1">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-4xl font-medium caveat-uniquifier-700">
            We would love to hear from you.
          </p>
          <p className="caveat-uniquifier-400">
            If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 mt-10 gap-4 mb-4">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col caveat-uniquifier-100">
                <label className="mb-1 text-opacity-40">{item.label}</label>
                <input
                  type="text"
                  name={item.value}
                  placeholder={item.placeholder}
                  className={`h-10 outline-none border-[1px] border-gray-200 rounded mr-2 pl-2 ${item.className} placeholder:text-sm`}
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col caveat-uniquifier-100 mb-7">
            <label className="mb-1 text-opacity-40">Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              className="h-10 outline-none border-[1px] border-gray-200 rounded mr-2 pl-2 placeholder:text-sm min-h-48 pt-2"
              required
            />
          </div>
          <input type="submit" value="Submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2e2e2e] hover:bg-black focus:outline-none caveat-uniquifier-100 cursor-pointer" />
        </form>
      </div>
      <div className="flex flex-col gap-8 mt-14">
        <div className="text-center">
          <p className="caveat-uniquifier-600 text-3xl">Get in touch</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {profiles.map((item, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
              <div className="size-6 md:h-8 md:w-8 flex items-center justify-center">
                <img src={item.icon} className={`object-contain ${item?.className}`} alt={item.value} />
              </div>
              <a href={item?.link} target="_blank" rel="noopener noreferrer" className="caveat-uniquifier-400 line-clamp-3 text-[10px]">
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
