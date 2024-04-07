import PageHeader from "../components/ui/PageHeader";
import PaintBrushBg from "../components/ui/PaintBrushBg";
import Button from "../components/ui/Button";
import Image from "next/image";
import History from "./History";

export default function page() {
  return (
    <div>
      <PageHeader pageTitle="About Us" />

      {/* 2 col grid */}
      <div className="relative max-w-[1000px] mx-auto mt-6 flex flex-col-reverse items-center md:flex-row p-4 md:p-0 gap-4">
        <div className="w-full flex-1 flex flex-col items-center md:items-stretch gap-4 text-center md:text-left">
          {/* brush heading */}
          <PaintBrushBg>Who are we?</PaintBrushBg>
          {/* title */}
          <h2 className="text-4xl font-bold">
            We Will Give You Strength and Health
          </h2>
          {/* paragraph */}
          <p className="text-md">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          {/* button */}
          <div>
            <Button otherStyles="text-white font-bold">TAKE A TOUR</Button>
          </div>
        </div>

        {/* images */}
        <div className="flex-1 relative -z-20">
          <Image
            src="/assets/running-lady.png"
            priority
            height={500}
            width={800}
            // fill
            alt="Woman running"
            className="object-cover"
          />
          <Image
            src="/assets/wave.png"
            priority
            fill
            alt="wave"
            className="object-cover -z-10 transform rotate-180"
            sizes="100vw"
          />
        </div>
      </div>
      <History />
    </div>
  );
}
