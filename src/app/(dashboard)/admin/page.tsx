import UserCard from "@/components/UserCard"
import CountCharts from "@/components/CountCharts"
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
import EventCalender from "@/components/EventCalender"
import Announcements from "@/components/Announcements"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { role } from "@/lib/utlities"
const AdminPage =async () => {
   if (role !== "admin") {
    redirect(`/${role}`);
  }
  return (
    
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* Left  */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Student" />
            <UserCard type="Teacher" />
            <UserCard type="Parent" />
            <UserCard type="Staff" />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]"><CountCharts /></div>
            <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChart /></div>
          </div>
          <div className="w-full h-[550px]"><FinanceChart /></div>
        </div>
        {/* Right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <EventCalender />
          <Announcements/>
        </div>

      </div>
    
  )
}

export default AdminPage
