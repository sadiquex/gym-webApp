export default function FeaturedGrid() {
  return (
    <div className="w-full min-h-[600px] p-4 md:p-0 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* long */}
      <div
        className="relative h-[300px] md:h-auto md:col-span-2 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/cycling.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Cycling</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Wednesday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* short */}
      <div
        className="relative h-[300px] md:h-auto col-span-1 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/karate.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Karate</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Friday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* short */}
      <div
        className="relative h-[300px] md:h-auto col-span-1 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/power.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Power</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Friday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* short */}
      <div
        className="relative h-[300px] md:h-auto col-span-1 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/meditation.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Meditation</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Friday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* short */}
      <div
        className="relative h-[300px] md:h-auto col-span-1 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/martial-arts.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Martial Arts</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Friday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* long */}
      <div
        className="relative h-[300px] md:h-auto md:col-span-2 grayscale cursor-pointer"
        style={{
          backgroundImage: `url('/assets/homepage/featured/workout-featured.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 bottom-6 left-1">
          <p className="text-white text-[2.4rem] font-bold">Workout</p>
          <p className="text-white bg-[#FF0336] text-[16px] py-1 px-5 whitespace-nowrap">
            Friday: 9:00am-10:00am
          </p>
        </div>
      </div>
    </div>
  );
}
