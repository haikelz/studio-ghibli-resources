"use client";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <section className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">500</h1>
          <p className="mt-2 text-lg font-medium">Looks like the server has a problem!</p>
        </div>
      </section>
    </div>
  );
}
