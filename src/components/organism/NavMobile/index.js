import Link from "next/link";
import React from "react";
import { Assets } from "assets";
import Image from "next/image";

export const NavMobile = (props) => {
  return (
    <div
      style={{ transition: "0.5s" }}
      className={`${
        props.show ? "top-0 left-0" : " -top-full left-0"
      } fixed h-screen w-full bg-[#232340] transition delay-150 duration-300 ease-in-out z-[100]`}
    >
      <div className="absolute top-0 right-0">
        <Image
          src={Assets.SiluetBar}
          alt="Siluet Bar"
          width={280}
          height={280}
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="flex items-center justify-between mb-12">
          <Link href="">
            <div className="relative w-[8rem] h-full flex justify-center items-center">
              <Image src={Assets.FolioLight} alt="Logo Folio Light" />
            </div>
          </Link>
          <button type="button" onClick={props.onClick}>
            <div className="relative">
              <Image
                src={Assets.CloseBar}
                alt="Close Bar"
                width={32}
                height={32}
              />
            </div>
          </button>
        </div>
        <div className="flex items-center h-full py-24">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-3xl font-bold text-white transition  hover:text-[#666795]">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span
                  href=""
                  className="flex flex-row items-center justify-between w-full py-3 text-3xl text-[#595976]  transition  hover:text-[#666795] font-body"
                >
                  Work
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span
                  href=""
                  className="flex flex-row items-center justify-between w-full py-3 text-3xl text-[#595976]  transition  hover:text-[#666795] font-body"
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-3xl text-[#595976] transition  hover:text-[#666795] font-body ">
                  Jobs
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
