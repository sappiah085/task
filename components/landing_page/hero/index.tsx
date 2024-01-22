import React from "react";
import bg from "@/public/assets/bg.svg";
import review from "@/public/assets/reviews.svg";
import Image from "next/image";
import NormalBtn from "@/components/common/button/nBtn";
import { Icons } from "@/components/common/icons/icons";
import EmojisComponent from "./emojis";
export default function Hero() {
  return (
    <section className="relative px-9 overflow-hidden gap-24  w-full min-h-[85vh] flex items-center justify-center max-w-[1472px] mx-auto">
      {/* background image  */}
      <div className="-z-10 w-full h-full scale-[1.4] absolute top-0 left-0">
        <Image priority src={bg} className="h-full w-full" alt="background" />
      </div>

      <div className="w-full max-w-[650px] flex flex-col gap-7">
        <h1 className="text-[64px] font-semibold leading-[72px]">
          Uniting the world, one video call at a time
        </h1>
        <p className="text-[24px] text-gray-500 leading-[32px] font-normal">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex items-center gap-4">
          <NormalBtn
            bgC="bg-blueColor"
            label="Start your free trial"
            textColor="text-white"
          />
          <button className="flex items-center text-[18px] text-blueColor gap-2">
            <Icons.Robot /> Discover AI assistant
          </button>
        </div>
        <Image priority className="h-[52px]" src={review} alt="review" />
      </div>
      <EmojisComponent />
    </section>
  );
}
