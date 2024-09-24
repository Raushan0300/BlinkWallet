import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <div>
      
      <div className="w-full h-[70px] bg-[#3D3D5C] px-5"> 
      <img src="/logo.png" alt="logo"  className="h-20 w-20 "/>
    </div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Link href="/login" className={buttonVariants({ variant: "outline" })}>Go to Login Page</Link>
    </div>
    </div>
  );
}
