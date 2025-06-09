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

    <div className="h-screen flex ">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] p-4 top-0 left-0 static overflow-y-scroll ">
        <Link href="/" className="flex justify-center items-center lg:justify-start gap-2 ">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">FunSchool</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] bg-[#f7f8fa] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>

  );
}