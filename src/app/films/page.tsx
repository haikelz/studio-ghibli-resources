import clsx from "clsx";
import { Metadata } from "next";
import { IBM_Plex_Sans_JP } from "next/font/google";
import Link from "next/link";
import BackButton from "~components/ui/BackButton";
import CardWrapper from "~components/ui/CardWrapper";
import LightboxImage from "~components/ui/LightboxImage";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { FilmsProps } from "~models";

const ibmJP = IBM_Plex_Sans_JP({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Films List",
  description: "Studio Ghibli Films list",
  openGraph: {
    type: "website",
    url: "https://studio-ghibli-resources.vercel.app/films",
    title: "Films List",
    description: "Studio Ghibli Films list",
    siteName: "studio-ghibli-resources.vercel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title: "Films List",
    description: "Studio Ghibli Films list",
    site: "https://studio-ghibli-resources.vercel.app/films",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://studio-ghibli-resources.vercel.app/films"),
};

async function getData(): Promise<FilmsProps> {
  const response = await ofetch("https://ghibli-api.vercel.app/api/films");
  return response;
}

export default async function Films() {
  const film = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">Films List</h1>
        <p className="mt-2 text-lg font-medium">Studio Ghibli Films list</p>
      </div>
      <section
        className={clsx(
          "mt-8 grid grid-cols-1 grid-rows-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {film.data.map((item) => {
          const { id, movie_banner, title, original_title, description, rt_score } = item;
          return (
            <CardWrapper key={id}>
              <LightboxImage src={movie_banner} alt={title} />
              <Link href={`/films/${id}`}>
                <div className="group p-4">
                  <span className={clsx("text-sm font-semibold tracking-wide", ibmJP.className)}>
                    {original_title}
                  </span>
                  <h3
                    className={clsx(
                      "mt-1 text-2xl font-bold transition-all",
                      "cursor-pointer transition-all group-hover:text-blue-500"
                    )}
                  >
                    {title}
                  </h3>
                  <p className="my-3 line-clamp-4 text-base">{description}</p>
                  <p className="text-base">
                    <span className={clsx("hover:text-blue", "font-bold")}>Score:</span> {rt_score}
                  </p>
                </div>
              </Link>
            </CardWrapper>
          );
        })}
      </section>
      <BackButton link="/" />
    </>
  );
}
