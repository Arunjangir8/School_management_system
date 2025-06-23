import AttendanceChart from "./AttendanceChart"
import prisma from "@/lib/prisma";
import { FiMoreHorizontal } from "react-icons/fi";

async function AttendanceChartContainor() {
    
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daySinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; 
    const lastMonday = new Date(today);
    lastMonday.setDate(today.getDate() - daySinceMonday);

    const resData = await prisma.attendance.findMany({
        where: {
            date: {
                gte: lastMonday,
            },
        },
        select: {
            date: true,
            present: true, 
        },
    })
    const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
     const attendanceMap : {[key : string] :{present :number , absents:number}} = {
        Mon: { present: 0, absents: 0 },
        Tues: { present: 0, absents: 0 },
        Wed: { present: 0, absents: 0 },
        Thurs: { present: 0, absents: 0 },
        Fri: { present: 0, absents: 0 },
     }
     resData.forEach((attendance) => {
        const date = new Date(attendance.date);
        if (dayOfWeek >= 0 && dayOfWeek <= 5) {
            const dayName = daysOfWeek[dayOfWeek - 1];
            if (attendance.present) {
                attendanceMap[dayName].present += 1;
            }else{
                attendanceMap[dayName].absents += 1;
            }
        }
     });
     const data = daysOfWeek.map((day) => ({
        name: day,
        present: attendanceMap[day].present,
        absents: attendanceMap[day].absents
     }));

  return (
    <div className='bg-white rounded-xl h-full w-full p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-semibold '>Attendance</h1>
                    <FiMoreHorizontal size={32} />
                </div>
                <AttendanceChart data={data}/>
      
    </div>
  )
}

export default AttendanceChartContainor
