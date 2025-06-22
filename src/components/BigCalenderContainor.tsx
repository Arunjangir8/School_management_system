import prisma from "@/lib/prisma"
import BigCalender from "./BigCalender";

async function BigCalenderContainor({type,id}:{type : "teacherId" | "classId" , id : string | number}) {
    const dataRes = await prisma.lesson.findMany({
        where:{
            ...(type === "teacherId" ? { teacherId: id as string } : { classId: id as number})
        }
    })
    const data = dataRes.map((item) => ({
        title: item.name,
        start: new Date(item.startTime),
        end: new Date(item.endTime),
    }));
  return (
    
      <BigCalender data={data}/>
    
  )
}

export default BigCalenderContainor