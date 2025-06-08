"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 67,
        fill: '#C3EBFA',
    },
    {
        name: 'Girls',
        count: 34,
        fill: '#FAE27C',
    }
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountCharts = () => {
    return (
        <div className='bg-white rounded-xl h-full w-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold '>Student</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20} />
            </div>
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={28} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src={"/maleFemale.png"} alt='' width={48} height={48} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='h-5 w-5 rounded-full bg-LamaSky' />
                    <h1 className='font-bold'>1,456</h1>
                    <h2 className='text-gray-300 text-xs'>Boys (63% )</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='h-5 w-5 rounded-full bg-LamaYellow' />
                    <h1 className='font-bold'>1,456</h1>
                    <h2 className='text-gray-300 text-xs'>Girl (37% )</h2>
                </div>
            </div>
        </div>
    )
}

export default CountCharts