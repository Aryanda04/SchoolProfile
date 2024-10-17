"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2020-2021",
    paketA: 30,
    paketB: 50,
    paketC: 100,
  },
  {
    name: "2021-2022",
    paketA: 30,
    paketB: 50,
    paketC: 100,
  },
  {
    name: "2022-2023",
    paketA: 30,
    paketB: 50,
    paketC: 100,
  },
  {
    name: "2023-2024",
    paketA: 33,
    paketB: 55,
    paketC: 120,
  },
  {
    name: "2024-2025",
    paketA: 20,
    paketB: 70,
    paketC: 160,
  },
];

const TotalStudentChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="paketA"
            stroke="#BF2D38"
            strokeWidth={5}
          />

          <Line
            type="monotone"
            dataKey="paketB"
            stroke="#161D4A"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="paketC"
            stroke="#748194"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalStudentChart;
