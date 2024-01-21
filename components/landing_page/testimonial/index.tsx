import React from "react";
import shopi from "@/public/assets/Shopify.com svg.svg";
import star from "@/public/assets/stars.png";
import test from "@/public/assets/test.svg";

import content from "@/public/assets/Contents.svg";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
const Testimonial = () => {
  return (
    <section className="flex w-full max-w-[1472px] mx-auto px-9 justify-between flex-row items-center">
      <div className="flex flex-col gap-11 w-full max-w-[640px] ">
        <Image src={shopi} alt="shopify" />
        <Image src={star} alt="star" />
        <h3 className="text-[44px] font-medium leading-[60px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h3>
        <div className=" w-full  flex items-center gap-2 justify-start">
          <Image src={test} alt="woman" />
          <div className="flex flex-col gap-1">
            <span className="text-[20px] font-semibold leading-[30px]">
              Sarah Thompson
            </span>
            <span className="text-[18px] text-gray-600 leading-[28px]">
              Project Manager, Shopify
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="bg-white h-10 flex items-center justify-center text-blueColor border-[#D1E9FF] border-[1px] aspect-square p-2 rounded-full">
              <IoArrowBack />
            </button>
            <button className="bg-white h-10 flex items-center justify-center text-blueColor border-[#D1E9FF] border-[1px] aspect-square p-2 rounded-full">
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>
      </div>
      <Image src={content} alt="content" />
    </section>
  );
};

export default Testimonial;
