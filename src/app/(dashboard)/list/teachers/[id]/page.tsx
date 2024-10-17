import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row">
          {/* USERCARD */}
          <div className="bg-color1 py-6 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/user.png"
                width={144}
                height={144}
                alt="user"
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex- flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">John Smith</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "asdasdasda",
                    email: "Asdwdua@gmail.com",
                    password: "asdasdasd",
                    firstName: "aaaaaaaaaa",
                    lastName: "bbbbbbbbbb",
                    phone: "111111111111",
                    address: "jl kemunging",
                    bloodType: "A+",
                    birthday: "1999-12-12",
                    sex: "male",
                    img: "https://images.pexels.com/photos/27199195/pexels-photo-27199195/free-photo-of-portrait-of-man-wearing-purple-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                tempore.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium mt-4">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" width={14} height={14} alt="blood" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" width={14} height={14} alt="blood" />
                  <span>Jan 2026</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" width={14} height={14} alt="blood" />
                  <span>smiththebest@mail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" width={14} height={14} alt="blood" />
                  <span>0888888</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
              <Image
                src="/singleAttendance.png"
                width={24}
                height={24}
                alt="attendance"
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
              <Image
                src="/singleBranch.png"
                width={24}
                height={24}
                alt="attendance"
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
              <Image
                src="/singleLesson.png"
                width={24}
                height={24}
                alt="attendance"
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
              <Image
                src="/singleClass.png"
                width={24}
                height={24}
                alt="attendance"
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-500">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shotcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-color2" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-color4" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-color6" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-color2" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-color4" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
