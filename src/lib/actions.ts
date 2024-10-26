"use server";

import {
  ClassSchema,
  ExamSchema,
  StudentSchema,
  SubjectSchema,
  TeacherSchema,
} from "./formValidationSchemas";
import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

type FormState = {
  success: boolean;
  error: boolean;
};
// type CurrentState = {
//   success: boolean;
//   error: boolean;
// };

export const createSubject = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  data: SubjectSchema
): Promise<FormState> => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  // currentState: CurrentState,
  prevState: FormState,
  data: SubjectSchema
): Promise<FormState> => {
  try {
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    return { success: false, error: true };
  }
  try {
    // Hapus semua Lesson terkait terlebih dahulu
    await prisma.lesson.deleteMany({
      where: {
        subjectId: Number(id),
      },
    });

    // Kemudian hapus Subject
    await prisma.subject.delete({
      where: {
        id: Number(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (error) {
    console.log(error, "error");
    return { success: false, error: true };
  }
};

export const createClass = async (
  prevState: FormState,
  // currentState: { success: boolean; error: boolean },
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data,
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const updateClass = async (
  // currentState: CurrentState,
  prevState: FormState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data,
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteClass = async (
  currentState: { success: boolean; error: boolean },
  // prevState: { success: boolean; error: boolean },
  data: FormData
) => {
  const id = data.get("id");
  if (!id || typeof id !== "string") {
    return { success: false, error: true };
  }
  try {
    // Kemudian hapus class
    // await clerkClient.users.deleteUser(id);

    await prisma.class.delete({
      where: {
        id: Number(id),
      },
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (error) {
    console.log(error, "error");
    return { success: false, error: true };
  }
};

export const createTeacher = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  data: TeacherSchema
): Promise<FormState> => {
  try {
    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
    });
    await prisma.teacher.create({
      data: {
        id: user.id,
        name: data.name,
        surname: data.surname,
        username: data.username,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          connect: data.subject?.map((subjectId: string) => ({
            id: parseInt(subjectId),
          })),
        },
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const updateTeacher = async (
  // currentState: CurrentState,
  prevState: FormState,
  data: TeacherSchema
): Promise<FormState> => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const user = await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    });
    await prisma.teacher.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: data.password }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          set: data.subject?.map((subjectId: string) => ({
            id: parseInt(subjectId),
          })),
        },
      },
    });
    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteTeacher = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    return { success: false, error: true };
  }
  try {
    // Kemudian hapus class
    await clerkClient.users.deleteUser(id);

    await prisma.teacher.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (error) {
    console.log(error, "error");
    return { success: false, error: true };
  }
};

export const createStudent = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  data: StudentSchema
): Promise<FormState> => {
  try {
    const classItem = await prisma.class.findUnique({
      where: {
        id: data.classId,
      },
      include: {
        _count: {
          select: {
            students: true,
          },
        },
      },
    });
    if (classItem && classItem.capacity === classItem._count.students) {
      return { success: false, error: true };
    }
    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
    });
    await prisma.student.create({
      data: {
        id: user.id,
        name: data.name,
        surname: data.surname,
        username: data.username,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const updateStudent = async (
  // currentState: CurrentState,
  prevState: FormState,
  data: StudentSchema
): Promise<FormState> => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const user = await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    });
    await prisma.student.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: data.password }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
      },
    });
    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteStudent = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    return { success: false, error: true };
  }
  try {
    // Kemudian hapus class
    await clerkClient.users.deleteUser(id);
    await prisma.student.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (error) {
    console.log(error, "error");
    return { success: false, error: true };
  }
};

export const createExam = async (
  // currentState: { success: boolean; error: boolean },
  prevState: FormState,
  data: ExamSchema
): Promise<FormState> => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    if (role === "teacher") {
      const teacherLesson = await prisma.lesson.findFirst({
        where: {
          teacherId: userId!,
          id: data.lessonId,
        },
      });
      if (!teacherLesson) {
        return {
          success: false,
          error: true,
        };
      }
    }
    await prisma.exam.create({
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const updateExam = async (
  // currentState: CurrentState,
  prevState: FormState,
  data: ExamSchema
): Promise<FormState> => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // if (role === "teacher") {
    //   const teacherLesson = await prisma.lesson.findFirst({
    //     where: {
    //       teacherId: userId!,
    //       id: data.lessonId,
    //     },
    //   });
    //   if (!teacherLesson) {
    //     return {
    //       success: false,
    //       error: true,
    //       message: "You are not allowed to create exam for this lesson!",
    //     };
    //   }
    // }
    await prisma.exam.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteExam = async (
  // currentState: { succes: boolean; error: boolean },
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const id = formData.get("id");

  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;
  try {
    // Hapus semua Lesson terkait terlebih dahulu
    await prisma.exam.delete({
      where: {
        id: Number(id),
        // ...(role === "teacher" ? { lesson: { teacherId: userId! } } : {}),
      },
    });
    // Kemudian hapus Subject

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (error) {
    console.log(error, "error");
    return { success: false, error: true };
  }
};
