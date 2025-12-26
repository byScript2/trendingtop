import { Metadata } from "next";
import styles from "./styles.module.scss";
import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";

import Image from "next/image";
import { COMPANYNAME } from "@/app/components/js/config";

import GetInvolved, { Values } from "@/app/components/js/reasons/reasons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Trending Top Empowerment Foundation, a humanitarian organisation established in 2019 and dedicated to supporting communities through empowerment, educational assistance, welfare outreach, and people-centred initiatives across Nigeria.",
};

export default function Page() {
  const data: TopperType = {
    title: "About Us",

    img: "/assets/lady.jpg",

    text: [
      `Trending Top Foundation, now known as Trending Top Empowerment Foundation, is a humanitarian organisation established in 2019 and registered with the Federal Government of Nigeria.`,
      `Registered with the Corporate Affairs Commission (CAC), Nigeria
Registration Number: 9105906`,
      `We are committed to supporting individuals and communities facing everyday challenges. Our work is rooted in compassion, consistency, and a genuine desire to provide practical support that improves wellbeing and creates pathways toward stability and growth.`,
    ],
  };
  return (
    <>
      <Topper data={data} />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Who We Are</h1>

          <p>{`Trending Top Empowerment Foundation works directly with communities to support children, young people, and families facing everyday social and economic challenges.`}</p>
          <p>{`Our work focuses on practical, people-centred support that improves wellbeing and creates opportunities for stability and growth.`}</p>
          <h2>Our Focus Areas</h2>
          <ul>
            {[
              {
                title: `Child and Youth Support`,
                text: `We support vulnerable children and young people through welfare assistance, educational support, and mentorship activities that encourage learning, confidence, and positive development.`,
              },
              {
                title: `Community Welfare and Relief`,
                text: `We provide food items, basic household support, and emergency assistance to low-income families, older people, and individuals experiencing hardship.`,
              },
              {
                title: `Empowerment and Skills Development`,
                text: `We deliver small-scale empowerment initiatives that help individuals build skills, confidence, and pathways toward self-reliance.`,
              },
              {
                title: `Community Engagement and Awareness`,
                text: `We work with local leaders and volunteers to promote inclusion, wellbeing, and shared responsibility within communities.`,
              },
            ].map((e, i) => (
              <p key={i}>
                <b>{`${i + 1}) ${e.title}`} </b>
                <br />
                <span>{e.text}</span>
                <br /> <br />
              </p>
            ))}
          </ul>
          <div className={styles.statement}>
            <div>
              <h2>How We Work</h2>
              <p>{`We listen first, act responsibly, and work transparently. Our programmes are designed with community input and delivered through a volunteer-supported model, ensuring resources reach those who need them most.`}</p>
            </div>
            <div>
              <h2>Who We Serve</h2>
              <ul>
                <li>Vulnerable children and youth</li>
                <li>{`Low-income families`}</li>
                <li>{`Older people and underserved individuals`}</li>
                <li>{`Local communities across Nigeria`}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.statement}>
          <div>
            <h2>{`Our Mission`}</h2>
            <p>{`To support individuals across different age groups through empowerment programmes, educational assistance, welfare outreach, emotional support, and community-focused initiatives that help them progress and live better.`}</p>
          </div>
          <div>
            <h2>{`Our Vision`}</h2>
            <p>{`A society where everyone, regardless of background or circumstance, can access care, support, and opportunities that promote stability, growth, and a better future.`}</p>
          </div>
        </div>
        <Values />
        <div className={styles.box}>
          <div className={styles.image}>
            <Image
              src={"/assets/founder.jpeg"}
              fill
              alt={`Our Founder (Oluwatobiloba Adetoye) - ${COMPANYNAME}`}
            />
          </div>
          <div className={styles.col}>
            <h2>{`Founder's Message`}</h2>
            <p className={styles.italics}>{`Oluwatobiloba Adetoye`}</p>
            <p>
              {`Trending Top Empowerment Foundation was established with a clear commitment to respond to real challenges within our communities. Since 2019, our work has been guided by the belief that support should be consistent, respectful, and genuinely people-focused. We recognise that many individuals and families face circumstances that cannot be handled alone, and our responsibility is to show up with care, structure, and purpose.`}
            </p>
            <p>{`Through our programmes such as school outreach, street feeding and welfare support, orphanage home visits, youth empowerment initiatives, support for older adults, and emergency assistance, we address both immediate needs and long-term wellbeing. Each programme is designed to provide practical help while restoring dignity, confidence, and hope to those we serve.`}</p>
            <p>{`As we move forward, we remain firmly committed to expanding our reach, strengthening our programmes, and deepening our impact across communities. Our focus is not only on what we do, but on how we do it—serving with integrity, accountability, and compassion, while building lasting relationships that contribute to stronger and more resilient communities.`}</p>
          </div>
        </div>
        <GetInvolved />
      </div>
    </>
  );
}
