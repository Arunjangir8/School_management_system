import UserCard from "@/components/UserCard"
import CountCharts from "@/components/CountCharts"
import AttendanceChart from "@/components/AttendanceChart"
const AdminPage = () => {
  return (
    <div>
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* Left  */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Student" />
            <UserCard type="Teacher" />
            <UserCard type="Parent" />
            <UserCard type="Staff" />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]"><CountCharts/></div>
            <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChart/></div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/3">r</div>

      </div>
    </div>
  )
}

export default AdminPage
