import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import Layout from "~/components/ui/layout";
import LightboxImage from "~/components/ui/lightbox-image";

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

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Studio Ghibli Resources",
    },
    { description: "A Website that containts Studio Ghibli resources" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-hidden rounded-md">
          <LightboxImage
            className={clsx("h-[250px w-[400px] rounded-md", "md:h-[250px]")}
            src="https://cdn.myanimelist.net/images/company/21.png"
            alt="Studio Ghibli"
          />
        </div>
        <h1 className="my-4 text-3xl font-bold">Studio Ghibli Resources</h1>
        <ul
          className={clsx(
            "grid grid-cols-3 grid-rows-1 gap-5",
            "md:flex md:items-center md:justify-center"
          )}
        >
          {linkList.map((item) => (
            <Link
              className={clsx(
                "text-base font-medium underline-offset-4",
                "hover:font-semibold hover:underline"
              )}
              key={item.id}
              to={item.route}
            >
              <li>
                <span className="after:content-['_↗']">{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
