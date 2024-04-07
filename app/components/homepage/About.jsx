import Image from "next/image";
import waveImage from "./../../../public/assets/homepage/wave.png";
import PaintBrushBg from "../ui/PaintBrushBg";
import Button from "../ui/Button";
import { GiGymBag } from "react-icons/gi";

export default function About() {
  return (
    <div className="relative max-w-[1000px] mx-auto mt-6 flex flex-col-reverse md:flex-row p-4 md:p-0 gap-4">
      <div className="w-full flex-1 flex flex-col items-center md:items-start gap-4">
        {/* brush heading */}
        <PaintBrushBg>Who are we?</PaintBrushBg>
        {/* title */}
        <h2 className="text-4xl font-bold">
          Take Your Health and Body to the Next Level
        </h2>
        {/* paragraph */}
        <p className="text-lg">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-red-400 p-4 flex flex-col items-center"
            >
              <GiGymBag
                size={36}
                style={{
                  color: "#ff0336",
                }}
              />
              <p className="text-center font-bold text-xl">
                PROFESSIONAL <br /> TRAINERS
              </p>
            </div>
          ))}
        </div>
        {/* button */}
        <Button otherStyles="bg-darhAsh text-white font-bold">
          TAKE A TOUR
        </Button>
      </div>

      <div className="flex-1 relative -z-20">
        <Image
          src="/assets/homepage/running-lady.png"
          priority
          height={500}
          width={800}
          alt="Woman running"
          className="object-cover"
        />
        <Image
          src={waveImage}
          priority
          fill
          alt="wave"
          className="object-cover -z-10  transform rotate-180"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
