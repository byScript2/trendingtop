import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/box.jpg",
    text: [
      "Your support helps Trending Top Empowerment Foundation continue providing care, assistance, and empowerment to individuals and communities facing everyday challenges. Every contribution, no matter the size, plays a role in sustaining our outreach and community-focused programmes.",
    ],
    title: "Support Our Work",
  };
  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h2>Why Your Support Matters</h2>
          <p>{`Donations enable us to respond to real needs through school outreach, street feeding, orphanage support, youth empowerment initiatives, assistance for older adults, and emergency welfare support. Your support helps us provide essential resources, organise outreach activities, and maintain programmes that improve wellbeing and stability within communities.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>Ways to Donate</h2>
            <p>{`You can support our work through:`}</p>
            <ul>
              <li>{`One-time financial donations`}</li>
              <li>{`Ongoing or periodic support`}</li>
              <li>{`In-kind donations such as food items, clothing, educational materials, or hygiene supplies`}</li>
            </ul>
            <p>{`Our team is available to guide you on the most suitable way to contribute.`}</p>
          </div>
          <div className={styles.right}>
            <h2>Transparency & Accountability</h2>
            <p>{`We are committed to using all donations responsibly and transparently. Contributions are directed towards programme delivery, outreach activities, and community support, in line with our values of integrity and accountability.`}</p>
          </div>
        </div>
        <div className={styles.center}>
          <h2>Donation Details</h2>
          <p>{`To make a donation or enquire about contribution options, please use the contact information provided on this page. Our team will be happy to assist and acknowledge your support.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>Bank Transfer</h2>
            <p>{`Bank name:`}</p>
            <p>{`Account name:`}</p>
            <p>{`Account number:`}</p>
          </div>
          <div className={styles.right}>
            <h2>Online Checkout</h2>
            <Link href={"#"} className="action">
              Donate Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
