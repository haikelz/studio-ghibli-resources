import clsx from "clsx";
import { ChildrenProps } from "~/interfaces";

export default function CardWrapper({ children }: ChildrenProps) {
  return (
    <div
      className={clsx(
        "w-full cursor-pointer overflow-hidden rounded-md border-[1.5px] bg-black",
        "border-gray-700 transition-all",
        "hover:scale-95 active:scale-90"
      )}
    >
      {children}
    </div>
  );
}
