import Link from "next/link";

import styles from "./lost.module.scss";

import Nav from "./(pages)/nav/nav";
import Footer from "./(pages)/footer/footer";

export default function NotFound() {
  return (
    <div>
      <Nav />

      <div className={styles.main}>
        <h1>This link is no longer available</h1>
        <Link href={"/"} className="action">
          Back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
