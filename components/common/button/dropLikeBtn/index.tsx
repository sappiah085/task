import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const DropLikeBtn = ({ label }: { label: string }) => {
  return (
    <button className="text-gray-500 text-[18px] leading-[28px] flex items-center gap-1">
      {label} <MdKeyboardArrowDown />
    </button>
  );
};

export default DropLikeBtn;
