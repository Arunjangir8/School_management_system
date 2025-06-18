import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const Announcements = async () => {
  const user =  await currentUser();
  const role = (user?.publicMetadata as { role?: string })?.role;
  const id = user?.id;
  const roleBased ={
    admin : {},
    teacher : {lessons : {some : {teacherId : id!}}},
    student :{students : {some : {id : id!}}},
    parent : {students : {some : {parentId : id!}}},
  }
  const data = await prisma.announcement.findMany({
    take :3,
    orderBy : {date : 'desc'},
    where :{
      ...(role !=="admin" && {OR :[
        {classId : null} ,{class : roleBased[role as keyof typeof roleBased] || {}}
      ]})
    }
  })
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View all</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {data.map((ann)=>(
                <div className="odd:bg-LamaSkyLight even:bg-LamaPurpleLight p-4 rounded-md" key={ann.id}>
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">{ann.title}</h2>
                        <span className="text-xs rounded-md bg-white text-gray-400 px-1 py-1"> {new Date(ann.date).toLocaleTimeString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{ann.description }</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Announcements
