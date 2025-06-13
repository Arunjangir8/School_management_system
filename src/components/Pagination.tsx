"use client"
import { ITEM_PER_PAGE } from "@/lib/settings"
import { useRouter } from "next/navigation"

const Pagination =({page,count}:{
  page :  number,
  count : number
})=> {
  const router = useRouter()
  const hasPrev = ITEM_PER_PAGE * (page - 1) >0 ;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count
  const changePage = (newPage : number) =>{
    const params = new URLSearchParams(window.location.search )
    params.set("page",newPage.toString())
    router.push(`${window.location.pathname}?${params }`)
  }
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button disabled={!hasPrev} onClick={()=>changePage(page-1)} className="py-1 px-4 rounded-md bg-slate-200 tex-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({length:Math.ceil(count/ITEM_PER_PAGE )} , (_,index)=>{
          const pageIndex = index+1;
          return (
            <button key={index } className={`px-2 rounded-sm ${ page === pageIndex &&"bg-LamaSky"}`} onClick={()=>changePage(pageIndex)}>{pageIndex}</button>
          )
        })}
      </div>
      <button disabled={!hasNext } onClick={()=>changePage(page+1)} className="py-1 px-4 rounded-md bg-slate-200 tex-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
    </div>
  )
} 
export default Pagination
