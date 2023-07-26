import { ArrowUpIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useScroll } from "~/hooks";
import { m } from "framer-motion";

export function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 200 ? (
        <button
          type="button"
          aria-label="back to top"
          className={clsx(
            "fixed bottom-4 right-4 z-10",
            "rounded-md bg-gray-200 p-2 transition-all",
            "md:bottom-6 md:right-6",
            "hover:bg-gray-300"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon width={24} height={24} className="text-black " />
        </button>
      ) : null}
    </>
  );
}
