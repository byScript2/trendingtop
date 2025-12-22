import Image from "next/image";
import styles from "./styles.module.scss";
import { COMPANYNAME } from "../config";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <Image
          src={"/assets/happy.png"}
          alt={`Happy Children - ${COMPANYNAME}`}
          fill
        />
      </div>
      <div className={styles.front}>
        <div className={styles.left}>
          <Image src={"/assets/aid.jpg"} alt={`About ${COMPANYNAME}`} fill />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2>{`You’re Welcome Here`}</h2>
          </div>
          <div className={styles.others}>
            <p>{`Trending Top Empowerment Foundation is built on the belief that support should feel human, accessible, and sincere. We show up for individuals and families facing everyday challenges, offering practical help, encouragement, and a sense of belonging through community outreach and empowerment initiatives. Our focus is on being present, listening, and providing care that helps people regain stability and move forward with confidence.`}</p>
          </div>
          <div className={styles.actions}>
            <Link href={"/about"} className="action">
              About us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
