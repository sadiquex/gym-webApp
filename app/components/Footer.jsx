import gymLogo from "/public/assets/gym-logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/example" },
    { icon: <FaTwitter />, link: "https://twitter.com/example" },
    { icon: <FaPinterest />, link: "https://www.pinterest.com/example" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/example" },
  ];

  const ourClasses = [
    "Fitness Classes",
    "Aerobics Classes",
    "Power Yoga",
    "Learn Machines",
    "Full-body strength",
  ];

  const workingHours = [
    {
      days: "Monday - Friday:",
      time: "7:00am - 21:00pm",
    },
    {
      days: "Saturday:",
      time: "7:00am - 19:00pm",
    },
    {
      days: "Sunday : Closed",
      time: "",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1000px] mx-auto py-8 px-4 md:px-0 flex flex-col md:flex-row gap-4">
        {/* 2 sides */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 text-darkAsh">
          <Image
            src={gymLogo}
            alt="logo"
            priority
            width={140}
            height={140}
            sizes="100vw"
          />
          <p className="text-lg ">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          {/* social icons */}
          <div className="flex gap-2">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="rounded-full bg-gray-200 p-3 text-xl hover:bg-primaryColor hover:text-white cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-lg">
            Privacy Policy | © 2024 Gymate <br />
            Design by RadiusTheme
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center md:text-start">
              Our Classes
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2 text-lg">
              {ourClasses.map((classItem, i) => (
                <li
                  key={classItem}
                  className="text-darkAsh cursor-pointer font-medium hover:font-bold hover:text-primaryColor"
                >
                  <Link href="/classes">{classItem}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center md:text-start">
              Working Hours
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2">
              {workingHours.map((day, i) => (
                <li
                  key={day.days}
                  className="flex flex-col items-center md:items-start gap-2 text-lg text-darkAsh"
                >
                  <span className="font-bold">{day.days}</span>
                  <span className="font-medium">{day.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
