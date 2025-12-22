import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/feeding2.jpg",

    text: [
      "Going into streets and communities to provide food, water, and basic necessities to those who struggle to meet daily needs.",
    ],
    title: `Street Feeding & Welfare Outreach`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`Driven by compassion and the understanding that hunger is a challenge many cannot handle alone, our Street Feeding initiative addresses the immediate needs of individuals in various regions. Since 2019, we have worked consistently to reach those facing financial difficulty and food insecurity.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>

            <ul>
              {[
                {
                  title: `Food Distribution`,
                  text: `Providing nutritious meals to children, youths, and older adults in local communities.`,
                },
                {
                  title: `Clean Water`,
                  text: `Ensuring access to bottled or sachet water as part of our welfare packages.`,
                },
                {
                  title: `Essential Clothing`,
                  text: `Distributing clothes to individuals and families who lack basic attire.`,
                },
                {
                  title: `Welfare Packages`,
                  text: `Providing basic daily necessities to those in underserved areas.`,
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
                  title: `Homeless Individuals`,
                  text: `Children and youths living or working on the streets.`,
                },
                {
                  title: `The Elderly`,
                  text: `Older adults who lack strong family support and struggle to meet daily nutritional needs.`,
                },
                {
                  title: `Low-Income Families`,
                  text: `Households going through severe financial difficulty.`,
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
                title: `Community Presence`,
                text: `We physically go into streets and neighborhoods to reach people where they are.`,
              },
              {
                title: `Regional Reach`,
                text: `Our outreach extends across Lagos, Kano, Ogun, Oyo, Osun, Abuja (FCT), and Ondo State.`,
              },
              {
                title: `Dignity and Respect`,
                text: `Every interaction is guided by our core values of respect and community commitment.`,
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
                title: `Hunger Relief`,
                text: `Reducing the immediate burden of hunger for vulnerable community members.`,
              },
              {
                title: `Community Hope`,
                text: `Bringing a sense of hope and belonging to those facing difficult seasons.`,
              },
              {
                title: `Welfare Support`,
                text: `Strengthening the overall wellbeing of the communities we serve.`,
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
              <p>
                {`Your contribution helps us provide the next meal for someone in need. Join Trending Top Empowerment Foundation in our mission to show up for those who need us most.`}
              </p>
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
