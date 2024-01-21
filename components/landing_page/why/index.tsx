import Image from "next/image";
import React from "react";
import arr from "@/public/assets/arrow.svg";
import pp from "@/public/assets/people.svg";
import ListItem from "@/components/common/list";
import { Icons } from "@/components/common/icons/icons";
const list = [
  {
    Icon: Icons.Vid,
    h: "Crystal-clear HD video",
    m: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    Icon: Icons.Record,
    h: "Noise-canceling audio",
    m: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    Icon: Icons.Calendar,
    h: "Scheduling made easy",
    m: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    Icon: Icons.Lock,
    h: "Bank-grade security",
    m: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];
const WhyChoose = () => {
  return (
    <section className="w-full px-9 max-w-[1472px] mx-auto py-32 gap-24 flex flex-col ">
      <div className="w-full flex flex-col relative gap-2">
        <h3 className="text-[#175CD3] text-[18px] leading-[28px] font-semibold">
          The ClearLink Advantage
        </h3>
        <h2 className="text-[48px] leading-[60px] font-semibold">
          Why choose ClearLink?
        </h2>
        <p className="text-[24px] max-w-[800px] leading-[32px] text-gray-500 ">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
        <Image
          className="absolute top-[40%] right-[18%]"
          src={arr}
          alt="arrow"
        />
      </div>
      <div className="w-full flex justify-between ">
        <div className="w-full max-w-[800px]">
          <ListItem
            gap="gap-10  flex-wrap"
            items={list}
            renderMethod={({ Icon, h, m }: (typeof list)[0]) => (
              <article className="w-full flex flex-col gap-3 items-start max-w-[360px]">
                <button className="bg-[#F9FAFB] border-[#EAECF0] border-[1px] aspect-square p-2 rounded-full">
                  <Icon />
                </button>
                <h5 className="text-[24px] leading-[32px] font-semibold">
                  {h}
                </h5>
                <p className="text-[18px] leading-[28px] text-gray-600">{m}</p>
              </article>
            )}
          />
        </div>

        <Image src={pp} className="h-[490px]" alt="people" />
      </div>
    </section>
  );
};

export default WhyChoose;
