import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import CardWrapper from "~/components/ui/CardWrapper";
import Layout from "~/components/ui/Layout";
import { BackToPreviousButton } from "~/components/ui/buttons";
import { ofetch } from "~/lib/utils/configuredOfetch";
import { PeopleProps } from "~/models";

export const meta: V2_MetaFunction = () => {
  return [{ title: "People List", description: "Studio Ghibli People list" }];
};

export async function loader() {
  const response: PeopleProps = await ofetch(
    "https://ghibli-api.vercel.app/api/people"
  );
  return json({ people: response });
}

export default function People() {
  const { people } = useLoaderData<typeof loader>();

  return (
    <Layout>
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
                  <span className="font-semibold">Gender: </span>
                  {item.gender}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Age: </span>
                  {item.age}
                </p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </section>
      <BackToPreviousButton link="/" />
    </Layout>
  );
}
