"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

export default function CalculateBMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [weightStatus, setWeightStatus] = useState("");

  const handleCalculateBMI = () => {
    // convert weight and height to numbers
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    // check if weight and height are valid numbers
    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue !== 0) {
      // calculate BMI
      const bmi = (weightValue / (heightValue * heightValue)).toFixed(4);

      //   update bmi state value
      setBmiValue(bmi);
      if (bmi < 18.5) {
        setWeightStatus("Underweight");
      } else if (bmi > 18.5 && bmi < 25) {
        setWeightStatus("Normal weight");
      } else if (bmi > 25 && bmi < 29.9) {
        setWeightStatus("Overweight");
      } else {
        setWeightStatus("Obese");
      }
    } else {
      console.error("Invalid input for weight or height");
      return null;
    }
  };

  return (
    <div className="max-w-[1000px] p-4 md:p-0 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 bg-darkAsh">
      <div className="flex flex-col gap-4 md:p-8">
        <h3 className="text-2xl whitespace-nowrap md:text-4xl font-semibold text-white text-center md:text-left">
          Let's Calculate Your <span className="text-[#ff0336]">BMI</span>
        </h3>
        <p className="text-lg text-center md:text-left text-white">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        {/* inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            className="p-2 bg-transparent text-white border border-white outline-none"
            placeholder="Weight (in kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            className="p-2 bg-transparent text-white border border-white outline-none"
            placeholder="Height (in m)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <Button
          onClick={handleCalculateBMI}
          textColor={"white"}
          otherStyles="display-inline font-bold bg-[#8a8a8a]"
        >
          CALCULATE
        </Button>

        {/* results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="font-medium text-white whitespace-nowrap">
            Your BMI is: <span className="font-extrabold">{bmiValue}</span>
          </p>

          <p className="font-medium text-white whitespace-nowrap">
            Your Weight is:{" "}
            <span className="font-extrabold">{weightStatus}</span>
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="bmi"
          fill
          priority
          src="/assets/homepage/bmi-image.jpeg"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
