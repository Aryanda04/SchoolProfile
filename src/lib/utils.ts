// import { auth } from "@clerk/nextjs/server";
import { auth, getAuth } from "@clerk/nextjs/server";

// const { userId, sessionClaims } = auth();

// export const role = (sessionClaims?.metadata as { role: string })?.role;
// export const currentUserId = userId;

const currentWorkWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const startOfWeek = new Date(today);
  if (dayOfWeek === 0) {
    startOfWeek.setDate(today.getDate() - 6);
  }
  if (dayOfWeek === 6) {
    startOfWeek.setDate(today.getDate() + 2);
  } else {
    startOfWeek.setDate(today.getDate() - (dayOfWeek - 1));
  }
  startOfWeek.setHours(0, 0, 0, 0);

  return startOfWeek;
};

export const adjustScheduleToCurrentWeek = (
  lessons: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
  const startOfWeek = currentWorkWeek();
  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();

    const dayFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

    const adjustStartDate = new Date(startOfWeek);

    adjustStartDate.setDate(startOfWeek.getDate() + dayFromMonday);
    adjustStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );

    const adjustEndDate = new Date(adjustStartDate);
    adjustEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      title: lesson.title,
      start: adjustStartDate,
      end: adjustEndDate,
    };
  });
};

export default currentWorkWeek;