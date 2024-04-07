import PricingCard from "./PricingCard";
import PaintBrushBg from "../ui/PaintBrushBg";

export default function Pricing() {
  // plans in the gym
  const pricingDetails = [
    {
      planName: "Beginner",
      price: "39",
      planImage: "/assets/homepage/gym-plans/beginner-plan.jpg",
      planServices: [
        "Free Hand",
        "Gym Fitness",
        "Weight Loss",
        "Personal Trainer",
        "Cycling",
      ],
    },
    {
      planName: "Standard",
      price: "49",
      planImage: "/assets/homepage/gym-plans/standard-plan.jpg",
      planServices: [
        "Free Hand",
        "Gym Fitness",
        "Weight Loss",
        "Personal Trainer",
        "Cycling",
      ],
    },
    {
      planName: "Expert",
      price: "79",
      planImage: "/assets/homepage/gym-plans/expert-plan.jpg",
      planServices: [
        "Free Hand",
        "Gym Fitness",
        "Weight Loss",
        "Personal Trainer",
        "Cycling",
      ],
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto py-8 flex flex-col gap-2 ">
      <PaintBrushBg>PRICING CHART</PaintBrushBg>
      <h2 className="text-3xl font-bold text-center ">
        Exclusive Pricing Plan
      </h2>
      <p className="text-md text-darkAsh md:w-1/2 text-center mx-auto">
        Gymat an unknown printer took a galley of type and scrambled make a type
        specimen book.
      </p>
      {/* pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[450px]">
        {pricingDetails.map((plan, i) => (
          <PricingCard plan={plan} key={i} />
        ))}
      </div>
    </div>
  );
}
