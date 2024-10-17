"use client";
import { count } from "console";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 90,
    fill: "white",
  },
  {
    name: "Laki-laki",
    count: 50,
    fill: "#C3EBFA",
  },
  {
    name: "Perempuan",
    count: 40,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-color1 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-color5 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Boys (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
