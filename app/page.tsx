
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

import { navItems } from "@/data";
import Report from "@/components/Report";
import Clients from "@/components/Clients";
import Exprience from "@/components/Exprience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='relative text-white overflow-clip bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5'>
      <div className=" max-w-7xl w-full">
        <FloatingNavbar
          navItems={
            navItems
          } />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Exprience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
