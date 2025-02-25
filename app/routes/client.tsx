import { Form } from "react-router";
import type { Route } from "./+types/client";
import { getRandomFrontendQuote } from "~/data";

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  
  const apiKey = "my_secret_api_key";
  console.log(`Submitting quote "${title}" with API key "${apiKey}"`);

  return { title: title?.toString() ?? "" };
}

export async function clientLoader() {
  const quote = await getRandomFrontendQuote();
  return { quote }
}

export default function Client({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { quote } = loaderData;

  return (
    <>
      <h1>Client-side rendering</h1>
      <p>{quote}</p>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
      {actionData ? (
        <p>"{actionData.title}" submitted</p>
      ) : null}
    </>
  );
}