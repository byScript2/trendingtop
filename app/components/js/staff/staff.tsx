"use client";

import styles from "./styles.module.scss";

import { useSlideUp } from "../useslider";
import Image from "next/image";

export default function Staff() {
  const keys: { image: string; name: string; post: string }[] = [
    {
      name: `Blaze Dc`,
      post: "Frame 🖼️ Ambassador",
      image: "/staff/blaze.jpeg",
    },
    {
      name: `Funmilayo Odebode`,
      post: "Consultant",
      image: "/staff/funmilayo.jpeg",
    },
    {
      name: `Prince`,
      post: "Website Developer",
      image: "/staff/prince.jpeg",
    },
  ];
  useSlideUp(["persons"]);

  return (
    <div className={styles.main}>
      <div className={styles.underline}>
        <h1>{`Our Team`}</h1>
      </div>
      <div className={styles.grid} id="persons">
        {keys.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.image}>
              <Image src={e.image} alt={e.name} fill />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{e.name}</p>
              <p>{e.post}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
