import React from "react";
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSpotify } from "react-icons/im";
import { BurgerModal } from "./BurgerModal";

export const TopSection = ({ onClickHandler, isModalOpen }: any) => {
  return (
    <div className="flex w-full justify-end items-center  gap-4">
      <BurgerModal modalOpen={isModalOpen} onClickHandler={onClickHandler} />
      <div className="flex items-center justify-between w-full gap-4">
        {/** Mobile view */}
        <div className="flex items-center justify-between gap-4 w-full lg:hidden">
          <ImSpotify size={30} />
          <div className="flex items-center justify-end gap-4 ">
            <AiOutlineSearch size={23} />
            <p className="bg-white rounded-full text-sm text-black px-7 font-bold py-2">
              OPPEN APP
            </p>
            <GiHamburgerMenu size={25} onClick={onClickHandler} />
          </div>
        </div>

        {/** Desktop view */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex gap-4">
            <span>
              <AiOutlineLeft size={20} />
            </span>
            <span>
              <AiOutlineRight size={20} />
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p>Sign up</p>
            <p className="bg-white rounded-full text-sm text-black px-7 font-bold py-2">
              Log in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
