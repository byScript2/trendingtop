import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/emergency.jpg",

    text: [
      `Providing urgent assistance, financial relief, and medical support to individuals and families facing sudden crises.`,
    ],
    title: `Emergency & Welfare Support`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`Life often presents challenges that cannot be handled alone—hunger, medical emergencies, or sudden financial stress . At Trending Top Empowerment Foundation, we provide a safety net through structured emergency programs designed to uplift, encourage, and support those in their most difficult seasons .`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>

            <ul>
              {[
                {
                  title: `Urgent Feeding`,
                  text: `Providing immediate food assistance to those struggling to meet daily needs.`,
                },
                {
                  title: `Medical Support`,
                  text: `Assisting with medical needs and healthcare access for individuals in crisis.`,
                },
                {
                  title: `Financial Assistance`,
                  text: `Providing small financial support to families and individuals for urgent requirements.`,
                },
                {
                  title: `Transport Help`,
                  text: `Offering assistance with transportation for those needing urgent movement or relocation.`,
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
                  title: `Distressed Families`,
                  text: `Households facing sudden emotional or financial difficulty.`,
                },
                {
                  title: `Individuals in Crisis`,
                  text: `People dealing with hunger, medical emergencies, or limited access to basic needs.`,
                },
                {
                  title: `The Displaced`,
                  text: `Vulnerable community members needing immediate welfare outreach to find stability.`,
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
                title: `Rapid Response`,
                text: `We aim to show up for communities through consistent outreach and welfare programs.`,
              },
              {
                title: `Sincere Dedication`,
                text: `Serving communities with sincerity and a goal to improve lives long-term .`,
              },
              {
                title: `Broad Regional Reach`,
                text: `Providing emergency relief across Lagos, Kano, Ogun, Oyo, Osun, Ondo, and Abuja (FCT) .`,
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
                title: `Immediate Relief`,
                text: `Addressing urgent challenges like hunger and medical stress before they escalate .`,
              },
              {
                title: `Restored Hope`,
                text: `Bringing practical help and encouragement to people during their hardest times.`,
              },
              {
                title: `Community Resilience`,
                text: `Strengthening the wellbeing and confidence of individuals through dedicated welfare support.`,
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
              <p>{`Your donation can be the lifeline for a family in crisis. Help us continue building programs that offer stability and a better future for those in urgent need.`}</p>
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
