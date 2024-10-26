import prisma from "@/lib/prisma";

const StudentAttendanceCard = async ({ id }: { id: string }) => {
  const attendance = await prisma.attendance.findMany({
    where: {
      studentId: id,
      date: {
        gte: new Date(new Date().getFullYear(), 0, 1),
      },
    },
  });

  const totalDays = attendance.length;
  const presentDays = attendance.filter((day) => day.present).length;

  const attendancePercentage = (presentDays / totalDays) * 100;

  //   const { sessionClaims } = auth();
  //   const role = (sessionClaims?.metadata as { role: string })?.role;
  return (
    <div className="">
      <h1 className="text-xl font-semibold">{attendancePercentage || "-"}%</h1>
      <span className="text-sm text-gray-500">Attendance</span>
    </div>
  );
};

export default StudentAttendanceCard;
