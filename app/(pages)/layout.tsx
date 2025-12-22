import { ReactNode } from "react";
import Nav from "./nav/nav";
import Footer from "./footer/footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
}
