"use client";
import { useState } from "react";
import { TopSection } from "./components/topSection";
import { MusicMap } from "./components/MusicMap";
import { Footer } from "./ui/Footer";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileOpenHandler = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <div className="flex h-screen w-full ml-sideheader">
      <div className="w-full h-screen lg:ml-[200px]   lg:p-2">
        <div className="flex p-4 items-center rounded-t-lg justify-between  bg-black lg:bg-neutral-950">
          <TopSection isModalOpen={isOpen} onClickHandler={mobileOpenHandler} />
        </div>
        <div className="bg-neutral-900 h-screen lg:h-screen pt-10  relative rounded-b-lg lg:p-4">
          <MusicMap />
          <Footer />
        </div>
      </div>
    </div>
  );
}
