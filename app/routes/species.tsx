import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import CardWrapper from "~/components/ui/CardWrapper";
import { BackToPreviousButton } from "~/components/ui/buttons";
import { SpeciesProps } from "~/interfaces";
import { ofetch } from "~/lib/utils/configuredOfetch";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "New Remix App",
      name: "Studio Ghibli Species list",
    },
  ];
};

export async function loader() {
  const response: SpeciesProps = await ofetch(
    "https://ghibli-api.vercel.app/api/species"
  );
  return json({ species: response });
}

export default function Species() {
  const { species } = useLoaderData<typeof loader>();

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
                <p className="text-base">
                  <span className="font-semibold">Name: </span>
                  {item.name}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Classification: </span>
                  {item.classification}
                </p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackToPreviousButton link="/" />
    </>
  );
}
