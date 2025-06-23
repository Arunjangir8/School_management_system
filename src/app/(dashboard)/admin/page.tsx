import UserCard from "@/components/UserCard"
import FinanceChart from "@/components/FinanceChart"
import Announcements from "@/components/Announcements"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import CountChartContainor from "@/components/CountChartContainor"
import AttendanceChartContainor from "@/components/AttendanceChartContainor"
import EventCalenderContainor from "@/components/EventCalenderContainor"
const AdminPage =async ({searchParams}:{ searchParams: { [key: string]: string |  undefined } }) => {
   const user =  await currentUser();
   const role = (user?.publicMetadata as { role?: string })?.role;
   if (role !== "admin") {
    redirect(`/${role}`);
  }
  return (
    
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* Left  */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]"><CountChartContainor /></div>
            <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChartContainor /></div>
          </div>
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="admin" />
            <UserCard type="teacher" />
            <UserCard type="student" />
            <UserCard type="parent" />
          </div>      
          <div className="w-full h-[550px]"><FinanceChart /></div>
        </div>
        {/* Right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <EventCalenderContainor searchParams={searchParams}/>
          <Announcements/>
        </div>

      </div>
    
  )
}

export default AdminPage
