import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();
  console.log(sectionInView);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid  z-10 items-center grid-cols-2 sm:hidden px-6 py-5 fixed top-12 rounded-2xl bg-gradient-to-r from-[#d9d9d91f]  max-w-[90%] w-full to-[#7373731f] mt-12 sm:mt-16 std-backdrop-blur"
    >
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white/25"
        onClick={() => onMenuOpen(false)}
      >
        <Link
          href="/#home"
          className={`${sectionInView === "home" && "text-white"} w-fit`}
        >
          Home
        </Link>
        <Link
          href="/#projects"
          className={`${sectionInView === "projects" && "text-white"} w-fit`}
        >
          Projects
        </Link>
        <Link
          href="/#skills"
          className={`${sectionInView === "skills" && "text-white"} w-fit`}
        >
          Skills
        </Link>
        <Link
          href="/#contact"
          className={`${sectionInView === "contact" && "text-white"}  w-fit`}
        >
          Contact
        </Link>

        <Link
          href="/my-story"
          className={`${sectionInView === "my-story" && "text-white"}  w-fit`}
        >
          My Story
        </Link>

      </ul>

      <div className="flex flex-col gap-3 z-20 items-center justify-center">

        <Link
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl visited:bg-[#E3D3BE] bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
          target="_blank"
          href="https://www.linkedin.com/in/sabhyagupta4xr"
          data-blobity-radius="10"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </Link>
        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://github.com/SABHYAGUPTA5XR"
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:github" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://instagram.com/sabhyagupta4xr"
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:instagram" />
          </Link>


        </div>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://x.com/sabhyagupta4xr"
            data-blobity-radius="10"
          >
            <Icon icon="akar-icons:x-fill" />
          </Link>
      </div>
    </motion.div>
  );
}
