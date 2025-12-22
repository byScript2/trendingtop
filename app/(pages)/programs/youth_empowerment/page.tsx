import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/youth.avif",

    text: [
      `Helping young people progress and live better through skill development, career guidance, and emotional support.`,
    ],
    title: `Youth Empowerment`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`Established in 2019, Trending Top Empowerment Foundation is dedicated to addressing the challenges young people face, including unemployment and emotional stress. We provide a platform for growth, helping youths find stability and build a better future through structured empowerment programs.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>

            <ul>
              {[
                {
                  title: `Career Guidance`,
                  text: `We share job vacancies, opportunities, and career advice through our online community.`,
                },
                {
                  title: `Skill Development`,
                  text: `We organize training sessions and resource sharing to help young people build professional skills.`,
                },
                {
                  title: `Emotional Support`,
                  text: `We offer guidance and stability to youths facing uncertainty or difficult seasons.`,
                },
                {
                  title: `Growth Initiatives`,
                  text: `We run awareness programs and initiatives that encourage long-term progress and confidence.`,
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
            <h2>Supporting Our Society</h2>
            <p>{`This program is specifically designed to support:`}</p>
            <ul>
              {[
                {
                  title: `Unemployed Youths`,
                  text: `Individuals looking for job information and career opportunities.`,
                },
                {
                  title: `Students & Graduates`,
                  text: `Young people seeking skill-building resources to enter the workforce.`,
                },
                {
                  title: `Youths in Distress`,
                  text: `Those facing emotional stress or financial difficulty.`,
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
                title: `Online Community`,
                text: `We maintain an online youth community for fast and consistent updates on job vacancies.`,
              },
              {
                title: `Holistic Mentorship`,
                text: `We address both professional needs and emotional wellbeing to ensure balanced growth.`,
              },
              {
                title: `Widespread Impact`,
                text: `Widespread Impact`,
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
                title: `Economic Empowerment`,
                text: `Helping young people access opportunities that help them find stability.`,
              },
              {
                title: `Increased Confidence`,
                text: `Strengthening the self-assurance of youths through empowerment and skill training.`,
              },
              {
                title: `Better Futures`,
                text: `Creating a society where everyone can access opportunities that help them grow.`,
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
              <p>{`Every young person deserves a chance to succeed. Help us expand our reach and build more programs that improve lives for the next generation.`}</p>
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
