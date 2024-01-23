"use client";
import Accordion from "@/components/common/accordion";
import ListItem from "@/components/common/list";
import React from "react";
const list = [
  {
    h: "How many participants can join a ClearLink video conference?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    h: "Can I use ClearLink on multiple devices?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    h: "Is ClearLink compatible with other video conferencing platforms?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    h: "How does ClearLink ensure the security of my video conferences?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    h: "Do I need to download any software to use ClearLink?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    h: "What kind of customer support does ClearLink provide?",
    m: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    b:false
  },
 
];
const FAQ = () => {
  return (
    <section className="w-full px-9 max-w-[1472px] mx-auto py-32 flex justify-between">
      <div className="w-full max-w-[520px] flex flex-col  gap-2">
        <h3 className="text-[#175CD3] text-[18px] leading-[28px] font-semibold">
          Support
        </h3>
        <h2 className="text-[48px] leading-[60px] font-semibold">FAQ</h2>
        <p className="text-[24px] max-w-[800px] leading-[32px] text-gray-500 ">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <a href='/' className="underline">chat to our friendly team.</a>
        </p>
      </div>
      <ListItem
        gap="gap-1 w-full"
        direction="column"
        items={list}
        renderMethod={(i: (typeof list)[0]) => <Accordion {...i} />}
      />
    </section>
  );
};

export default FAQ;
