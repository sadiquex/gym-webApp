import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import PaintBrushBg from "../ui/PaintBrushBg";

export default function Hero() {
  return (
    <div
      className={`w-full h-[100vh] object-cover flex flex-col gap-4 items-center justify-center`}
      style={{
        backgroundImage: `url('/assets/homepage/woman-training-gym.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
      }}
    >
      <PaintBrushBg>FIND YOUR ENERGY</PaintBrushBg>
      <h1 className="text-white text-5xl text-center font-extrabold">
        MAKE YOUR BODY
      </h1>
      <h1 className="text-white text-5xl">FIT & PERFECT</h1>
      <Link href="/classes">
        <Button
          bgColor="white"
          textColor="darkAsh"
          otherStyles="font-semibold hover:gap-4"
        >
          OUR CLASSES
          <FaArrowRight
            style={{
              color: "#ff0336",
              fontSize: "1.4rem",
            }}
          />
        </Button>
      </Link>
    </div>
  );
}
