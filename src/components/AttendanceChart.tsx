"use client"

import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

type AttendanceData = {
    name: string;
    present: number;
    absents: number;
}[];

const AttendanceChart = ({ data }: { data: AttendanceData }) => {
    return (
        <div className="relative w-full h-[90%]">
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
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                        formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                    />

                    <Bar
                        dataKey="absents"
                        fill="#FAD4D4" 
                        activeBar={<Rectangle fill="#FAD4D4" />}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                        barSize={20}
                    />
                    <Bar
                        dataKey="present"
                        fill="#D3F8E2" 
                        activeBar={<Rectangle fill="#D3F8E2" />}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
