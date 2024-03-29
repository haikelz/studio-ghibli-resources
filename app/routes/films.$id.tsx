import { LoaderArgs, V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import { BackToPrevious } from "~/components/ui/buttons";
import Layout from "~/components/ui/layout";
import LightboxImage from "~/components/ui/lightbox-image";
import { BaseFilmsProps } from "~/interfaces";
import { ofetch } from "~/lib/utils/configured-ofetch";

type DetailFilmProps = {
  data: BaseFilmsProps;
};

export async function loader({ params }: LoaderArgs) {
  const { id } = params;

  const response: DetailFilmProps = await ofetch(
    `https://ghibli-api.vercel.app/api/films/${id}`
  );

  return json({ detailFilm: response.data });
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: data?.detailFilm.title,
    },
    { description: data?.detailFilm.description },
  ];
};

export default function DetailFilm() {
  const { detailFilm } = useLoaderData<typeof loader>();
  const {
    movie_banner,
    title,
    director,
    producer,
    release_date,
    rt_score,
    description,
  } = detailFilm;

  return (
    <Layout>
      <div className="flex w-full items-center justify-center">
        <div
          className={clsx(
            "flex flex-col items-center justify-center",
            "md:w-[600px]"
          )}
        >
          <LightboxImage
            className="rounded-md"
            src={movie_banner}
            alt={title}
          />
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
          <BackToPrevious link="/films" />
        </div>
      </div>
    </Layout>
  );
}
