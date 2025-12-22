import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import { GoLocation } from "react-icons/go";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import {
  COMPANYNAME,
  EMAIL,
  EMAIL2,
  HQ,
  TEL,
  TEL2,
} from "@/app/components/js/config";

export default function Footer() {
  const date = new Date();
  const links: {
    text: string;
    url: string;
    links: { text: string; url: string }[];
  }[] = [
    {
      text: "Home",
      url: "/",
      links: [],
    },
    {
      text: "About Us",
      url: "/about_us",
      links: [],
    },
    {
      text: "Our Work",
      url: "/#services",
      links: [
        { text: "School Outreach", url: "/programs/school_outreach" },
        { text: "Street Feeding", url: "/programs/street_feeding" },
        { text: "Orphanage Support", url: "/programs/orphanage_support" },
        { text: "Youth Empowerment", url: "/programs/youth_empowerment" },
        { text: "Support for Older Adults", url: "/programs/older_adults" },
        {
          text: "Emergency & Welfare Support",
          url: "/programs/emergency_support",
        },
      ],
    },

    {
      text: "Get Involved",
      url: "/get_involved",
      links: [
        { text: "Volunteer With Us", url: "/get_involved/volunteer" },
        { text: "Partner With Us", url: "/get_involved/partner" },
        { text: "Donate", url: "/get_involved/donate" },
      ],
    },

    {
      text: "Contact Us",
      url: "/contact_us",
      links: [],
    },
  ];
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.name}>
            <div className={styles.images}>
              <Image src={"/logo.png"} fill alt={COMPANYNAME} />
            </div>
          </div>
          <p>
            {`Trending Top Empowerment Foundation is a humanitarian organisation established in 2019 to support individuals and communities through empowerment, educational support, welfare outreach, and compassionate community initiatives that help people live better and build a more stable future.`}
          </p>
        </div>
        <div className={styles.center}>
          <p>Quick Links</p>
          <ul>
            {links.map((e, i) => (
              <li key={i}>
                <Link href={e.url}>{e.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <p>Head Office</p>
          <p>
            <GoLocation className={styles.icon} /> <span>{HQ}</span>
          </p>
          <p>
            <FiPhoneCall className={styles.icon} /> <span>{TEL}</span>
          </p>
          <p>
            <FiPhoneCall className={styles.icon} /> <span>{TEL2}</span>
          </p>
          <p>
            <FiMail className={styles.icon} /> <span>{EMAIL}</span>
          </p>
          <p>
            <FiMail className={styles.icon} /> <span>{EMAIL2}</span>
          </p>
          <p className={styles.copy}>
            {date.getFullYear()} © - all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
