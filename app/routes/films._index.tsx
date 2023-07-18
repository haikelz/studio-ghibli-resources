import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import CardWrapper from "~/components/ui/CardWrapper";
import Layout from "~/components/ui/Layout";
import LightboxImage from "~/components/ui/LightboxImage";
import { BackToPreviousButton } from "~/components/ui/buttons";
import { FilmsProps } from "~/interfaces";
import { ofetch } from "~/lib/utils/configuredOfetch";

export function meta() {
  return [
    {
      title: "Films",
    },
  ];
}

export async function loader() {
  const response: FilmsProps = await ofetch(
    "https://ghibli-api.vercel.app/api/films"
  );

  return json({ films: response });
}

export default function Films() {
  const { films } = useLoaderData<typeof loader>();

  return (
    <Layout>
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
        {films.data.map((item) => {
          const {
            id,
            movie_banner,
            title,
            original_title,
            description,
            rt_score,
          } = item;
          return (
            <CardWrapper key={id}>
              <LightboxImage src={movie_banner} alt={title} />
              <Link to={`/films/${id}`}>
                <div className="group p-4">
                  <span className={clsx("text-sm font-semibold tracking-wide")}>
                    {original_title}
                  </span>
                  <h3
                    className={clsx(
                      "mt-1 text-2xl font-bold transition-all",
                      "group-hover:text-blue-500"
                    )}
                  >
                    {title}
                  </h3>
                  <p className="my-3 line-clamp-4 text-base">{description}</p>
                  <p className="text-base">
                    <span className="font-bold">Score: </span> {rt_score}
                  </p>
                </div>
              </Link>
            </CardWrapper>
          );
        })}
      </section>
      <BackToPreviousButton link="/" />
    </Layout>
  );
}
