import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/orphanage.jpg",

    text: [
      `Bringing hope, interaction, and essential supplies to children to ensure they feel a true sense of belonging.`,
    ],
    title: `Orphanage Home Support`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`At Trending Top Empowerment Foundation, we believe every child deserves care and opportunities to grow regardless of their background. Our orphanage outreach program is driven by compassion and a long-term commitment to uplifting children living in care homes across Nigeria. We visit these homes not just to deliver items, but to provide the emotional guidance and stability these children need to thrive.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>

            <ul>
              {[
                {
                  title: `Food & Nutrition`,
                  text: `We deliver essential food items to ensure children have access to healthy meals.`,
                },
                {
                  title: `Clothing & Essentials`,
                  text: `We provide clothing and basic hygiene materials for daily wellbeing.`,
                },
                {
                  title: `Educational Supplies`,
                  text: `We distribute books, writing materials, and school bags to support their learning journey.`,
                },
                {
                  title: `Emotional Support`,
                  text: `We spend quality time interacting with the children to provide encouragement and care.`,
                },
              ].map((e, i) => (
                <li key={i}>
                  <b>{`${e.title}: `}</b>
                  {e.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <h2>Supporting the Most Vulnerable in Our Society</h2>
            <p>{`This program is specifically designed to support:`}</p>
            <ul>
              {[
                {
                  title: `Orphaned Children`,
                  text: `Children living in registered homes who require consistent material and emotional support.`,
                },
                {
                  title: `Care Facility Staff`,
                  text: `Assisting homes with the resources they need to maintain a high standard of care.`,
                },
                {
                  title: `Vulnerable Youths`,
                  text: `Providing guidance and a sense of stability to young people within the orphanage system.`,
                },
              ].map((e, i) => (
                <li key={i}>
                  <b>{`${e.title}: `}</b>
                  {e.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.center} style={{ width: "100%" }}>
          <h2>A Commitment to Consistent Service</h2>
          <div className={styles.row}>
            {[
              {
                title: `Direct Interaction`,
                text: `Our team makes it a priority to spend time with the children, fostering a sense of belonging through social interaction.`,
              },
              {
                title: `Structured Delivery`,
                text: `We provide structured programs that ensure essential needs like food and education are met consistently.`,
              },
              {
                title: `Regional Presence`,
                text: `We extend our orphanage support across our operational states, including Lagos, Kano, Ogun, and Abuja.`,
              },
            ].map((e, i) => (
              <div key={i}>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.center}>
          <h2>Building Stability and Creating Lasting Change</h2>
          <div>
            {[
              {
                title: `Improved Wellbeing`,
                text: `Our hygiene and food supplies strengthen the health and confidence of the children.`,
              },
              {
                title: `Educational Encouragement`,
                text: `Providing school materials helps children stay focused on their learning and future growth.`,
              },
              {
                title: `Emotional Stability`,
                text: `Consistent visits help children find stability and the strength to handle life’s challenges.`,
              },
            ].map((e, i) => (
              <p key={i}>
                <b>{`${e.title}: `}</b>
                {e.text}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.row}>
            <div>
              <h2>Join Us in Making a Difference Today</h2>
              <p>{`Your support allows us to reach more orphanages and provide the care these children deserve. Together, we can help them find stability and build a better future.`}</p>
              <Link href={"/get_involved/donate"} className="action">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
