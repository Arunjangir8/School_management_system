
import EventCalender from "@/components/EventCalender"
import Announcements from "@/components/Announcements"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BigCalenderContainor from "@/components/BigCalenderContainor";
import prisma from "@/lib/prisma";


const StudentPage = async () => {
  const user = await currentUser();
  const classItem = await prisma.class.findMany({
    where:{
      students:{
        some :{
          id : user?.id
        }
      }
    }
  })
  const role = (user?.publicMetadata as { role?: string })?.role;
  if (role !== "student") {
    redirect(`/${role}`);
  }
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full xl:w-2/3 flex flex-col gap-10">
        <div className="lg:h-full h-[800px] bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalenderContainor type="classId" id={classItem[0]?.id}/>
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage
