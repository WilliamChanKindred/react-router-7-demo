import { getRandomBackendQuote } from "~/data";
import type { Route } from "./+types/static";

export async function loader() {
  const quote = await getRandomBackendQuote();
  return { quote };
}

export default function Static({
  loaderData,
}: Route.ComponentProps) {
  const { quote } = loaderData;

  return (
    <>
      <h1>Static pre-rendering</h1>
      <p>{quote}</p>
    </>
  );
}