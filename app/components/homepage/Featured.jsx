import FeaturedGrid from "./FeaturedGrid";
import PaintBrushBg from "../ui/PaintBrushBg";

export default function Featured() {
  return (
    <div className="max-w-[1000px] mx-auto py-8 flex flex-col gap-2 items-center justify-center">
      <PaintBrushBg>OUR FEATURED CLASS</PaintBrushBg>
      <h2 className="text-3xl font-bold text-center ">
        We Are Offering Best Flexible Classes
      </h2>
      <FeaturedGrid />
    </div>
  );
}
