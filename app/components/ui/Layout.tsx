import { useLocation, useNavigation } from "@remix-run/react";
import clsx from "clsx";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChildrenProps } from "~/models";
import { BackToTopButton } from "./buttons";

export default function Layout({ children }: ChildrenProps) {
  const location = useLocation();
  const navigation = useNavigation();
  const active = navigation.state !== "idle";

  const ref = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);

  useEffect(() => {
    if (!ref.current) return;
    if (active) setAnimationComplete(false);

    Promise.allSettled(
      ref.current.getAnimations().map(({ finished }) => finished)
    ).then(() => !active && setAnimationComplete(true));
  }, [active, setAnimationComplete]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        role="progressbar"
        aria-hidden={!active}
        aria-valuetext={active ? "Loading" : undefined}
        className="fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse"
      >
        <div
          ref={ref}
          className={clsx(
            "h-full bg-gradient-to-r from-blue-500 to-cyan-500 navigation-all",
            navigation.state === "idle" &&
              animationComplete &&
              "w-0 opacity-0 navigation-none",
            navigation.state === "submitting" && "w-4/12",
            navigation.state === "loading" && "w-10/12",
            navigation.state === "idle" && !animationComplete && "w-full"
          )}
        />
      </div>
      <m.div
        key={location.pathname}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full items-center justify-center"
      >
        <main className="container mx-auto">{children}</main>
      </m.div>
      <BackToTopButton />
    </LazyMotion>
  );
}
