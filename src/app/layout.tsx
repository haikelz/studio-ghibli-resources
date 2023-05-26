import clsx from "clsx";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import BackToTopButton from "~components/ui/buttons/BackToTopButton";
import { ChildrenProps } from "~models";
import "./globals.css";

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Studio Ghibli Resources",
  description: "A Website that containts Studio Ghibli resources",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={clsx("bg-[#1c1c1c] p-4 text-gray-100", "md:p-6", inter.className)}>
        <NextTopLoader color="#3B82f6" showSpinner={false} />
        <div className="flex w-full items-center justify-center">
          <main className="container mx-auto">{children}</main>
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
