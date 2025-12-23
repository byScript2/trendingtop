import { Metadata } from "next";
import styles from "./styles.module.scss";
import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";

import Image from "next/image";
import { COMPANYNAME } from "@/app/components/js/config";

import GetInvolved, { Values } from "@/app/components/js/reasons/reasons";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View moments from outreach activities, community programmes, and initiatives carried out by Trending Top Empowerment Foundation, highlighting our work and engagement across communities.",
};

export default function Page() {
  const data: TopperType = {
    title: "Moments From Our Work",

    img: "/images/1.jpg",

    text: [
      `This gallery highlights moments from our outreach activities, community programmes, and initiatives across different communities. Each image reflects the people we serve, the connections we build, and the practical support we provide through our ongoing work.`,
    ],
  };
  const images: string[] = [
    `2.jpg`,
    `3.jpg`,
    `4.jpg`,
    `5.jpg`,
    `6.jpg`,
    `7.jpg`,
    `8.jpg`,
    `9.jpg`,
    `10.jpg`,
    `11.jpg`,
    `12.jpeg`,
  ];
  return (
    <>
      <Topper data={data} />
      <div className={styles.gallery}>
        {images.map((e, i) => (
          <div key={i}>
            <Image src={`/images/${e}`} alt="" fill />
          </div>
        ))}
      </div>
    </>
  );
}
