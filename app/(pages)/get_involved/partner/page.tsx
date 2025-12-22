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
      "Partnerships are an important part of how we expand our reach and strengthen our impact. At Trending Top Empowerment Foundation, we collaborate with organisations, groups, and individuals who share a commitment to community wellbeing, dignity, and sustainable support.",
    ],
    title: "Partner With Us",
  };
  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h2>Why Partner With Us</h2>
          <p>{`Partnering with us means working with a foundation that values transparency, accountability, and genuine community engagement. Our approach is people-centred and impact-driven, ensuring that every collaboration contributes positively to the communities we serve.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>Who Can Partner With Us</h2>
            <p>{`We welcome partnerships with:`}</p>
            <ul>
              <li>{`Businesses and corporate organisations`}</li>
              <li>{`Non-profit and humanitarian organisations`}</li>
              <li>{`Faith-based and community groups`}</li>
              <li>{`Educational institutions and social groups`}</li>
            </ul>
            <p>{`Each partnership is built on shared values, mutual respect, and a common goal of making meaningful impact.`}</p>
          </div>
          <div className={styles.right}>
            <h2>Partnership Opportunities</h2>
            <p>{`Partners can support our work in various ways, including:`}</p>
            <ul>
              <li>{`Sponsoring outreach and empowerment programmes`}</li>
              <li>{`Providing resources, materials, or services`}</li>
              <li>{`Collaborating on community development initiatives`}</li>
              <li>{`Supporting awareness and advocacy efforts`}</li>
            </ul>
            <p>{`We are open to discussing partnership ideas that align with our mission and capacity.`}</p>
          </div>
        </div>
        <div className={styles.center}>
          <h2>Get in Touch</h2>
          <p>{`To explore partnership opportunities or discuss how we can work together, please contact us through our partnership enquiry form or reach out directly. We look forward to building purposeful partnerships that create lasting change.`}</p>
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
