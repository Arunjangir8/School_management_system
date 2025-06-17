import Image from 'next/image';
import CountCharts from './CountCharts';
import prisma from '@/lib/prisma';

async function CountChartContainor() {
    const data = await prisma.student.groupBy({
        by : ["sex"],
        _count : true
    })
    
    const boys = data.find(item => item.sex === "MALE")?._count || 0;
    const girls = data.find(item => item.sex === "FEMALE")?._count || 0;

  return (
    <div className='bg-white rounded-xl h-full w-full p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-semibold '>Student</h1>
                    <Image src={"/moreDark.png"} alt='' width={20} height={20} />
                </div>
                <CountCharts boys={boys} girls={girls}/>
    <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='h-5 w-5 rounded-full bg-LamaSky' />
                    <h1 className='font-bold'>{boys}</h1>
                    <h2 className='text-gray-300 text-xs'>Boys ({boys*100/(girls+boys)}%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='h-5 w-5 rounded-full bg-LamaYellow' />
                    <h1 className='font-bold'>{girls}</h1>
                    <h2 className='text-gray-300 text-xs'>Girl ({boys*100/(girls+boys)}%)</h2>
                </div>
            </div>
        </div>
  )
} 

export default CountChartContainor
