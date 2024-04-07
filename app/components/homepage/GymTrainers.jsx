import Image from "next/image";
import PaintBrushBg from "../ui/PaintBrushBg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const TrainerCard = ({ trainer }) => {
  const { image, name, role } = trainer;

  return (
    <div className="min-h-[200px] flex flex-col relative shadow-md hover:shadow-lg">
      <Image
        src={image}
        sizes="100vw"
        height={300}
        width={300}
        priority
        alt={name}
      />
      <div className="flex flex-col gap-2 items-center py-4">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="font-medium text-md">{role}</p>
        <div className="flex gap-2">
          <FaFacebook size={20} />
          <FaXTwitter size={20} />
          <FaSquareInstagram size={20} />
          <FaLinkedinIn size={20} />
        </div>
      </div>
    </div>
  );
};

const trainers = [
  {
    name: "Tim Berchie",
    role: "Personal Trainer",
    image: "/assets/homepage/trainers/trainer-1.jpg",
  },
  {
    name: "Joseph Boyce",
    role: "Yoga Trainer",
    image: "/assets/homepage/trainers/trainer-2.jpg",
  },
  {
    name: "William Jill",
    role: "Crossfit Trainer",
    image: "/assets/homepage/trainers/trainer-3.jpg",
  },
];

export default function GymTrainers() {
  return (
    <div className="max-w-[1000px] mx-auto py-8 flex flex-col gap-2 items-center justify-center">
      <PaintBrushBg>OUR GYM TRAINERS</PaintBrushBg>
      <h2 className="text-3xl font-bold text-center ">
        Team Of Expert Coaches
      </h2>
      <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {trainers.map((trainer, i) => (
          <TrainerCard key={i} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}
