import clsx from "clsx";
import { Metadata } from "next";
import BackButton from "~components/ui/BackButton";
import CardWrapper from "~components/ui/CardWrapper";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { LocationsProps } from "~models";

export const metadata: Metadata = {
  title: "Locations List",
  description: "Studio Ghibli locations",
  openGraph: {
    type: "website",
    url: "https://studio-ghibli-resources.vercel.app/locations",
    title: "Locations List",
    description: "Studio Ghibli Locations list",
    siteName: "studio-ghibli-resources.vercel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "Locations List",
    description: "Studio Ghibli Locations list",
    site: "https://studio-ghibli-resources.vercel.app/locations",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app/locations"),
};

async function getData(): Promise<LocationsProps> {
  const response = await ofetch("https://ghibli-api.vercel.app/api/locations");
  return response;
}

export default async function Locations() {
  const locations = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">Locations List</h1>
        <p className="mt-2 text-lg font-medium">Studio Ghibli Locations list</p>
      </div>
      <section
        className={clsx(
          "mt-8 grid grid-cols-1 grid-rows-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {locations.data.map((item) => (
          <CardWrapper key={item.id}>
            <div className="group p-4">
              <h3 className="text-2xl font-bold transition-all group-hover:text-blue-500">
                {item.name}
              </h3>
              <div className="mt-3">
                <p className="text-base">Climate: {item.climate}</p>
                <p>Terrain: {item.terrain}</p>
                <p>Surface Water: {item.surface_water}</p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackButton link="/" />
    </>
  );
}
