import Announcements from "@/components/Announcements"
import BigCalenderContainor from "@/components/BigCalenderContainor";
import EventCalender from "@/components/EventCalender";
import EventCalenderContainor from "@/components/EventCalenderContainor";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ParentPage = async ({searchParams}:{ searchParams: { [key: string]: string |  undefined } }) => {
  const user = await currentUser();
  const role = (user?.publicMetadata as { role?: string })?.role;
  if (role !== "parent") {
    redirect(`/${role}`);
  }
  const currentUserId = user?.id;
  const students = await prisma.student.findMany({
    where: {
      parentId: currentUserId!,
    },
  });

  return (
    
    <div className="flex-1 p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full xl:w-2/3 flex flex-col gap-10">
      {students.map((student) => (
        <div className="lg:h-full h-[800px] bg-white p-4 rounded-md" key={student.id}>
          <h1 className="text-xl font-semibold">Schedule ({student.name + " " + student.surname})</h1>
          <BigCalenderContainor type="classId" id={student.classId} />
        </div>
      ))}
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
        <Announcements />
        <EventCalenderContainor searchParams={searchParams}/>
      </div>
    </div>
  )
}

export default ParentPage
