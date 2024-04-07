import Image from "next/image";
import Button from "../ui/Button";

export default function PricingCard({ plan }) {
  const { planName, price, planServices, planImage } = plan;

  return (
    <div className="relative flex flex-col shadow-md">
      <Image
        src={planImage}
        sizes="100vw"
        height={300}
        width={300}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
        alt={planName}
      />
      <div className="px-12">
        <div className="-mt-10 bg-white w-full flex flex-col gap-4 py-2 pb-6 items-center">
          <h3 className="font-semibold text-xl mb-4">{planName}</h3>
          <div className="flex gap-2 text-2xl">
            <span>$</span>
            <h1 className="font-extrabold text-6xl">{price}</h1>
            <span>p/m</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            {planServices.map((service, i) => (
              <p key={i}>{service}</p>
            ))}
          </div>
          <Button textColor="white" otherStyles="font-bold">
            PURCHASE NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
