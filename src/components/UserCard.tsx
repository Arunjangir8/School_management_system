import prisma from "@/lib/prisma"
import Image from "next/image"

const UserCard = async ({ type }: { type: "admin" | "teacher" | "student" | "parent" }) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  }

  const data = await modelMap[type].count()

  // Inline background colors based on type for variety
  const bgColorMap: Record<typeof type, string> = {
    admin: "#EDE9FE",    // light purple
    teacher: "#FEF9C3",  // light yellow
    student: "#DBEAFE",  // light blue
    parent: "#DCFCE7",   // light green
  }

  return (
    <div
      className="rounded-xl shadow-sm p-4 flex flex-col justify-between flex-1 transition-all hover:shadow-md"
      style={{ backgroundColor: bgColorMap[type] }}
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-[2px] bg-white rounded-full text-green-600 font-medium">
          2025/26
        </span>
        <Image src="/more.png" alt="More" width={16} height={16} />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">{data}</h2>
        <p className="text-xs font-medium text-gray-600 capitalize mt-1">{type}</p>
      </div>
    </div>
  )
}

export default UserCard
