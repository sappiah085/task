import ListItem from "@/components/common/list";
import React from "react";
import EmojiCard from "./emojiCard";
import om from "@/public/assets/oldMan.svg";
import pw from "@/public/assets/pw.svg";
import man from "@/public/assets/man.svg";
import mus from "@/public/assets/mus.svg";
import bm from "@/public/assets/bm.svg";
import bw from "@/public/assets/bw.svg";

import { Icons } from "@/components/common/icons/icons";

const emojis = [
  { img: om, color: "bg-[#FF9C66]" },
  { img: pw, color: "bg-[#D6BBFB]" },
  { img: man, color: "bg-[#ACDC79]" },
  { img: mus, color: "bg-[#B3B8DB]" },
  { img: bm, color: "bg-[#FEC84B]" },
  { img: bw, color: "bg-[#FEA3B4]" },
];
const icons = [
  { Icon: <Icons.Mic /> },
  { Icon: <Icons.Vid /> },
  { Icon: <Icons.Com /> },
  { Icon: <Icons.Smile /> },
  { Icon: <Icons.Comment /> },
  { Icon: <Icons.Settings /> },
];
const EmojisComponent = () => {
  return (
    <div className="bg-[#EFF8FF] shadow-2xl w-full max-w-[554px] flex items-center flex-col rounded-xl gap-5 py-6 p-4 border-[#B2DDFF] border-[1px] justify-center">
      <ListItem
        items={emojis}
        gap="gap-3 flex-wrap "
        renderMethod={(i: { img: any; color: string }) => <EmojiCard {...i} />}
      />

      <ListItem
        gap="gap-2"
        renderMethod={({ Icon }: { Icon: any }) => (
          <button className="bg-white border-[#D1E9FF] border-[1px] aspect-square p-2 rounded-full">
            {Icon}
          </button>
        )}
        items={icons}
      />
    </div>
  );
};

export default EmojisComponent;
