import { useLocation } from "@remix-run/react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChildrenProps } from "~/interfaces";
import { BackToTop } from "./buttons";

export default function Layout({ children }: ChildrenProps) {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={location.pathname}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full items-center justify-center"
      >
        <main className="container mx-auto">{children}</main>
      </m.div>
      <BackToTop />
    </LazyMotion>
  );
}
