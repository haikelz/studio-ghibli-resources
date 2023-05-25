import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import LightboxImage from "~components/ui/LightboxImage";
import { DEFAULT_OG_URL } from "~lib/utils/constants";

export const metadata: Metadata = {
  title: "Studio Ghibli Resources",
  description: "A Website that containts Studio Ghibli resources",
  openGraph: {
    type: "website",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "Studio Ghibli Resources",
    description: "A Website that containts Studio Ghibli resources",
    site: "https://studio-ghibli-resources.vercel.app",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app"),
};

const linkList = [
  {
    id: 1,
    name: "Films",
    route: "/films",
  },
  {
    id: 2,
    name: "Locations",
    route: "/locations",
  },
  {
    id: 3,
    name: "People",
    route: "/people",
  },
  {
    id: 4,
    name: "Species",
    route: "/species",
  },
  {
    id: 5,
    name: "Vehicles",
    route: "/vehicles",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-hidden rounded-md">
        <LightboxImage
          className={clsx("h-[250px w-[400px] rounded-md", "hover:scale-110", "md:h-[250px]")}
          src={DEFAULT_OG_URL}
          alt="Studio Ghibli"
        />
      </div>
      <h1 className="my-4 text-3xl font-bold">Studio Ghibli Resources</h1>
      <ul className="grid grid-cols-3 grid-rows-1 gap-5 md:flex md:items-center md:justify-center">
        {linkList.map((item) => (
          <Link
            className={clsx(
              "text-base font-medium underline-offset-4",
              "hover:font-semibold hover:underline"
            )}
            key={item.id}
            href={item.route}
          >
            <li>
              <span className="after:content-['_↗']">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
