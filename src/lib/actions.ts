"use server";

import { revalidatePath } from "next/cache";
import {
  AnnouncementSchema,
  AssignmentSchema,
  AttendanceSchema,
  ClassSchema,
  EventSchema,
  ExamSchema,
  LessonSchema,
  ParentSchema,
  ResultSchema,
  StudentSchema,
  SubjectSchema,
  TeacherSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { error } from "console";

type CurrentState = { success: boolean; error: boolean };

export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
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
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
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
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data,
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateClass = async (
  currentState: CurrentState,
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
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  try {
    const client = await clerkClient()
    const user = await client.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role:"teacher"}
    });
    await prisma.teacher.create({
      data: {
        id: user.id,
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
          connect: data.subjects?.map((subjectId: string) => ({
            id: parseInt(subjectId),
          })),
        },
      },
    }).catch(()=>{
      client.users.deleteUser(user.id);
    })


    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const client = await clerkClient()
    const user = await client.users.updateUser(data.id, {
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
          set: data.subjects?.map((subjectId: string) => ({
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
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const client = await clerkClient()
    await client.users.deleteUser(id);

    await prisma.teacher.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  console.log(data);
  try {
    const classItem = await prisma.class.findUnique({
      where: { id: data.classId },
      include: { _count: { select: { students: true } } },
    });

    if (classItem && classItem.capacity <= classItem._count.students) {
      return { success: false, error: true };
    }
    const client = await clerkClient()

    const user = await client.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role:"student"}
    });

    await prisma.student.create({
      data: {
        id: user.id,
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
    }).catch(()=>{
      client.users.deleteUser(user.id);
    })

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const client = await clerkClient()
    const user = await client.users.updateUser(data.id, {
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
    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteStudent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    const client = await clerkClient()
    await client.users.deleteUser(id);
    await prisma.student.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  try {
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
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  try {
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
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteExam = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.exam.delete({
      where: {
        id: parseInt(id),
      },
    });
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};


export const createParent = async (
  currentState: CurrentState,
  data: ParentSchema
)=>{
  try{
    const client = await clerkClient();
    const user = await client.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role:"parent"}
    })
    await prisma.parent.create({
      data: {
        id: user.id,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
      },
    }).catch(()=>{
      client.users.deleteUser(user.id);
      return { success: false, error: true };
    })
  // revalidatePath("/list/parents");
  return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
}

export const updateParent = async (
  currentState: CurrentState,
  data: ParentSchema
)=>{
  if(!data.id){
    return { success: false, error: true };
  }
  try {
    const client = await clerkClient();
    const user = await client.users.updateUser(data.id ,{
      username : data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    })
    await prisma.parent.update({
      where: {
        id: data.id,
      },
      data: {
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
      },
    });
    // revalidatePath("/list/parents");
    return { success: true, error: false };
  } catch (error) {
    console.log(error)
    return { success: false, error: true };
  }
}

export const deleteParent = async (
  currentState: CurrentState,
  data: FormData
)=>{
  const id = data.get("id") as string;
  try {
    const client = await clerkClient()
    try{
      await client.users.deleteUser(id);
    }catch{

    }
    await prisma.student.deleteMany({
      where: {
        parentId: id,
      },
    });
    await prisma.parent.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/parents");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
}

//Lesson
export const createLesson = async(
  currentState: CurrentState,
  data: LessonSchema
)=>{
  try {
    await prisma.lesson.create({
      data :{
        name : data.name,
        day : data.day,
        startTime : data.startTime,
        endTime : data.endTime,
        subjectId : data.subjectId,
        classId : data.classId,
        teacherId : data.teacherId
      }
    })
    // revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (error) {
    console.log(error)
    return { success: false, error: true };
  }
}
export const updateLesson = async(
  currentState: CurrentState,
  data: LessonSchema
)=>{
  try {
    await prisma.lesson.update({
      where :{
        id : data.id
      },
      data :{
        name : data.name,
        day : data.day,
        startTime : data.startTime,
        endTime : data.endTime,
        subjectId : data.subjectId,
        classId : data.classId,
        teacherId : data.teacherId
      }
    })
    // revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (error) {
    return { success: false, error: true };
  }
}

export const deleteLesson = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.exam.deleteMany({ where: { lessonId: parseInt(id) } });
    await prisma.assignment.deleteMany({ where: { lessonId: parseInt(id) } });
    await prisma.attendance.deleteMany({ where: { lessonId: parseInt(id) } });
    await prisma.lesson.delete({
      where: {
        id: parseInt(id),
      },
    });
    // revalidatePath("/list/lessons");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

//Assignment
export const createAssignment = async (
  currentState: CurrentState,
  data: AssignmentSchema
)=>{
  try {
    await prisma.assignment.create({
      data :{
        title : data.title,
        startDate : data.startDate,
        dueDate : data.dueDate,
        lessonId : data.lessonId
      }
    })
    // revalidatePath("/list/assignments");
    return { success: true, error: false };
  } catch (error) {
    console.log(error)
    return { success: false, error: true };
  }
}

export const updateAssignment = async (
  currentState: CurrentState,
  data: AssignmentSchema
)=>{
  try {
    await prisma.assignment.update({
      where :{
        id : data.id
      },
      data :{
        title : data.title,
        startDate : data.startDate,
        dueDate: data.dueDate,
        lessonId : data.lessonId
      }
    })
     // revalidatePath("/list/assignments");
    return { success: true, error: false };
  } catch (error) {
    console.log(error)
    return { success: false, error: true };
  }
}

export const deleteAssignment = async(
  currentState: CurrentState,
  data: FormData
)=>{
    const id = data.get("id") as string;
    try {
      await prisma.assignment.delete({
        where :{
          id : parseInt(id)
        }
      })
      // revalidatePath("/list/assignments");
      return { success: true, error: false };
    } catch (error) {
      console.log(error);
      return { success: false, error: true };
    }
}

//result

export const createResult = async (
  currentState: CurrentState,
  data: ResultSchema
)=>{
  try {
    await prisma.result.create({
      data :{
        score: data.score,
        studentId: data.studentId,
        ...(data.examId && { examId: data.examId }),
        ...(data.assignmentId && { assignmentId: data.assignmentId }),
      }
    })
    // revalidatePath("/list/results");
    return { success: true, error: false };
  } catch (error) {
    return { success: false, error: true };
  }
}

export const updateResult = async (
  currentState: CurrentState,
  data: ResultSchema
)=>{
  try {
    await prisma.result.update({
      where :{
        id : data.id
      },
      data :{
        score: data.score,
        studentId: data.studentId,
        ...(data.examId && { examId: data.examId }),
        ...(data.assignmentId && { assignmentId: data.assignmentId }),
      }
    })
    // revalidatePath("/list/results");
    return { success: true, error: false };
  } catch (error) {
    return { success: false, error: true };
  }
}

export const deleteResult = async (
  currentState: CurrentState,
  data: FormData
)=>{
  const id = data.get("id") as string;
  try {
    await prisma.result.delete({
      where :{
        id : parseInt(id),
      }
    })
    // revalidatePath("/list/results");
    return { success: true, error: false };
  } catch (error) {
    console.log(error)
    return { success: false, error: true };
  }
}

//Attendance

export const createAttendance = async (
  currentState: CurrentState,
  data: AttendanceSchema
) => {
  try {
    await prisma.attendance.create({
      data: {
        date: data.date,
        present: data.present,
        studentId: data.studentId,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/attendance");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateAttendance = async (
  currentState: CurrentState,
  data: AttendanceSchema
) => {
  try {
    await prisma.attendance.update({
      where: {
        id: data.id,
      },
      data: {
        date: data.date,
        present: data.present,
        studentId: data.studentId,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/attendance");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteAttendance = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.attendance.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/attendance");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
}

//Events

export const createEvent = async (
  currentState: CurrentState,
  data: EventSchema
)=>{
  try {
    await prisma.event.create({
      data :{
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId || null,
      }
    })
    // revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
}

export const updateEvent = async (
  currentState: CurrentState,
  data: EventSchema
)=>{
  try {
    await prisma.event.update({
      where : {
        id : data.id
      },
      data :{
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId || null,
      }
    })
    // revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
}

export const deleteEvent = async (
  currentState: CurrentState,
  data: FormData
)=>{
  const id = data.get("id") as string;
  try {
    await prisma.event.delete({
      where :{
        id : parseInt(id)
      }
    })
    // revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
}

//Announcement

export const createAnnouncement = async (
  currentState: CurrentState,
  data: AnnouncementSchema
) => {
  try {
    await prisma.announcement.create({
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        classId: data.classId || null,
      },
    });

    // revalidatePath("/list/announcements");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateAnnouncement = async (
  currentState: CurrentState,
  data: AnnouncementSchema
) => {
  try {
    await prisma.announcement.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        classId: data.classId || null,
      },
    });

    // revalidatePath("/list/announcements");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};


export const deleteAnnouncement = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.announcement.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/announcements");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};