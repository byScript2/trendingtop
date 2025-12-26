import { IconType } from "react-icons";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const COMPANYNAME = "Trending Top Empowerment Foundation";

export const EMAIL = `info@trendingtopfoundation.org`;
export const EMAIL2 = `oluwatobiloba.a@trendingtopfoundation.org`;

export const TEL = `+2348162560582`;
export const TEL2 = `+447443012033`;
export const TEL3 = `+2349036502518`;
export const TEL4 = `+2347038766721`;
export const WHATSAPPLINK = `http://wa.me/2348162560582`;

export const HQ = `5 Ibrahim Alabi Street, Ogun State Nigeria`;

export const SOCIALS: { Icon: IconType; url: string }[] = [
  {
    Icon: BsInstagram,
    url: "https://www.instagram.com/trendingtopfoundation/",
  },
  {
    Icon: BsWhatsapp,
    url: WHATSAPPLINK,
  },
  {
    Icon: FaFacebook,
    url: "https://web.facebook.com/people/Trending-Top-Helping-HANDS-FOudation/100071155847111/",
  },
  // {
  //   Icon: BsTelegram,
  //   url: "https://t.me/GC1011",
  // },
  // {
  //   Icon: BsTwitterX,
  //   url: "https://twitter.com/Gbolahuncreatio",
  // },
  {
    Icon: IoMailOutline,
    url: `mailto:${EMAIL}`,
  },
];
