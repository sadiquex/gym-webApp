import { FaClockRotateLeft } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { LuClipboardList } from "react-icons/lu";
import Image from "next/image";
const services = [
  {
    img: "/assets/homepage/services-cards/progression.jpg",
    title: "Progression",
    icon: <FaClockRotateLeft size={48} />,
    description:
      "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    img: "/assets/homepage/services-cards/workout.jpg",
    title: "Workout",
    icon: <CgGym size={48} />,
    description:
      " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    img: "/assets/homepage/services-cards/nutrition.jpg",
    title: "Nutritions",
    icon: <LuClipboardList size={48} />,
    description:
      "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
  },
];

const Card = ({ title, description, img, icon }) => {
  return (
    <div
      className={`overflow-hidden min-h-[300px] bg-black hover:bg-white relative rounded-lg cursor-pointer flex flex-col items-center justify-center gap-4 shadow-lg`}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={img}
          fill
          sizes="100vw"
          priority
          alt="service"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      {/* content */}
      <div className="z-20 flex flex-col items-center justify-center text-center gap-4 text-black bg-white hover:text-white hover:bg-transparent p-4 w-full h-full transition-all duration-300">
        {icon}
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesCards() {
  return (
    <div className="-mt-[6rem] max-w-[1000px] p-4 md:p-0 py-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map((service, i) => (
        <Card
          key={i}
          title={service.title}
          description={service.description}
          img={service.img}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
