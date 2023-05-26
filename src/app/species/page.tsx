import clsx from "clsx";
import { Metadata } from "next";
import BackButton from "~components/ui/buttons/BackButton";
import CardWrapper from "~components/ui/CardWrapper";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { SpeciesProps } from "~models";

export const metadata: Metadata = {
  title: "Species List",
  description: "Studio Ghibli Species list",
  openGraph: {
    type: "website",
    url: "https://studio-ghibli-resources.vercel.app/species",
    title: "Species List",
    description: "Studio Ghibli Species list",
    siteName: "studio-ghibli-resources.vercel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "Species List",
    description: "Studio Ghibli Species list",
    site: "https://studio-ghibli-resources.vercel.app/species",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app/species"),
};

async function getData(): Promise<SpeciesProps> {
  const response = await ofetch("https://ghibli-api.vercel.app/api/species");
  return response;
}

export default async function Species() {
  const species = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">Species List</h1>
        <p className="mt-2 text-lg font-medium">Studio Ghibli Species list</p>
      </div>
      <section
        className={clsx(
          "mt-8 grid grid-cols-1 grid-rows-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {species.data.map((item) => (
          <CardWrapper key={item.id}>
            <div className="group p-4">
              <h3
                className={clsx(
                  "mt-1 text-2xl font-bold transition-all",
                  "group-hover:text-blue-500"
                )}
              >
                {item.name}
              </h3>
              <div className="mt-3">
                <p className="text-base">Classification: {item.classification}</p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackButton link="/" />
    </>
  );
}
