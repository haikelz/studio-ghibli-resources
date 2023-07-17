import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import clsx from "clsx";

export function BackToPreviousButton({ link }: { link: string }) {
  return (
    <div className="mt-6 flex w-full items-center justify-start">
      <Link to={link}>
        <button
          type="button"
          aria-label="back"
          className={clsx(
            "flex items-center justify-center space-x-1",
            "border-[1.5px] border-gray-200 bg-gray-200",
            "rounded-md px-3 py-1.5",
            "font-bold text-black transition-all",
            "hover:bg-black hover:text-gray-100"
          )}
        >
          <ArrowLeftIcon width={20} height={20} />
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
}
