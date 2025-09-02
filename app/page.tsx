"use client";
//using client just for the circle stuff

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Slideshow from "./components/slideshow";

import { motion } from "framer-motion";

// import SVGAnimation from '@/app/components/svgAnimation1';

export default function Home() {
  return (
    <>
      <section className="flex h-screen -mt-16 justify-center items-center gap-12 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        {/* <SVGAnimation /> */}
        {/* <motion.div
          className="absolute top-10 left-20 w-20 h-20 bg-blue-500 rounded-full z-204"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-pink-400 rounded-full z-4"
          animate={{ x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        /> */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold leading-12 tracking-tight gradient-text">
            <p className="text-orange-400 text-sm font-semibold tracking-normal">
              Unlock your potential
            </p>
            Crafting a
              Better
              <br />
              Life
            Through Skill
            <br />
            Development
          </h1>
          <h3 className="text-sm text-gray-700">
            Explore our e-course platform and unlock your full potential through
            <br />
            skill development. Build a brighter future and transform your life
            with
            <br />
            our engaging & transformative courses
          </h3>
          <div className="flex gap-4">
            <Button className="bg-blue-800 hover:bg-blue-900 duration-200">
              <Link href={`#`}>Explore our course</Link>
            </Button>
            <Button
              variant="secondary"
              className="hover:bg-gray-50 duration-200 "
            >
              <Link href={`#`}>Try free now</Link>
            </Button>
          </div>
        </div>
        <div className="size-110 rounded-xl overflow-clip">
          <motion.div
            className="p-2 absolute bg-white -translate-x-8 translate-y-6 rounded-md shadow-lg hover:shadow-xl flex flex-col hover:scale-105 -rotate-2 hover:-rotate-6 font-medium duration-300 z-5"
            animate={{ x: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="bg-white p-2 text-sm">1000+ students admitted</p>
          </motion.div>
          <motion.div
            className="p-2 absolute bg-white translate-x-70 translate-y-80 rounded-md shadow-lg hover:shadow-xl flex flex-col hover:scale-105 rotate-2 hover:rotate-6 font-medium duration-300 z-5"
            animate={{ y: [0, 20, 0]}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="bg-white p-2 text-sm">Top 10 schools in nigeria</p>
          </motion.div>

          {/* <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/501399971_24076278151978535_7287700868075577350_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lvmwnu07ORAQ7kNvwGT8NXK&_nc_oc=AdnGwlZPWZJBgRlUR3K9HsyReaXF0a9MpOJPMhpPq_CFXoylFDrJqHnU2PagUzFnEPASbyh-qURNKV0XFzVISUH8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oCb4Q5sJUr9aloKPMUd_jA&oh=00_AfVwaKXZpIBJOiDQDbBjWXVTe0VDwAgVYM8z5TSeuP154A&oe=68BB34D1"
            alt=""
            className="object-cover w-full h-full"
          /> */}
          <Slideshow />
        </div>
      </section>
      <section className="flex justify-center items-center pb-8 h-fit w-full bg-blue-50">
        <div className="grid grid-cols-4 bg-blue-800 w-[80vw] h-40">
          <div className="text-white">
            <h2 className="font-bold ">Programs</h2>
            <p className="text-sm">
              Our programs are designed <br /> to develop your children
            </p>
          </div>
          <div>gno3p4gn3op</div>
          <div>gno3p4gn3op</div>
          <div>gno3p4gn3op</div>
        </div>
      </section>
    </>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
