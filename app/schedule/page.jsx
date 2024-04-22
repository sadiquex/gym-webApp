"use client";

import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import scheduleData from "./scheduleData";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function SchedulePage() {
  const { scheduleActivities } = scheduleData;
  const [selectedDay, setSelectedDay] = useState("Monday");

  const selectedActivities = scheduleActivities[selectedDay]?.activities || [];

  return (
    <div>
      <PageHeader pageTitle={"Schedules By Day"} />

      <div className="max-w-[1000px] mx-auto py-8 px-4 md:px-0 space-y-4">
        {/* the tab titles (Days) */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
          {Object.keys(scheduleActivities).map((day, i) => (
            <button
              className={`font-bold rounded-full flex items-center justify-center border-2 bg-transparent text-black hover:bg-primaryColor hover:text-white py-3 px-8 cursor-pointer transition-all duration-300 ${
                selectedDay === day ? "text-red-400 bg-red-600 border-none" : ""
              }`}
              onClick={() => setSelectedDay(day)}
              key={i}
            >
              {day}
            </button>
          ))}
        </div>

        {/* display activities for selected day */}
        <div className="flex flex-col gap-2">
          {selectedActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-100 py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Class name */}
              <div className="flex flex-col items-center">
                <span>Class Name</span>
                <span className="text-lg font-bold">{activity.name}</span>
              </div>
              {/* Time */}
              <div className="flex flex-col items-center">
                <span>Time</span>
                <span className="text-lg font-bold">{activity.time}</span>
              </div>
              {/* Trainer */}
              <div className="flex flex-col items-center">
                <span>Trainer</span>
                <span className="text-lg font-bold">{activity.trainer}</span>
              </div>
              {/* Button */}
              <Link href={"/contact"}>
                <Button
                  otherStyles={"font-bold text-white px-4 rounded-full mx-auto"}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
