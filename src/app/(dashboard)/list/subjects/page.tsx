
import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Parent, Prisma, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";
import {role} from "@/lib/utlities";

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];
type SubjectList = Parent & { teachers: Teacher[] };

const renderRow = (item: SubjectList) => (
    <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
        <td className="flex items-center gap-4 p-4">{item.name}</td>
        <td className="hidden md:table-cell">
            {item.teachers.map((teacher) => teacher.name).join(",")}
        </td>
        <div className="flex items-center gap-2">
                <>
                    <FormModel table="subject" type="update" data={item} />
                    <FormModel table="subject" type="delete" id={item.id} />
                </>
        </div>
    </tr>
);

const SubjectListPage = async ({ searchParams, }: { searchParams: { [key: string]: string | undefined } }) => {
    if (role !== "admin") {
        redirect(`/${role}`);
    }
    const { page, ...queryParams } = searchParams;
    const p = page ? parseInt(page) : 1;

    const query: Prisma.SubjectWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "search":
                        query.name = { contains: value, mode: "insensitive" };
                        break;
                    default:
                        break;
                }
            }
        }
    }

    const [data, count] = await prisma.$transaction([
        prisma.subject.findMany({
            where: query,
            include: {
                teachers: true
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
        }),
        prisma.subject.count({ where: query }),
    ]);

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-LamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-LamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        <FormModel table="teacher" type="create" />
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={data} />
            <Pagination page={p} count={count} />
        </div>
    );
};

export default SubjectListPage;