"use client"
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];



const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
    const router = useRouter();
    useEffect(()=>{
      if (value instanceof Date) {
        router.push(`?date=${value}`)
      }
    },[value,router])
    return   <Calendar onChange={onChange} value={value} />        
}

export default EventCalender
