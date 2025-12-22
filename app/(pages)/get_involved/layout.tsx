import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Discover meaningful ways to get involved with Trending Top Empowerment Foundation by volunteering, partnering with us, or supporting our programmes that strengthen communities and improve lives.",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
