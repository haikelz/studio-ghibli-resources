import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import CardWrapper from "~/components/ui/CardWrapper";
import Layout from "~/components/ui/Layout";
import { BackToPreviousButton } from "~/components/ui/buttons";
import { ofetch } from "~/lib/utils/configuredOfetch";
import { VehiclesProps } from "~/models";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Vehicles List",
      description: "Studio Ghibli Vehicles list",
    },
  ];
};

export async function loader() {
  const response: VehiclesProps = await ofetch(
    "https://ghibli-api.vercel.app/api/vehicles"
  );
  return json({ vehicles: response });
}

export default function Vehicles() {
  const { vehicles } = useLoaderData<typeof loader>();

  return (
    <Layout>
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
                <p className="mt-3">
                  <span className="font-bold">Class:</span> {item.vehicle_class}
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
