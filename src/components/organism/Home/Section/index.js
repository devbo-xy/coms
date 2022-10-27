import React from "react";
import Image from "next/image";
import { Assets } from "assets";

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
        <span className="bg-[#9A97ED] text-sm text-white absolute py-1 px-3 rounded-full top-0 -left-5">
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
                  className="w-[8.5rem] px-2 py-[0.65rem] bg-[#5468E7] text-base rounded-md text-white font-semibold cursor-pointer hover:scale-95"
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
              <Image src={Assets.Folio} alt="Logo Folio" />
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
                  <button className="w-[21rem] py-3 rounded-lg text-white bg-[#5468E7] font-sm font-bold hover:scale-95 outline-none ">
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
        <div className="w-full h-[190vh] bg-[#232340] py-12 md:py-20 px-6 relative overflow-hidden">
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
                      <div className="flex items-center justify-center w-8 h-8 bg-[#5468E7] rounded-full">
                        <Image
                          src={Assets.ArrowDownOutline}
                          alt="Arrow Right"
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
                        <div className="flex items-center justify-center w-8 h-8 bg-[#5468E7] rounded-full">
                          <Image
                            src={Assets.ArrowDownOutline}
                            alt="Arrow Right"
                            width={10}
                            height={10}
                          />
                        </div>
                        <span className="text-white text-sm ">Download</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-2">
              <div className="flex flex-row space-x-8">
                <div className="md:hidden block">
                  <div className="flex items-center justify-center ">
                    <Image
                      src={Assets.ArrowLeft}
                      alt="Arrow Left"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-[#5468E7] rounded-full md:absolute md:right-4 md:-bottom-[26rem]">
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
        <div className="w-full h-screen bg-white relative">
          <div className="md:w-[50rem] w-[30rem] h-full hidden md:block md:absolute md:left-[15rem] md:-top-[28rem] -left-[2.5rem] z-20">
            <Image src={Assets.Agency} alt="Assets Hero 2" />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-center w-12 h-12 bg-[#5468E7] rounded-full md:absolute md:left-[8.75rem] md:-top-[9rem]">
              <Image
                src={Assets.ArrowLeft}
                alt="Arrow Left"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
