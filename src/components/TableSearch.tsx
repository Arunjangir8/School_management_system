import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center text-xs gap-2 rounded-full ring-[1.5px] ring-grey-300 px-2">
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
    </div>
  )
}

export default TableSearch