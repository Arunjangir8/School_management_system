
import EventCalender from "@/components/EventCalender"
import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalender"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { role } from "@/lib/utlities";


const StudentPage = async () => {
  if (role !== "student") {
    redirect(`/${role}`);
  }
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full xl:w-2/3 flex flex-col gap-10">
        <div className="lg:h-full h-[800px] bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
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
