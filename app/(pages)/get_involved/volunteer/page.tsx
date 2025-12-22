import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";
import { FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  EMAIL,
  EMAIL2,
  HQ,
  TEL,
  TEL2,
  TEL3,
  WHATSAPPLINK,
} from "@/app/components/js/config";

export default function Page() {
  const data: TopperType = {
    img: "/assets/box.jpg",
    text: [
      "Volunteers play an important role in the work we do at Trending Top Empowerment Foundation. By giving your time, skills, and support, you help us reach more individuals and communities with care, encouragement, and practical assistance.",
    ],
    title: "Volunteer With Us",
  };
  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h2>Why Volunteer</h2>
          <p>{`Volunteering with us means becoming part of a community that values compassion, respect, and service. Our volunteers support outreach activities, assist during community programmes, and contribute to creating welcoming and supportive environments for those we serve. No matter your background, your willingness to help makes a difference.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>Volunteer Opportunities</h2>
            <p>{`We offer a range of volunteering opportunities, including:`}</p>
            <ul>
              <li>{`Supporting school outreach programmes and educational visits`}</li>
              <li>{`Assisting with street feeding and welfare outreach`}</li>
              <li>{`Participating in orphanage home visits`}</li>
              <li>{`Helping during community empowerment programmes`}</li>
              <li>{`Providing administrative or online support where needed`}</li>
            </ul>
          </div>
          <div className={styles.right}>
            <h2>What to Expect</h2>
            <p>{`Volunteers are guided and supported throughout their involvement with the foundation. Time commitments vary depending on the programme, and participation is always based on availability. We expect all volunteers to act responsibly, respect the dignity of beneficiaries, and uphold the values of the foundation.`}</p>
          </div>
        </div>
        <div className={styles.center}>
          <h2>Get Started</h2>
          <p>{`If you are interested in volunteering with Trending Top Empowerment Foundation, we would be glad to hear from you. Please reach out through our contact form or email to express your interest, and a member of our team will get in touch with you.`}</p>
          <div className={styles.social}>
            <Link href={"#"} className={styles.btn}>
              <FaLocationArrow className={styles.icon} />
              <span>{HQ}</span>
            </Link>
            <Link href={`mailto:${EMAIL}`} className={styles.btn}>
              <BiMailSend className={styles.icon} />
              <span> {`${EMAIL}`}</span>
            </Link>
            <Link href={`mailto:${EMAIL2}`} className={styles.btn}>
              <BiMailSend className={styles.icon} />
              <span>{`${EMAIL2}`}</span>
            </Link>
            <Link
              href={WHATSAPPLINK}
              target={"_blank"}
              rel="noreferrer noopener"
              className={styles.btn}
            >
              <FaWhatsapp className={styles.icon} />
              <span>{`${TEL}`}</span>
            </Link>
            <Link href={`tel:${TEL2}`} className={styles.btn}>
              <FaPhone className={styles.icon} />
              <span> {`${TEL2}`}</span>
            </Link>
            <Link href={`tel:${TEL3}`} className={styles.btn}>
              <FaPhone className={styles.icon} />
              <span> {`${TEL3}`}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
