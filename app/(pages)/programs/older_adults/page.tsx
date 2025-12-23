import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/older.jpeg",

    text: [
      `Ensuring our seniors live with dignity, care, and the emotional support they deserve .`,
    ],
    title: `Support for Older Adults`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`At Trending Top Empowerment Foundation, we recognize that many elderly individuals lack strong family support networks. Since 2019, we have made it a priority to check on them, providing a bridge to essential resources and emotional stability for those who might otherwise be overlooked .`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>

            <ul>
              {[
                {
                  title: `Nutritional Support`,
                  text: `Providing essential food items to help older adults meet their daily dietary needs.`,
                },
                {
                  title: `Healthcare Assistance`,
                  text: `Distributing healthcare items to support physical wellbeing and comfort.`,
                },
                {
                  title: `Essential Clothing`,
                  text: `Giving clothing to seniors to ensure they are well-provided for in every season.`,
                },
                {
                  title: `Emotional Guidance`,
                  text: `Offering companionship and emotional support to combat loneliness and isolation .`,
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
                  title: `Isolated Seniors`,
                  text: `Older adults who lack strong family or community support systems.`,
                },
                {
                  title: `Low-Income Elderly`,
                  text: `Seniors facing financial difficulty in accessing basic needs like food and medicine.`,
                },
                {
                  title: `Community Elders`,
                  text: `Aging individuals across our operational regions who require consistent check-ins and care.`,
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
          <h2>Our Approach</h2>
          <div className={styles.row}>
            {[
              {
                title: `Priority Check-ins`,
                text: `We make it a priority to visit and monitor the wellbeing of the elderly in our communities.`,
              },
              {
                title: `Compassionate Care`,
                text: `Every interaction is driven by respect and a deep sense of service .`,
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
                text: `Enhancing the physical health of seniors through consistent access to food and medical supplies.`,
              },
              {
                title: `Reduced Isolation`,
                text: `Providing a sense of belonging and care to those who lack family presence.`,
              },
              {
                title: `Strengthened Confidence`,
                text: `Helping older adults live with greater stability and the knowledge that their community cares.`,
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
              <p>{`Your support allows us to expand our reach and provide more seniors with the essential care and dignity they deserve. Join the Trending Top Empowerment Foundation in showing up for our elders.`}</p>
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
