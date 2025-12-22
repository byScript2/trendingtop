"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./nav.module.scss";

import { usePathname } from "next/navigation";
import { COMPANYNAME } from "@/app/components/js/config";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const pathname = usePathname();
  const links: {
    text: string;
    url: string;
    links: { text: string; url: string }[];
  }[] = [
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

  useEffect(() => {
    function closeView() {
      setShowNav(false);
    }
    closeView();
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.left}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} fill alt={COMPANYNAME} />
        </div>
      </Link>
      {!showNav ? (
        <BiMenuAltRight
          className={styles.icon}
          onClick={() => setShowNav(!showNav)}
        />
      ) : (
        <GrClose className={styles.icon} onClick={() => setShowNav(!showNav)} />
      )}
      <div
        className={showNav ? styles.right : `${styles.right} ${styles.hide}`}
      >
        <ul>
          {links.map((e, i) => (
            <li className={e.links.length > 0 ? styles.box : ""} key={i}>
              <Link href={e.url}>{e.text}</Link>
              {e.links.length > 0 ? (
                <ul className={styles.innerLinks}>
                  {e.links.map((e, i) => (
                    <li key={i}>
                      <Link href={e.url}>{e.text}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
        <Link href={"/get_involved/donate"} className={styles.action}>
          Donation
        </Link>
      </div>
    </nav>
  );
}
