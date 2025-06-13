"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const TableSearch = () => {
  const router = useRouter()
  const handelSubmit = (e:React.FormEvent<HTMLFormElement >) =>{
    e.preventDefault()
    const value = (e.currentTarget[0] as HTMLInputElement).value; 
    const params = new URLSearchParams(window.location.search )
    params.set("search",value.toString())
    router.push(`${window.location.pathname}?${params }`)
  }
  return (
    <form onSubmit={handelSubmit} className="w-full md:w-auto flex items-center text-xs gap-2 rounded-full ring-[1.5px] ring-grey-300 px-2">
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
    </form>
  )
}

export default TableSearch