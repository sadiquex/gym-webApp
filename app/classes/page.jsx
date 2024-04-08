"use client";

import { FaArrowRight, FaRegCircleUser } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [visibleCards, setVisibleCards] = useState(6);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Increment the number of visible cards by 3
  };

  const classData = [
    {
      bgImage: "/assets/classes/cycling.jpg",
      name: "Cycling",
      tutor: "Dorian Yate",
      time: "Wed 9:00 am",
    },
    {
      bgImage: "/assets/classes/meditation.jpg",
      name: "Meditation",
      tutor: "Maria Mich",
      time: "Fri 1:00 pm",
    },
    {
      bgImage: "/assets/classes/boxing.jpg",
      name: "Boxing",
      tutor: "John Flex",
      time: "Tue 4:00 am",
    },
    {
      bgImage: "/assets/classes/karate.jpg",
      name: "Karate",
      tutor: "David Rick",
      time: "Sat 9:00 am",
    },
    {
      bgImage: "/assets/classes/power-lifting.jpg",
      name: "Power Lifting",
      tutor: "Larry Wheels",
      time: "Mon 8:00 am",
    },
    {
      bgImage: "/assets/classes/workout.jpg",
      name: "Workout",
      tutor: "Shawn Ray",
      time: "Sun 10:00 am",
    },
    {
      bgImage: "/assets/classes/crossfit.jpg",
      name: "Crossfit",
      tutor: "Jennifer Alex",
      time: "Wed 9:00 am",
    },
    {
      bgImage: "/assets/classes/running.jpg",
      name: "Running",
      tutor: "Zania Sessy",
      time: "Thu 9:00 am",
    },
    {
      bgImage: "/assets/classes/body-building.jpeg",
      name: "Body Building",
      tutor: "Jake Williams",
      time: "Mon 8:00 am",
    },
    {
      bgImage: "/assets/classes/yoga.jpg",
      name: "Yoga",
      tutor: "Mia Malkova",
      time: "Sun 5:00 pm",
    },
  ];

  return (
    <div>
      <PageHeader pageTitle="Classes" />
      <div className="max-w-[1000px] mx-auto py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* show cards from index 0 and end at index (visibleCards - 1) */}
        {classData.slice(0, visibleCards).map((classItem, i) => (
          <div
            key={i}
            className="relative h-[340px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url('${classItem.bgImage}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* card content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-white flex flex-col items-start gap-4">
                <h3 className="text-3xl font-bold">{classItem.name}</h3>
                {/* user and time */}
                <div className="flex gap-2">
                  {/* user */}
                  <span className="flex items-center gap-1">
                    <FaRegCircleUser size={20} /> {classItem.tutor}
                  </span>
                  {/* time */}
                  <span className="flex items-center gap-1">
                    <IoTimeOutline size={20} /> {classItem.time}
                  </span>
                </div>
                <Link href={"/contact"}>
                  <Button
                    bgColor="white"
                    textColor="darkAsh"
                    otherStyles="font-semibold hover:gap-4"
                  >
                    JOIN NOW
                    <FaArrowRight
                      style={{
                        color: "#ff0336",
                        fontSize: "1.4rem",
                      }}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More button */}
      {visibleCards < classData.length && (
        <div className="flex justify-center my-4">
          <Button
            onClick={handleShowMore}
            textColor="white"
            otherStyles="font-bold"
          >
            SHOW MORE
          </Button>
        </div>
      )}
    </div>
  );
}
