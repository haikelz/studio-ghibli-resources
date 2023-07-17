import { ChildrenProps } from "~/interfaces";
import BackToTopButton from "./buttons/BackToTopButton";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <main className="container mx-auto">{children}</main>
      </div>
      <BackToTopButton />
    </>
  );
}
