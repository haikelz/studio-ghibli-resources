"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useScroll } from "~hooks";

export default function BackToTopButton() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 200 ? (
        <button
          className={clsx(
            "fixed bottom-5 right-4 z-10",
            "rounded-md bg-gray-200 p-2 transition-all",
            "hover:bg-gray-300"
          )}
          type="button"
          aria-label="back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon width={24} height={24} className="text-black " />
        </button>
      ) : null}
    </>
  );
}
