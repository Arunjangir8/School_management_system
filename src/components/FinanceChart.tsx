"use client"
import Image from "next/image"
import { experimental_useEffectEvent } from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 10230, expence: 8540, amt: 9200 },
  { name: 'Feb', income: 9880, expence: 11200, amt: 8700 },
  { name: 'Mar', income: 11000, expence: 10250, amt: 8300 },
  { name: 'Apr', income: 8700, expence: 9050, amt: 7999 },
  { name: 'May', income: 12040, expence: 8999, amt: 8990 },
  { name: 'Jun', income: 9300, expence: 8100, amt: 8450 },
  { name: 'Jul', income: 10090, expence: 8800, amt: 8900 },
  { name: 'Aug', income: 9500, expence: 8700, amt: 9500 },
  { name: 'Sep', income: 10320, expence: 9600, amt: 9100 },
  { name: 'Oct', income: 11230, expence: 8900, amt: 8200 },
  { name: 'Nov', income: 10880, expence: 8700, amt: 8700 },
  { name: 'Dec', income: 11800, expence: 9600, amt: 8600 },
];


const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl h-full w-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold '>Finance</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20} />
            </div>
            <div className="w-full h-[95%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10}/>
                        <YAxis axisLine={false} tickMargin={10} tickLine={false}/>
                        <Tooltip />
                        <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop : "20px", paddingBottom : "40px"}}/>
                        <Line type="monotone" dataKey="expence" stroke="#C3EBFA" strokeWidth={5}/>
                        <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={5}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart
