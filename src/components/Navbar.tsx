import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center text-xs gap-2 rounded-full ring-[1.5px] ring-grey-300 px-2">
        <Image src={"/search.png"} alt="" width={14} height={14} />
        <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
      </div>
      {/* user and icon */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center bg-red-500 text-white text-xs rounded-full">1</div>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs leading-3 font-medium">Arun Suthar</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image className="rounded-full" src={"/avatar.png"} alt="" width={36} height={36}/>
      </div>
    </div>
  )
}
export default Navbar