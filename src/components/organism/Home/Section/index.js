import React from "react";
import Image from "next/image";
import { Assets } from "assets";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export const Section = () => {
  const Point = (props) => {
    return (
      <div
        className={`flex flex-row items-center justify-center space-x-10 ${props.className}`}
      >
        <div>
          <Image src={props.src} alt={props.alt} />
        </div>
        <span className="text-[#8B8B8B]">{props.title}</span>
        <div>
          <Image src={props.img} alt={props.alt2} />
        </div>
      </div>
    );
  };

  const Card = (props) => {
    return (
      <div className="flex flex-col space-y-[2rem] justify-evenly">
        <div
          className={`w-[20.5rem] md:w-[17.5rem] h-[23rem] rounded-2xl flex items-center justify-center relative ${props.className}`}
        >
          <div className="flex items-center justify-center w-[24rem] absolute h-full">
            <Image src={props.src} alt={props.alt} />
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
          <h2 className="text-[#232340] text-[1.75rem] font-bold">
            {props.title}
          </h2>
          <p className="text-sm text-[#606060] w-full md:w-[65%]">
            {props.paragraph}
          </p>
        </div>
        <span className="bg-[#9A97ED] text-sm text-white absolute py-1 px-3 rounded-full top-0 -left-5 shadow-md shadow-black/10">
          Featured Product
        </span>
        <div className="flex items-center justify-center w-12 h-12 ring-1 ring-black rounded-full md:absolute  left-[16rem] bottom-[13rem] z-[5]">
          <Image
            src={Assets.ArrowBlack}
            alt="Arrow Right"
            width={24}
            height={24}
            className="text-black"
          />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-center w-12 h-12 ring-1 ring-black rounded-full md:absolute left-[43rem] bottom-[13rem] z-[5]">
            <Image
              src={Assets.ArrowBlack}
              alt="Arrow Right"
              width={24}
              height={24}
              className="text-black"
            />
          </div>
        </div>
      </div>
    );
  };

  const CardJobs = (props) => {
    return (
      <div className="bg-white w-full md:w-[22rem] h-[5rem] rounded-3xl py-20 flex items-center relative shadow-lg shadow-black/20">
        <div className="w-full px-6">
          <h2 className="text-lg font-bold text-[#232340] md:text-xl">
            {props.title}
          </h2>
          <span className="text-sm text-[#8B8B8B] w-full ">
            2 years experiences
          </span>
          <div className="flex items-center justify-center w-8 h-8 ">
            <Image
              src={Assets.ArrowBlack}
              alt="Arrow Right Black"
              width={14}
              height={14}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-screen relative">
      <div className="absolute -top-6 right-0 z-10 hidden md:block">
        <Image
          src={Assets.Background}
          alt="Background"
          width={700}
          height={1000}
        />
      </div>
      <div className="w-full h-[190vh] bg-[#232340] py-12 md:py-20 px-6 relative overflow-hidden ">
        <div className="absolute top-0 -left-[22rem]">
          <Image
            src={Assets.SiluetSec2}
            alt="Siluet Section 2"
            width={1300}
            height={1300}
          />
        </div>
        <div className="relative max-w-5xl mx-auto flex flex-col md:space-y-0 space-y-[3rem]">
          <div className="flex flex-row space-x-0 md:space-x-[9.5rem]">
            <div className="hidden md:block">
              <Image src={Assets.Folio} alt="Logo Folio" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <span className="text-sm text-[#8B8B8B]">01</span>
                <span className="text-sm text-white">Who We Are</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white w-full md:w-[75%] z-20">
                We Make Designs that Lead and Inspire.
              </h2>
            </div>
          </div>
          <div className="flex justify-between px-2 md:hidden">
            <div className="flex flex-row space-x-8">
              <div className="flex items-center justify-center">
                <Image
                  src={Assets.ArrowLeft}
                  alt="Arrow Left"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-[#5468E7] rounded-full">
                <Image
                  src={Assets.ArrowRight}
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-[5rem]">
              <span className="flex items-center justify-center text-base font-bold text-white">
                2022
              </span>
              <div className="flex items-center justify-center">
                <Image
                  src={Assets.ArrowDown}
                  alt="Arrow Down"
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className="md:w-[54rem] w-[30rem] h-full flex items-center relative md:left-[11rem] md:top-[6rem] -left-[2.5rem] z-20">
            <Image
              src={Assets.Hero2}
              alt="Assets Hero 2"
              // width={1500}
              // height={2000}
            />
          </div>
          <div className="absolute md:top-[20rem] md:block hidden md:-left-[4rem] z-[20]">
            <div className="flex flex-col items-center justify-center space-y-[4rem]">
              <Point src={Assets.Line} alt="Line" title="2018" />
              <Point src={Assets.Line} alt="Line" title="2019" />
              <Point src={Assets.Line} alt="Line" title="2020" />
              <Point
                src={Assets.Line}
                alt="Line"
                title="2021"
                img={Assets.PointLine}
                className="relative left-[4rem]"
              />
              <Point src={Assets.Line} alt="Line" title="2022" />
            </div>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto flex items-center justify-center md:space-y-0 space-y-[3rem] py-14 md:py-[14rem]">
          <div className="flex flex-col ">
            <div className="flex flex-row space-x-0 md:space-x-[11rem]">
              <div className="hidden md:block">
                <Image src={Assets.VerticalLine} alt="Logo Vertical Line" />
              </div>
              <div className="flex flex-col space-y-10">
                <h2 className="text-2xl font-bold text-white w-full md:w-[50%]">
                  A design team building a curated marketplace for UI designers.
                </h2>
                <p className="text-[#606060] text-base md:text-lg text-left  w-full md:w-[60%]">
                  Agency is a full-service agency , busy designing and building
                  beautiful digital products, brands, and experiences.
                </p>
                <button
                  style={{ transition: "0.5s" }}
                  className="w-full md:w-[8.5rem] px-2 py-[0.65rem] bg-[#5468E7] text-base rounded-md text-white font-semibold cursor-pointer hover:scale-95"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute md:-right-4 md:bottom-[12rem] -bottom-[19rem] bg-[#232340] rounded-full shadow-lg shadow-black/70 w-[18rem] h-[18rem]  flex items-center justify-center">
            <div className="relative flex flex-col items-center -space-y-8 md:-space-y-10 -top-3 md:-top-5">
              <span className="text-[7.5rem] md:text-[8.5rem] font-bold text-white">
                28
              </span>
              <span className="text-lg font-bold text-white md:text-xl">
                Bigest Branding
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200vh] md:h-[130vh] bg-white py-12 md:py-20 px-6 relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto flex flex-col md:space-y-0 space-y-[3rem]">
          <div className="flex flex-row space-x-0 md:space-x-[9.5rem]">
            <div className="hidden md:block">
              <Image
                src={Assets.Folio}
                alt="Logo Folio"
                width={35}
                height={35}
              />
            </div>
            <div className="flex flex-col space-y-[2rem] md:space-y-[4rem]">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4">
                  <span className="text-sm text-[#5468E7]">02</span>
                  <span className="text-sm text-[#5468E7]">
                    You May Also Like
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#232340] w-[24rem] md:w-[75%] z-20">
                  Recent Works.
                </h2>
                <p className="text-base text-[#606060] w-full md:w-[60%]">
                  Agency is full-service agency busy designing and building
                  autiful digital products, brands, and experiences.
                </p>
              </div>
              <div className="flex justify-center md:flex-row flex-col relative space-y-8 md:space-y-0">
                <Card
                  src={Assets.Work1}
                  alt="Works 1"
                  title="Bento 3D Illustration"
                  paragraph=" Agency is full-service agency busy designing and building
                  autiful digital products, brands, and experiences."
                  className="bg-[#FFCE79]"
                />
                <Card
                  src={Assets.Work2}
                  alt="Works 2"
                  title="Bento Vol.3"
                  paragraph=" Agency is full-service agency busy designing and building
                  autiful digital products, brands, and experiences."
                  className="bg-[#D1ECFD]"
                />
                <div style={{ transition: "0.5s" }} className="block md:hidden">
                  <button className=" hover:scale-95 w-[20.5rem] py-3 rounded-lg text-white bg-[#5468E7] font-sm font-bold outline-none ">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="absolute -top-6 right-0 z-10 hidden md:block">
          <Image
            src={Assets.Background}
            alt="Background"
            width={700}
            height={1000}
          />
        </div>
        <div className="w-full h-[130vh] md:h-[190vh] bg-[#232340] py-12 md:py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 -left-[22rem]">
            <Image
              src={Assets.SiluetSec2}
              alt="Siluet Section 2"
              width={1300}
              height={1300}
            />
          </div>
          <div className="relative max-w-5xl mx-auto flex flex-col md:space-y-0 space-y-[3rem]">
            <div className="flex flex-row space-x-0 md:space-x-[9.5rem]">
              <div className="hidden md:block">
                <Image src={Assets.Folio} alt="Logo Folio" />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4">
                  <span className="text-sm text-[#8B8B8B]">03</span>
                  <span className="text-sm text-white">Folio Agency</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white w-full z-20">
                  By the Numbers.
                </h2>
              </div>
            </div>
            <div className="flex w-full z-[20] md:py-20 md:pl-44">
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row">
                  <div className="flex flex-col space-y-10 justify-center md:relative top-[8rem]">
                    <div className=" flex flex-col  -space-y-8 md:-space-y-4 -top-3 md:-top-5">
                      <span className="text-[7.5rem] md:text-[9rem] font-bold text-white">
                        20
                      </span>
                      <span className="text-lg font-bold text-white md:text-xl">
                        Pre-Build Scenes
                      </span>
                    </div>
                    <hr className="border-t-[0.1rem] border-t-[#606060] w-[11rem]" />
                    <span className="text-sm text-[#606060] w-full md:w-[50%]">
                      Bento is the first full editable, 3D visual design system
                      with global aut-updatable style guides built right in
                      figma
                    </span>
                    <div className="flex flex-row space-x-4 items-center h-full ">
                      <div
                        style={{ transition: "0.5s" }}
                        className="flex hover:scale-95 items-center justify-center w-8 h-8 bg-[#5468E7] rounded-full"
                      >
                        <Image
                          src={Assets.ArrowDownOutline}
                          alt="Arrow Down"
                          width={10}
                          height={10}
                        />
                      </div>
                      <span className="text-white text-sm ">Download</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-10">
                    <div className="flex flex-col  -space-y-8 md:-space-y-4 -top-3 md:-top-5">
                      <span className="text-[7.5rem] md:text-[9rem] font-bold text-white">
                        40
                      </span>
                      <span className="text-lg font-bold text-white md:text-xl">
                        Scenes Obect
                      </span>
                    </div>
                    <hr className="border-t-[0.1rem] border-t-[#606060] w-[11rem]" />
                    <span className="text-sm text-[#606060] w-full md:w-[50%]">
                      Bento is the first full editable, 3D visual design system
                      with global aut-updatable style guides built right in
                      figma
                    </span>
                    <div className="hidden md:block">
                      <div className="flex flex-row space-x-4 items-center h-full">
                        <div
                          style={{ transition: "0.5s" }}
                          className="flex hover:scale-95 items-center justify-center w-8 h-8 bg-[#5468E7] rounded-full"
                        >
                          <Image
                            src={Assets.ArrowDownOutline}
                            alt="Arrow Right"
                            width={10}
                            height={10}
                          />
                        </div>
                        <span className="text-white text-sm">Download</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-2">
              <div className="flex flex-row space-x-8">
                <div className="md:hidden block">
                  <div
                    style={{ transition: "0.5s" }}
                    className="flex hover:scale-95 items-center justify-center w-12 h-12  rounded-full md:absolute md:right-4 md:-bottom-[26rem]"
                  >
                    <Image
                      src={Assets.ArrowLeft}
                      alt="Arrow Left"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div
                  style={{ transition: "0.5s" }}
                  className="flex hover:scale-95 items-center justify-center w-12 h-12 bg-[#5468E7] rounded-full md:absolute md:right-4 md:-bottom-[26rem]"
                >
                  <Image
                    src={Assets.ArrowRight}
                    alt="Arrow Right"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20 bg-white relative hidden md:block">
          <div className="md:w-[50rem] w-[30rem] h-full hidden md:block md:absolute md:left-[15rem] md:-top-[28rem] -left-[2.5rem] z-20">
            <Image src={Assets.Agency} alt="Assets Hero 2" />
          </div>
          <div className="hidden md:block">
            <div
              style={{ transition: "0.5s" }}
              className="flex hover:scale-95 items-center justify-center w-12 h-12 bg-[#5468E7] rounded-full md:absolute md:left-[8.75rem] md:-top-[9rem]"
            >
              <Image
                src={Assets.ArrowLeft}
                alt="Arrow Left"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[140vh] py-12 md:py-[10rem] relative overflow-hidden">
          <div className="absolute top-0 -right-[12rem] md:top-[5.5rem] md:left-[24.5rem]">
            <Image
              src={Assets.SiluetJobs}
              alt="Siluet Jobs"
              width={400}
              height={400}
            />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 md:px-2 flex flex-col md:space-y-0 space-y-[3rem] z-[20]">
            <div className="flex flex-col md:flex-row">
              <div className="flex space-y-10 md:space-y-0 flex-col md:flex-row space-x-0 md:space-x-[9.5rem]">
                <div className="hidden md:block">
                  <Image
                    src={Assets.Folio}
                    alt="Logo Folio"
                    width={45}
                    height={45}
                  />
                </div>
                <div className="flex flex-col space-y-[2rem] md:space-y-[4rem]">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-4">
                      <span className="text-sm text-[#5468E7]">04</span>
                      <span className="text-sm text-[#5468E7]">
                        We are hiring
                      </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#232340] w-full md:w-[75%] z-20">
                      Jobs.
                    </h2>
                    <p className="text-base text-[#606060] w-full">
                      Agency is full-service agency busy designing and building
                      beautiful digital products, brands, and experiences.
                    </p>
                    <div className="md:block hidden">
                      <div className="flex flex-row space-x-4 items-center h-full ">
                        <div
                          style={{ transition: "0.5s" }}
                          className="hover:scale-95 flex items-center justify-center w-8 h-8 bg-[#C897E4] rounded-full"
                        >
                          <Image
                            src={Assets.ArrowRightOutline}
                            alt="Arrow Right"
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className="text-[#606060] text-sm ">
                          Available Jobs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="bg-white w-full md:w-[22rem] h-[5rem] rounded-3xl py-20 flex items-center relative shadow-lg shadow-black/20">
                    <div className="w-full px-6">
                      <div className="flex flex-row items-center space-x-4">
                        <h2 className="text-lg font-bold text-[#232340] md:text-xl">
                          Visual Designer
                        </h2>
                        <span className="w-6 h-6 flex items-center justify-center text-white text-sm rounded-full bg-gradient-to-t from-[#0837AE] to-[#3A8FFF]">
                          2
                        </span>
                      </div>
                      <span className="text-sm text-[#8B8B8B] w-full ">
                        2 years experiences
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 ">
                        <Image
                          src={Assets.ArrowBlack}
                          alt="Arrow Right Black"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#232340] w-full md:w-[22rem] h-[5rem] rounded-3xl py-20 flex items-center relative shadow-lg shadow-[#232340]/40">
                    <div className="w-full px-6">
                      <h2 className="text-lg font-bold text-white md:text-xl">
                        Visual Designer
                      </h2>
                      <span className="text-sm text-[#8B8B8B] w-full ">
                        2 years experiences
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 ">
                        <Image
                          src={Assets.ArrowRight}
                          alt="Arrow Right"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                    <div
                      style={{ transition: "0.5s" }}
                      className="hover:scale-95 flex items-center absolute right-4 md:right-2 justify-center w-32 h-32 md:w-36 md:h-36 bg-[#5468E7] rounded-3xl"
                    >
                      <Image
                        src={Assets.Work1}
                        alt="Arrow Right"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <CardJobs title="Art Director" />
                  <div className="bg-white w-full md:w-[22rem] h-[5rem] rounded-3xl py-20 flex items-center relative shadow-lg shadow-black/20">
                    <div className="w-full px-6">
                      <div className="flex flex-row items-center space-x-4">
                        <h2 className="text-lg font-bold text-[#232340] md:text-xl">
                          Web Designer
                        </h2>
                        <span className="w-6 h-6 flex items-center justify-center text-white text-sm rounded-full bg-gradient-to-t from-[#0837AE] to-[#3A8FFF]">
                          6
                        </span>
                      </div>
                      <span className="text-sm text-[#8B8B8B] w-full ">
                        2 years experiences
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 ">
                        <Image
                          src={Assets.ArrowBlack}
                          alt="Arrow Right Black"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:h-[100vh]  flex justify-center items-center bg-white">
          <div className=" w-[20.5rem] h-[40rem] md:w-[70rem] md:h-[40rem] bg-[#5468E7] rounded-3xl flex justify-center relative overflow-hidden ">
            <div className="absolute top-0 -right-[14rem] md:top-0 md:left-[13rem]">
              <Image
                src={Assets.SiluetJobs}
                alt="Siluet Jobs"
                width={500}
                height={500}
              />
            </div>
            <div className="flex-col flex px-8 z-[20]">
              <div className="flex flex-col space-y-8 items-center border-b-[0.1rem] border-b-white h-[20rem] md:w-[70rem] md:h-[20rem] py-12 md:py-20">
                <div className="hidden md:block">
                  <Image src={Assets.FolioPurple} alt="Logo Folio Purple" />
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <div className="hidden md:block">
                    <Image src={Assets.Hello} alt="Logo Emot Hello" />
                  </div>
                  <span className="text-base text-white">Say Hello</span>
                </div>
                <h2 className="text-base md:text-2xl font-bold text-white w-[40%] md:w-[40%] text-center">
                  A design team building a curated marketplace for UI designers.
                </h2>
              </div>
              <div className="flex flex-row">
                <div className="w-[35rem] h-[20rem] border-r-[0.1rem] border-b-white flex flex-col space-y-6 items-center justify-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white w-[45%] md:w-[60%] text-center">
                    Lets talk about your next project
                  </h2>
                  <button
                    style={{ transition: "0.5s" }}
                    className="w-[16rem] md:hidden block px-2 py-[0.65rem] bg-white text-base rounded-md text-[#5468E7] font-semibold cursor-pointer hover:scale-95"
                  >
                    Contact Us
                  </button>
                </div>
                <div className="md:block hidden">
                  <div className="flex-col space-y-8 flex justify-center py-[5rem] w-[35rem] ">
                    <div className="flex items-start ml-[4.8rem]">
                      <Image
                        src={Assets.Chat}
                        alt="Image Chat"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-row flex items-center justify-evenly w-full">
                      <h2 className="text-2xl font-bold text-white w-full md:w-[50%]">
                        Invest in your designs today!
                      </h2>
                      <div
                        style={{ transition: "0.5s" }}
                        className="flex items-center justify-center w-12 h-12 border-[0.1rem] border-white rounded-full hover:scale-95"
                      >
                        <Image
                          src={Assets.ArrowRight}
                          alt="Arrow Right"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto w-full py-20 relative overflow-hidden">
          <div className="absolute top-0 -left-[3rem]  md:hidden">
            <Image
              src={Assets.SiluetJobs}
              alt="Siluet Jobs"
              width={400}
              height={400}
            />
          </div>
          <div className="flex items-center justify-center flex-col space-y-8">
            <Link href="# ">
              <div className="relative w-[8rem] h-full flex justify-center items-center">
                <Image src={Assets.FolioDark} alt="Logo Folio Dark" />
              </div>
            </Link>
            <p className="text-base text-[#606060] text-center w-[80%] md:w-[50%]">
              Agency is full-service agency busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
            <div className="flex flex-row">
              <div className="w-full block md:hidden z-[20]">
                <div className="mx-auto w-full  rounded-2xl bg-white">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between rounded-lg bg-white ring-1 ring-[#8B8B8B] text-sm w-[20rem] px-4 py-2">
                          <span>Home</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel
                          style={{ transition: "0.5s" }}
                          className=" text-base  w-[20rem] bg-white rounded-lg ring-1 ring-[#8B8B8B] px-4 py-6 mt-4"
                        >
                          <ul className="items-center flex-col space-y-4 md:flex">
                            <li>
                              <Link href="# ">
                                <span className="w-full py-3 text-base transition  text-[#8B8B8B]">
                                  About
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="# ">
                                <span className="w-full py-3 text-base transition  text-[#8B8B8B]">
                                  Work
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="# ">
                                <span className="w-full py-3 text-base transition  text-[#8B8B8B]">
                                  Services
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="# ">
                                <span className="w-full py-3 text-base transition  text-[#8B8B8B]">
                                  Jobs
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
              <ul className="items-center hidden space-x-14 md:flex">
                <li>
                  <Link href="# ">
                    <span className="w-full py-3 text-base  transition  text-[#5468E7]">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span className="flex flex-row items-center justify-center w-full py-3 text-base text-[#8B8B8B]  transition  hover:text-[#5468E7]">
                      Work
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span className="flex flex-row items-center justify-center w-full py-3 text-base text-[#8B8B8B]  transition  hover:text-[#5468E7]">
                      Services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span className="w-full py-3 text-base text-[#8B8B8B] transition  hover:text-[#5468E7]">
                      Jobs
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="border-b-[0.1rem] border-b-[#606060] w-[80rem] md:block hidden" />
            <div className="flex justify-center flex-col-reverse md:flex-row items-center w-full py-4 md:py-0">
              <span className="w-full py-8 md:py-0 text-sm text-black text-center md:text-left">
                2020, U8 LLC
              </span>
              <div className="w-full flex flex-row space-x-4 items-center justify-center">
                <span className="w-full py-3 text-end text-sm text-[#5468E7] md:block hidden">
                  Follow Us
                </span>
                <div
                  style={{ transition: "0.5s" }}
                  className="flex items-center justify-center w-12 h-12 border-[0.1rem] md:border-none border-[#8B8B8B] rounded-full hover:scale-95"
                >
                  <Image
                    src={Assets.Facebook}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{ transition: "0.5s" }}
                  className="flex items-center justify-center w-12 h-12 border-[0.1rem] md:border-none border-[#8B8B8B] rounded-full hover:scale-95"
                >
                  <Image
                    src={Assets.Youtube}
                    alt="Youtube"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{ transition: "0.5s" }}
                  className="flex items-center justify-center w-12 h-12 border-[0.1rem] md:border-none border-[#8B8B8B] rounded-full hover:scale-95"
                >
                  <Image
                    src={Assets.Instagram}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
