import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the programmes and community initiatives of Trending Top Empowerment Foundation, focused on empowerment, education support, welfare outreach, and practical assistance for individuals and families across Nigeria.",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
