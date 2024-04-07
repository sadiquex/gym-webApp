import Image from "next/image";
import PaintBrushBg from "../ui/PaintBrushBg";

export default function Gallery() {
  return (
    <div className="max-w-[1000px] mx-auto py-8 flex flex-col gap-2 ">
      <PaintBrushBg>OUR GALLERY</PaintBrushBg>
      <h2 className="text-3xl font-bold text-center ">Our Workplace Gallery</h2>
      <p className="text-md text-darkAsh md:w-1/2 text-center mx-auto">
        Our Workplace Gallery features modern office, team collaboration, and
        fun culture. Attracts talents and showcases company's work atmosphere.
      </p>
      {/* gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 w-full min-h-[1200px] md:min-h-[500px]">
        <div className="col-span-2 md:row-span-2 relative">
          <Image
            alt="gallery-img-1"
            fill
            priority
            src="/assets/homepage/gallery/gallery-img-1.jpg"
            sizes="100vw"
          />
        </div>
        <div className="col-span-2 row-span-1 relative">
          <Image
            alt="gallery-img-2"
            fill
            priority
            src="/assets/homepage/gallery/gallery-img-2.jpg"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-2 md:row-span-2 relative">
          <Image
            alt="gallery-img-1"
            fill
            priority
            sizes="100vw"
            src="/assets/homepage/gallery/gallery-img-3.jpg"
          />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <Image
            alt="gallery-img-1"
            fill
            priority
            sizes="100vw"
            src="/assets/homepage/gallery/gallery-img-4.jpg"
          />
        </div>
        {/* not showing on mobile */}
        <div className="col-span-1 row-span-2 md:row-span-1 relative">
          <Image
            alt="gallery-img-5"
            priority
            sizes="100vw"
            src="/assets/homepage/gallery/gallery-img-5.jpg"
            fill
          />
        </div>
      </div>
    </div>
  );
}
