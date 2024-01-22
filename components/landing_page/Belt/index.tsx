import Image from "next/image";
import React from "react";
import sponsor from '@/public/assets/sponsor.svg'
const Belt = () => {
  return (
    <section className="w-full px-9 max-w-[1472px] mx-auto gap-8 flex  flex-col items-center justify-center">
      <p className="text-[20px]  leading-[30px] text-gray-600">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <Image priority src={sponsor} alt="sponsor" />
    </section>
  );
};

export default Belt;
