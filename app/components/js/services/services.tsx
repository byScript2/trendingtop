"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

import Link from "next/link";

import { CgDetailsMore } from "react-icons/cg";

export default function Services() {
  const programs: {
    title: string;
    text: string;
    link: string;
    image: string;
  }[] = [
    {
      title: "School Outreach",
      text: "Providing learning materials, school essentials, and encouragement to help children stay motivated and focused on their education.",
      link: "/programs/school_outreach",
      image: "/assets/programs/school.jpeg",
    },
    {
      title: "Street Feeding & Welfare",
      text: "Offering food, water, clothing, and basic necessities to individuals and families facing daily hardship within communities.",
      link: "/programs/street_feeding",
      image: "/assets/programs/feeding.jpeg",
    },
    {
      title: "Orphanage Support",
      text: "Supporting orphanage homes with food items, clothing, hygiene materials, educational supplies, and meaningful interaction.",
      link: "/programs/orphanage_support",
      image: "/assets/programs/orphanage.jpg",
    },
    {
      title: "Youth Empowerment",
      text: "Equipping young people with guidance, opportunities, skill resources, and career information to help them build confidence and direction.",
      link: "/programs/youth_empowerment",
      image: "/assets/programs/youth.avif",
    },
    {
      title: "Support for Older Adults",
      text: "Providing food, healthcare items, clothing, and emotional support to older adults who may lack consistent family care.",
      link: "/programs/older_adults",
      image: "/assets/programs/older.jpeg",
    },
    {
      title: "Emergency Support",
      text: "Responding to urgent needs through feeding, medical assistance, transport help, and short-term financial support.",
      link: "/programs/emergency_support",
      image: "/assets/programs/emergency.jpg",
    },
  ];

  return (
    <div className={styles.main} id="services">
      <div className={styles.underline}>
        <h1>{`Our Work`}</h1>
        <p>{`Our programmes are shaped by real needs within communities, offering practical support, care, and opportunities that help individuals and families navigate everyday challenges.`}</p>
      </div>
      <div className={styles.services}>
        {programs.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.image}>
              <Image src={e.image} alt={e.title} fill />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{e.title}</p>
              <p>{e.text}</p>
              <Link href={e.link} className="action">
                <span>Learn more</span> <CgDetailsMore />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
