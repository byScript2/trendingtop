import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";

import GetInvolved from "@/app/components/js/reasons/reasons";

export default function Page() {
  const data: TopperType = {
    title: "Be Part of the Work",

    img: "/assets/box.jpg",

    text: [
      `There are many meaningful ways to support the mission of Trending Top Empowerment Foundation. Whether through your time, resources, or partnership, getting involved allows you to contribute directly to programmes that strengthen communities, restore dignity, and create lasting impact.`,
    ],
  };
  return (
    <>
      <Topper data={data} />
      <div style={{ borderTop: "2px solid var(--bg)" }}></div>
      <GetInvolved />
    </>
  );
}
