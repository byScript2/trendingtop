import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import Body from "./body";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

import { HQ, SOCIALS, TEL, TEL2, TEL3, TEL4 } from "@/app/components/js/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Trending Top Empowerment Foundation for enquiries, partnerships, volunteering opportunities, or general information about our humanitarian work and community programmes.",
};

export default function Page() {
  const data: TopperType = {
    img: "/assets/group.jpg",

    text: [
      "We welcome enquiries, partnerships, and messages from individuals and organisations who would like to connect with Trending Top Empowerment Foundation. Whether you have a question, would like to support our work, or need more information about our programmes, our team is here to listen and respond.",
    ],
    title: "Contact Us",
  };
  return (
    <>
      <Topper data={data} />

      <div className={styles.row}>
        <div className={styles.social}>
          <Link href={"#"} className={styles.btn}>
            <FaLocationArrow className={styles.icon} />
            <span>{HQ}</span>
          </Link>

          <Link href={`#`} className={styles.btn}>
            <FaPhone className={styles.icon} />
            <span> {`${TEL}, ${TEL2}, ${TEL3}`}</span>
          </Link>

          <Link href={`tel:${TEL4}`} className={styles.btn}>
            <FaPhone className={styles.icon} />
            <span> {`Kano State Office: ${TEL4}`}</span>
          </Link>
          <div className={styles.socials}>
            {SOCIALS.map((e, i) => (
              <Link
                href={e.url}
                className={styles.btn}
                key={i}
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <e.Icon className={styles.icon} />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.body}>
          <Body />
        </div>
      </div>
    </>
  );
}
