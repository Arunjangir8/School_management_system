import Image from "next/image"
import EventList from "./EventList"
import EventCalender from "./EventCalender"

async function EventCalenderContainor({searchParams}:{ searchParams: { [key: string]: string |  undefined } }) {
    const {date} = searchParams;
  return (
    <div className='bg-white p-4 rounded-md'>    
                <EventCalender/>  
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold my-4 mx-4'>Events</h1>
                    <Image className='my-4 mx-4' src={"/moreDark.png"} alt='' width={20} height={20}/>
                </div>
                <div className='flex flex-col gap-4'>
                    <EventList dateParam={date}/>
                </div>
    </div>
  )
}

export default EventCalenderContainor
