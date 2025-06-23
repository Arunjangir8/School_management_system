import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] p-4 top-0 left-0 static overflow-y-scroll ">
        <Link href="/" className="flex justify-center items-center lg:justify-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 40"
            className="w-6 h-6 text-zinc-950"
            aria-hidden
          >
            <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
            </mask>
            <g fill="currentColor" mask="url(#a)">
              <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
              <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
            </g>
          </svg>

          <span className="hidden lg:block font-bold">FunSchool</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>

  );
}