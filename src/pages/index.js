import { Hero, Section } from "components/organism";
import React from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="LUKMAN HANIF AKBARI"
        description="Agency is a full-service agency , busy designing and building beautiful digital products, brands, and experiences."
        canonical="https://coms-hanifakbari.vercel.app/"
        openGraph={{
          url: "https://coms-hanifakbari.vercel.app/",
          title: "LUKMAN HANIF AKBARI",
          description:
            "Agency is a full-service agency , busy designing and building beautiful digital products, brands, and experiences.",
          images: [
            {
              url: "/public/logoFolioPurple.png",
              width: 1200,
              height: 1200,
              alt: "seo",
              type: "image/png",
            },
          ],
          site_name: "LUKMAN HANIF AKBARI",
        }}
      />
      <div className="h-screen w-full relative">
        <Hero />
        <Section />
      </div>
    </>
  );
}
