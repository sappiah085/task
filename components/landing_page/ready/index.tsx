import NormalBtn from "@/components/common/button/nBtn";
import Image from "next/image";
import React from "react";
import im from "@/public/assets/mansmile.svg";
import { IoIosCheckmark } from "react-icons/io";
const list = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Peronalized onboarding",
];
const Ready = () => {
  return (
    <section className="w-full pl-9  mx-auto flex justify-between">
      <div className="flex flex-col gap-6 w-full max-w-[580px] mx-auto">
        <h4 className="text-[48px] leading-[60px] font-semibold">
          Ready to clear the path to perfect communication?
        </h4>
        <div className="flex-col gap-3 flex ">
          {list.map((i) => (
            <div
              key={i}
              className="flex w-full items-center gap-3 text-gray-600 text-[24px] leading-[32px]  "
            >
              <span className=" p-[1px] aspect-square rounded-full flex items-center justify-center text-[#175CD3] text-xl border-2 border-blueColor">
                <IoIosCheckmark />
              </span>
              {i}
            </div>
          ))}
        </div>

        <div className="flex w-full gap-3 items-center">
          <NormalBtn
            bgC="bg-white border-[1px]"
            label="Talk to Sales"
            textColor="text-black"
          />{" "}
          <NormalBtn
            bgC="bg-blueColor !px-[20px]"
            label="Start your free trial"
            textColor="text-white"
          />
        </div>
      </div>
      <Image src={im} alt="man smiling" />
    </section>
  );
};

export default Ready;
