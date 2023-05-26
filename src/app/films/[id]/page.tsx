import clsx from "clsx";
import { Metadata } from "next";
import BackButton from "~components/ui/buttons/BackButton";
import LightboxImage from "~components/ui/LightboxImage";
import { configuredOfetch as ofetch } from "~lib/utils/configuredOfetch";
import { BaseFilmsProps, FilmsProps } from "~models";

type DetailFilmProps = {
  data: BaseFilmsProps;
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | undefined> {
  const { id } = params;
  const response: DetailFilmProps = await ofetch(`https://ghibli-api.vercel.app/api/films/${id}`);
  const film = response.data;

  return {
    title: film.title,
    description: film.description,
    openGraph: {
      type: "website",
      url: `https://studio-ghibli-resources.vercel.app/films/${id}`,
      title: film.title,
      description: film.description,
      siteName: `studio-ghibli-resources.vercel.app`,
      images: [
        {
          url: film.image,
          alt: "OG Image",
        },
      ],
    },
    twitter: {
      title: film.title,
      description: film.description,
      site: `https://studio-ghibli-resources.vercel.app/films/${id}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(`https://studio-ghibli-resources.vercel.app/films/${id}`),
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const response: FilmsProps = await ofetch("https://ghibli-api.vercel.app/api/films");
  return response.data.map((item) => ({ id: item.id }));
}

async function getData(id: string): Promise<DetailFilmProps> {
  const response = await ofetch(`https://ghibli-api.vercel.app/api/films/${id}`);
  return response;
}

export default async function DetailFilm({ params }: { params: { id: string } }) {
  const { id } = params;
  const { movie_banner, title, director, producer, release_date, rt_score, description } = (
    await getData(id)
  ).data;

  return (
    <div className="flex w-full items-center justify-center">
      <div className={clsx("flex flex-col items-center justify-center", "md:w-[600px]")}>
        <LightboxImage className="rounded-md" src={movie_banner} alt={title} />
        <h3 className="mb-8 mt-5 text-3xl font-bold">{title}</h3>
        <div className="space-y-2 text-base">
          <p>
            <span className="font-bold">Director</span> {director}
          </p>
          <p>
            <span className="font-bold">Producer:</span> {producer}
          </p>
          <p>
            <span className="font-bold">Release Date:</span> {release_date}
          </p>
          <p>
            <span className="font-bold">Score:</span> {rt_score}
          </p>
          <p>
            <span className="font-bold">Description:</span> {description}
          </p>
        </div>
        <BackButton link="/films" />
      </div>
    </div>
  );
}
