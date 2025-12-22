import Image from "next/image";

import styles from "./Carousel.module.scss";

import Link from "next/link";
import { COMPANYNAME } from "../config";

const Carousel: React.FC = () => {
  return (
    <div className={styles.banner} id="banner">
      <div className={styles.box} id="box">
        <div className={styles.imgBox}>
          <Image
            src={"/assets/kids.jpg"}
            fill
            alt={`${COMPANYNAME} outreach programs`}
          />
        </div>

        <div className={styles.text}>
          <div className={styles.items}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>{`Supporting communities through compassion, empowerment, and care.`}</h1>
          <div className={styles.context}>
            <span>{`Humaniterian Aid. `}</span>
            <span>{`Education.`}</span>
            <span>{`Welfare.`}</span>
          </div>
          <div className={styles.actions}>
            <Link href={"/about_us"} className="action">
              Learn More
            </Link>
            <Link href={"/get_involved"} className="action">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface TopperType {
  img: string;
  title: string;
  text: string[];
}
interface TopperProp {
  data: TopperType;
}
export const Topper: React.FC<TopperProp> = ({ data }) => {
  return (
    <div className={`${styles.holder} ${styles.topper}`}>
      <div className={`${styles.carousel} ${styles.scrolled} `}>
        <div className={styles.img}>
          <Image src={data.img} fill alt={COMPANYNAME} />
        </div>

        <div className={styles.text}>
          <h1>{data.title}</h1>

          {data.text.map((e, i) => (
            <p className={styles.smText} key={i}>
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
