import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavMobile } from "../NavMobile";
import { Assets } from "assets";

export const Navbar = () => {
  const [popupMenuShow, setPopupMenuShow] = useState(false);
  const openPopupMenu = () => setPopupMenuShow(true);
  const closePopupMenu = () => setPopupMenuShow(false);
  return (
    <>
      <div className=" w-full bg-white">
        <div
          className="nav top-0 fixed z-[100] w-full"
          style={{ transition: "0.5s" }}
        >
          <div className="block w-full">
            <div className="z-[10] absolute w-full before:-z-[1] before:absolute before:w-full before:h-full bg-white transition">
              <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-3 mx-auto xl:px-0 md:py-2">
                <div className="flex flex-row space-x-14">
                  <Link href="# ">
                    <div className="relative w-[8rem] h-full flex justify-center items-center">
                      <Image src={Assets.FolioDark} alt="Logo Folio Dark" />
                    </div>
                  </Link>
                </div>
                <div>
                  <ul className="items-center hidden space-x-14 md:flex">
                    <li>
                      <Link href="# ">
                        <span className="w-full py-3 text-base font-bold text-[#8B8B8B]  transition  hover:text-[#5468E7]">
                          About
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="# ">
                        <span className="flex flex-row items-center justify-center w-full py-3 text-base text-[#8B8B8B]  transition  hover:text-[#5468E7] font-bold">
                          Work
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="# ">
                        <span className="flex flex-row items-center justify-center w-full py-3 text-base text-[#8B8B8B]  transition  hover:text-[#5468E7] font-bold">
                          Services
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="# ">
                        <span className="w-full py-3 text-base text-[#8B8B8B] transition  hover:text-[#5468E7] font-bold">
                          Jobs
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <button className="w-[8rem] py-[1rem] rounded-md text-white bg-[#232340] uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                    Contact Us
                  </button>
                </div>

                <button
                  type="button"
                  className="block md:hidden "
                  onClick={() => {
                    popupMenuShow ? closePopupMenu() : openPopupMenu();
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={Assets.HamburgerBar}
                      alt="Hamburger Bar"
                      width={32}
                      height={32}
                    />
                  </div>
                </button>
                <NavMobile
                  show={popupMenuShow}
                  onClick={() => {
                    popupMenuShow ? closePopupMenu() : openPopupMenu();
                  }}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
