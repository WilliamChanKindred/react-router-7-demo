import { getRandomBackendQuote, getRandomFrontendQuote } from "~/data";
import type { Route } from "./+types/clientserver";

export async function clientLoader() {
  const quote = await getRandomFrontendQuote();
  return { quote }
}

export async function loader() {
  const quote = await getRandomBackendQuote();
  return { quote };
}

export default function ClientServer({
  loaderData,
}: Route.ComponentProps) {
  const { quote } = loaderData;

  return (
    <>
      <h1>Server-side then Client-side rendering</h1>
      <p>{quote}</p>
    </>
  );
}