import { LuTarget } from "react-icons/lu";
import { FaMountainCity } from "react-icons/fa6";
import Image from "next/image";

export default function History() {
  return (
    <div className="py-6 max-w-[1000px] min-h-[800px] mx-auto grid grid-cols-1 md:grid-cols-2">
      {/* 1 */}
      <div className="flex flex-col items-center justify-center text-center gap-4 p-8">
        <LuTarget size={42} />
        <h2 className="text-4xl font-bold">Our History</h2>
        <p className="text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit Exercitation
          veniam consequat.
        </p>
      </div>
      {/* 2 */}
      <div className="relative">
        <Image
          src="/assets/about-page/history-1.jpg"
          sizes="100vw"
          fill
          priority
          alt="History 1"
        />
      </div>

      {/* 2 */}
      <div className="relative">
        <Image
          src="/assets/about-page/history-2.jpg"
          sizes="100vw"
          fill
          priority
          alt="History 2"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-4 p-8">
        <FaMountainCity size={42} />
        <h2 className="text-4xl font-bold">Our History</h2>
        <p className="text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit Exercitation
          veniam consequat.
        </p>
      </div>
    </div>
  );
}
