"use client" 
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AttendanceChart = ({ data }: { data: { name: string; present: number; absents: number }[] }) => {
    
    return (
        
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
    )
}

export default AttendanceChart