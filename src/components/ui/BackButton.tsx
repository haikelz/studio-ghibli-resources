import { ArrowLeftIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

export default function BackButton({ link }: { link: string }) {
  return (
    <div className="mt-6 flex w-full items-center justify-start">
      <Link href={link}>
        <button
          className={clsx(
            "flex items-center justify-center space-x-1",
            "border-[1.5px] border-white bg-white",
            "rounded-md px-3 py-1.5",
            "font-bold text-black transition-all",
            "hover:bg-black hover:text-white"
          )}
          type="button"
          aria-label="back"
        >
          <ArrowLeftIcon width={20} height={20} />
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
}
