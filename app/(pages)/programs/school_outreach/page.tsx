import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "../styles.module.scss";
import Link from "next/link";

export default function Page() {
  const data: TopperType = {
    img: "/assets/programs/school2.jpg",

    text: [
      "Empowering the next generation by providing the tools and encouragement they need to stay focused on learning.",
    ],
    title: `School Outreach & Educational Support`,
  };

  return (
    <>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>The Heart of Our Mission</h1>
          <p>{`Education is a cornerstone of our mission. Since 2019, Trending Top Empowerment Foundation has been dedicated to visiting schools across Nigeria to address the lack of basic learning materials that often hinders a child's academic progress. We believe that every student, regardless of their background, deserves the opportunity to grow and build a better future.`}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>What we do</h2>
            <p>{`We provide essential supplies to ensure students can learn with dignity and confidence. Our distribution includes:`}</p>
            <ul>
              {[
                {
                  title: `Learning Materials`,
                  text: `Books, writing materials, and school bags.`,
                },
                {
                  title: `Health & Hygiene`,
                  text: `Sanitary items to support students' wellbeing.`,
                },
                {
                  title: `Welfare`,
                  text: `Snacks and other essentials to keep students encouraged.`,
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
                  title: `School Children`,
                  text: `Students in primary and secondary schools who face financial difficulties.`,
                },
                {
                  title: `Underprivileged Families`,
                  text: `Families struggling to provide basic educational needs for their children.`,
                },
                {
                  title: `Educational Institutions`,
                  text: `Schools in underserved communities that require additional support to keep students engaged.`,
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
                title: `Consistent Outreach`,
                text: `We don't just visit once; we work consistently across different regions including Lagos, Kano, Ogun, and more to ensure ongoing support .`,
              },
              {
                title: `Direct Engagement`,
                text: `We visit schools in person to deliver materials and spend time encouraging the students.`,
              },
              {
                title: `Structured Programs`,
                text: `Our outreach is organized and structured to address specific challenges like hunger and the lack of school materials.`,
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
                title: `Academic Focus`,
                text: `Our support helps students stay encouraged and focused on their studies.`,
              },
              {
                title: `Confidence Building`,
                text: `We strengthen the wellbeing and confidence of young learners through consistent presence.`,
              },
              {
                title: `Community Trust`,
                text: `Our efforts have earned the trust and appreciation of school leaders and families across our operational states.`,
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
              <h2>Help Us Keep a Child in School.</h2>
              <p>
                Your support can provide the books, bags, and supplies a student
                needs to succeed. Join us in bringing hope to classrooms across
                Nigeria.
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
