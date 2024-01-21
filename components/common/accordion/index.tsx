import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
const Accordion = ({
  b = true,
  h,
  m,
}: {
  b?: boolean;
  h: string;
  m: string;
}) => {
  const [open, setOpen] = useState(false);
  const openFunc = () => setOpen((pre) => !pre);
  return (
    <article
      className={`${
        open ? "bg-[#F9FAFB] rounded-2xl  border-[1px] " : "bg-white "
      } border-gray-200 p-6 w-[690px] ${b && "border-b-[1.9px]"}  `}
    >
      <div className="flex w-full  items-center gap-9 justify-between ">
        <h6 className="text-[20px] leading-[30px]">{h}</h6>{" "}
        <button
          onClick={openFunc}
          className="aspect-square flex items-center justify-center rounded-full  border-[1px] h-[20px] border-gray-400 text-gray-400"
        >
          {open && <FaMinus />}
          {!open && <LuPlus />}
        </button>
      </div>
      {open && (
        <p className="text-[18px] w-[590px] leading-[28px] text-gray-600">
          {m}
        </p>
      )}
    </article>
  );
};

export default Accordion;
