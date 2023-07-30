"use client";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const SideHeader = () => {
  const size = 20;
  return (
    <div className=" p-2 fixed top-0 gap-4 flex-col h-screen w-[200px] hidden lg:flex  ">
      <div className="bg-neutral-900 rounded-lg flex flex-col gap-4 p-5 ">
        <p className="flex items-center gap-4">
          <AiFillHome size={size} />
          Home
        </p>
        <p className="flex items-center gap-4">
          <AiOutlineSearch size={size} />
          Search
        </p>
      </div>
      <div className="bg-neutral-900 rounded-lg p-4 h-full">
        <p className="flex items-center  justify-between w-full">
          <BiLibrary size={size} />
          Your Library
          <span>
            <FaPlus />
          </span>
        </p>
      </div>
    </div>
  );
};

export default SideHeader;
