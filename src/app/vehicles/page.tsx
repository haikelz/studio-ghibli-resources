import clsx from "clsx";
import { Metadata } from "next";
import BackButton from "~components/ui/buttons/BackButton";
import CardWrapper from "~components/ui/CardWrapper";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { VehiclesProps } from "~models";

export const metadata: Metadata = {
  title: "Vehicles List",
  description: "Studio Ghibli Vehicles list",
  openGraph: {
    type: "website",
    url: "https://studio-ghibli-resources.vercel.app/vehicles",
    title: "Vehicles List",
    description: "Studio Ghibli Vehicles list",
    siteName: "studio-ghibli-resources.vercel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "Vehicles List",
    description: "Studio Ghibli Vehicles list",
    site: "https://studio-ghibli-resources.vercel.app/vehicles",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app/vehicles"),
};

async function getData(): Promise<VehiclesProps> {
  const response = await ofetch("https://ghibli-api.vercel.app/api/vehicles");
  return response;
}

export default async function Vehicles() {
  const vehicles = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">Vehicles List</h1>
        <p className="mt-2 text-lg font-medium">Studio Ghibli Vehicles list</p>
      </div>
      <section
        className={clsx(
          "mt-8 grid grid-cols-1 grid-rows-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {vehicles.data.map((item) => (
          <CardWrapper key={item.id}>
            <div className="group p-4">
              <h3 className="mt-1 text-2xl font-bold transition-all group-hover:text-blue-500">
                {item.name}
              </h3>
              <div className="mt-3">
                <p className="text-base">{item.description}</p>
                <p>
                  <span className="font-bold">Class:</span> {item.vehicle_class}
                </p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackButton link="/" />
    </>
  );
}
