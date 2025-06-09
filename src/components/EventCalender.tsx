"use client"
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    time: '2025-06-10T10:30:00Z',
    title: 'Product Launch Webinar',
    description: 'Join us for the exclusive unveiling of our latest product with live demos and Q&A sessions.',
  },
  {
    id: 2,
    time: '2025-06-15T14:00:00Z',
    title: 'Tech Talk',
    description: 'A discussion on the role of AI tools in enhancing modern web development workflows.',
  },
  {
    id: 3,
    time: '2025-06-20T18:45:00Z',
    title: 'Community Networking',
    description: 'An online meetup for developers, designers, and tech enthusiasts to connect and share ideas.',
  },
];

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />        
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold my-4 mx-4'>Events</h1>
                    <Image className='my-4 mx-4' src={"/moreDark.png"} alt='' width={20} height={20}/>
                </div>
                <div className='flex flex-col gap-4'>
                {events.map((event)=>(
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-LamaPurple even:border-t-LamaSky' key={event.id}>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <span className='text-gray-300 text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalender
