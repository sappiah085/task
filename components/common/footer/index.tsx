import React from "react";
import ListItem from "../list";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex items-center py-8 bg-[#F9FAFB] justify-around text-[#667085]">
      © 2023 ClearLink. All rights reserved.
      <ListItem
        items={[
          { icon: <FaLinkedin /> },
          { icon: <FaTwitter /> },
          { icon: <FaFacebook /> },
          { icon: <FaInstagram /> },
          { icon: <FaGithub /> },
          { icon: <FaYoutube /> },
        ]}
        gap="gap-2"
        renderMethod={({ icon }: { icon: any }) => (
          <a className="text-2xl" href="/">
            {icon}
          </a>
        )}
      />
    </footer>
  );
};

export default Footer;
