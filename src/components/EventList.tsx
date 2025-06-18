import prisma from "@/lib/prisma";

async function EventList({ dateParam }: { dateParam: string | undefined }) {
    const date = dateParam ? new Date(dateParam) : new Date();
    const data = await prisma.event.findMany({
        where: {
            startTime: {
                gte: new Date(date.setHours(0, 0, 0, 0)),
                lt: new Date(date.setHours(23, 59, 59, 999))
            }
        }
    })
    return data.map((event) => (
        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-LamaPurple even:border-t-LamaSky' key={event.id}>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                <span className='text-gray-300 text-xs'>
                    {new Date(event.startTime).toLocaleTimeString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </span>

            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
        </div>
    ))
}

export default EventList
