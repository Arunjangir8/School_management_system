"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 40,
        absents: 24,
  
    },
    {
        name: 'Tus',
        present: 30,
        absents: 18,
    },
    {
        name: 'Wed',
        present: 20,
        absents: 29,
    },
    {
        name: 'Thues',
        present: 27,
        absents: 38,
    },
    {
        name: 'Fri',
        present: 10,
        absents: 48,
    },
   
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-xl h-full w-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold '>Attendance</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20} />
            </div>
            <div className='relative w-full h-[90%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis  axisLine={false}/>
                        <Tooltip />
                        <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop : "20px", paddingBottom : "40px"}}/>
                        <Bar dataKey="absents" fill="#C3EBFA" activeBar={<Rectangle fill="#C3EBFA"  />} legendType='circle' radius={[10,10,0,0]} barSize={20}/>
                        <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="#FAE27C"  />} legendType='circle' radius={[10,10,0,0]} barSize={20}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart