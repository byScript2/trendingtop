"use client";

import styles from "./styles.module.scss";
import { IconType } from "react-icons";

import Link from "next/link";
import { LuHandHeart } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import { BsBox2, BsShieldCheck } from "react-icons/bs";
import { BiHeart, BiTargetLock } from "react-icons/bi";
import { FaHandshake, FaHandsHelping } from "react-icons/fa";
import { HiScale } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";

export default function GetInvolved() {
  const getInvolved: {
    Icon: IconType;
    title: string;
    text: string;
    url: string;
  }[] = [
    {
      Icon: LuHandHeart,
      title: "Volunteer",
      text: "Give your time and skills by supporting outreach activities, community programmes, and ongoing initiatives.",
      url: "/get_involved/volunteer",
    },
    {
      Icon: TbUsersGroup,
      title: "Partner With Us",
      text: "Work with us as an organisation, business, or group to support programmes and create wider community impact.",
      url: "/get_involved/partner",
    },
    {
      Icon: BsBox2,
      title: "Donate",
      text: "Support our work through financial contributions that help fund outreach, welfare support, and empowerment programmes.",
      url: "/donate",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.underline}>
        <h1>{`Get Involved`}</h1>
        <p>{`Your support helps us reach more people and strengthen the communities we serve. There are several meaningful ways to stand with us and contribute to the work we do.`}</p>
      </div>
      <div className={styles.grid} id="reasons">
        {getInvolved.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.icon}>
              <e.Icon />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{e.title}</p>
              <p>{e.text}</p>
              <Link href={e.url} className="action">
                Get involved
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export function Values() {
  const values: {
    title: string;
    text: string;
    icon: IconType;
  }[] = [
    {
      title: "Compassion",
      text: "We approach every individual and community with care, empathy, and understanding, recognising the human story behind every need.",
      icon: BiHeart,
    },
    {
      title: "Respect",
      text: "We treat everyone with dignity, valuing differences and honouring the worth of every person we serve.",
      icon: FaHandshake,
    },
    {
      title: "Service",
      text: "Our work is driven by a commitment to serve selflessly, responding to needs with sincerity, consistency, and responsibility.",
      icon: FaHandsHelping,
    },
    {
      title: "Accountability",
      text: "We remain responsible and transparent in our actions, ensuring that support and resources are used appropriately and effectively.",
      icon: BsShieldCheck,
    },
    {
      title: "Impact",
      text: "We focus on meaningful outcomes that strengthen lives and communities, prioritising long-term benefit over short-term gestures.",
      icon: BiTargetLock,
    },
    {
      title: "Integrity",
      text: "We uphold honesty and strong moral principles in our work, partnerships, and relationships with the communities we serve.",
      icon: HiScale,
    },
    {
      title: "Community Commitment",
      text: "We stay connected to the communities we serve, building trust through presence, collaboration, and sustained engagement.",
      icon: FaUserGroup,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.underline}>
        <h1>{`Get Involved`}</h1>
        <p>{`Your support helps us reach more people and strengthen the communities we serve. There are several meaningful ways to stand with us and contribute to the work we do.`}</p>
      </div>
      <div className={styles.grid} id="reasons">
        {values.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.icon}>
              <e.icon />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{e.title}</p>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
