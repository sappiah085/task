import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import DropLikeBtn from "../button/dropLikeBtn";
import ListItem from "../list";
import NormalBtn from "../button/nBtn";
const links = ["Products", "Solutions", "Resources", "Prices"];
const btn = [
  {
    label: "Talk to sales",
    bgC: "bg-white",
    textColor: "text-black border-[1px]",
  },
  {
    label: "Sign up for free",
    bgC: "bg-[#175CD3]",
    textColor: "text-white",
  },
];
function Navbar() {
  return (
    <header className="fixed  z-40 mx-auto  border-[1px] bg-lightGrey rounded-[300px] border-darkGrey    p-4  top-4 w-full max-w-[1472px] flex items-center  py-5">
      <nav className="flex w-full items-center justify-between">
        <a href="/">
          <Image src={logo} className="h-[28px]" alt="logo" />
        </a>
        <ListItem
          gap="gap-5"
          items={links}
          renderMethod={(i: string) => <DropLikeBtn label={i} />}
        />
        <ListItem
          gap="gap-1"
          items={btn}
          renderMethod={(i: (typeof btn)[0]) => <NormalBtn {...i} />}
        />
      </nav>
    </header>
  );
}

export default Navbar;
