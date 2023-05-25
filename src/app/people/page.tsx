import clsx from "clsx";
import { Metadata } from "next";
import BackButton from "~components/ui/BackButton";
import CardWrapper from "~components/ui/CardWrapper";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { PeopleProps } from "~models";

export const metadata: Metadata = {
  title: "People List",
  description: "Studio Ghibli People list",
  openGraph: {
    type: "website",
    url: "https://studio-ghibli-resources.vercel.app/people",
    title: "People List",
    description: "Studio Ghibli People list",
    siteName: "studio-ghibli-resources.vercel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "People List",
    description: "Studio Ghibli People list",
    site: "https://studio-ghibli-resources.vercel.app/people",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app/people"),
};

async function getData(): Promise<PeopleProps> {
  const response = await ofetch("https://ghibli-api.vercel.app/api/people");
  return response;
}

export default async function People() {
  const people = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">People List</h1>
        <p className="mt-2 text-lg font-medium">Studio Ghibli People list</p>
      </div>
      <section
        className={clsx(
          "mt-8 grid grid-cols-1 grid-rows-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {people.data.map((item) => (
          <CardWrapper key={item.id}>
            <div className="group p-4">
              <h3 className="text-2xl font-bold transition-all group-hover:text-blue-500">
                {item.name}
              </h3>
              <div className="mt-3">
                <p className="text-base">Gender: {item.gender}</p>
                <p>Age: {item.age}</p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackButton link="/" />
    </>
  );
}
