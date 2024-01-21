import React from "react";

const NormalBtn = ({label, bgC, textColor}:{label: string, bgC:string, textColor?:string}) => {
  return <a className={`text-[16px] leading-[24px] p-3 px-3 rounded-3xl    border-darkGrey ${bgC} ${textColor} `} href="/">{label}</a>;
};

export default NormalBtn;
