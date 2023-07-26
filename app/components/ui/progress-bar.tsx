import { useNavigation } from "@remix-run/react";
import clsx from "clsx";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

const animationCompleteAtom = atom<boolean>(true);

export default function ProgressBar() {
  const navigation = useNavigation();
  const active = navigation.state !== "idle";

  const progressBarRef = useRef<HTMLDivElement>(null);

  const [animationComplete, setAnimationComplete] = useAtom(
    animationCompleteAtom
  );

  useEffect(() => {
    if (!progressBarRef.current) return;
    if (active) setAnimationComplete(false);

    Promise.allSettled(
      progressBarRef.current.getAnimations().map(({ finished }) => finished)
    ).then(() => !active && setAnimationComplete(true));
  }, []);

  return (
    <>
      <div
        role="progressbar"
        aria-hidden={!active}
        aria-valuetext={active ? "Loading...." : "undefine"}
        className="fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse"
      >
        <div
          ref={progressBarRef}
          className={clsx(
            "h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-in-out",
            navigation.state === "idle" &&
              animationComplete &&
              "w-0 opacity-0 transition-none",
            navigation.state === "submitting" && "w-4/12",
            navigation.state === "loading" && "w-10/12",
            navigation.state === "idle" && !animationComplete && "w-full"
          )}
        />
      </div>
    </>
  );
}
