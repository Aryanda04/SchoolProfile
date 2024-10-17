"use client";

import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus suscipit explicabo soluta,",
  },
  {
    id: 3,
    title: "Event 2",
    time: "10:00 AM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus suscipit explicabo soluta,",
  },
  {
    id: 3,
    title: "Event 3",
    time: "10:00 AM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus suscipit explicabo soluta,",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-xl p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-color1 even:border-t-color3"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
