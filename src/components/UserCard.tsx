import prisma from "@/lib/prisma"
import Image from "next/image"
const UserCard=async({type}:{type:"admin" | "teacher" | "student" | "parent"}) =>{
  const modelMap : Record<typeof type , any> = {
    admin : prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  }
   const data = await modelMap[type].count() 

  return (
    <div className="rounded-2xl odd:bg-LamaPurple even:bg-LamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 bg-white rounded-full text-green-600">2025/26</span>
        <Image src={"/more.png"} alt="" width={20} height={20}/>
      </div>
      <div>
        <h2 className="text-2xl font-semibold my-4 ">{data}</h2>
        <h2 className="text-sm font-medium text-gray-500 capitalize">{type} </h2>
      </div>
    </div>
  )
}

export default UserCard
