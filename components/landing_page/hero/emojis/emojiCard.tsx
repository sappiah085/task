import Image from "next/image";
import React from "react";

const EmojiCard = ({img, color}: {img:any, color: string}) => {
  return (
    <div
      className={`${color} w-[160px] p-2 rounded-xl pb-0 flex items-end aspect-square`}
    >
      <Image priority src={img} className="w-full" alt="emoji" />
    </div>
  );
};

export default EmojiCard;
