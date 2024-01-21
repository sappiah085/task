import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import as from "@/public/assets/as.png";
import ps from "@/public/assets/ps.png";

const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"];
const Company = ["About us", "Careers", "Press", "News", "Contact"];
const resources = ["Blog", "Events", "Help center", "Tutorials", "Support"];
const legal = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"];
const Menus = () => {
  return (
    <section className=" w-full flex justify-around pb-11 mt-24">
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        <Image src={logo} alt="logo" />
        <p className="text-gray-600 text-[18px] leading-[28px]">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-400  text-[16px] leading-[24px]">
          Product
        </span>
        {product.map((i: string) => (
          <a key={i} className="text-gray-600" href="/">
            {i}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-400  text-[16px] leading-[24px]">
          Company
        </span>
        {Company.map((i: string) => (
          <a key={i} className="text-gray-600" href="/">
            {i}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-400  text-[16px] leading-[24px]">
          Resources
        </span>
        {resources.map((i: string) => (
          <a key={i} className="text-gray-600" href="/">
            {i}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-400  text-[16px] leading-[24px]">Legal</span>
        {legal.map((i: string) => (
          <a key={i} className="text-gray-600" href="/">
            {i}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#004EEB] text-[16px] leading-[24px]">Get the app</span>
        <button>
          <Image src={as} alt="app store" />
        </button>
        <button>
          <Image src={ps} alt="play store " />
        </button>
      </div>
    </section>
  );
};

export default Menus;
