import { useParams } from "@remix-run/react";

export default function DetailFilm() {
  const { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
