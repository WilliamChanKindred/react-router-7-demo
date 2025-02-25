import { Form } from "react-router";
import type { Route } from "./+types/server";
import { getRandomBackendQuote } from "~/data";

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  
  const password = "my_secret_database_password";
  console.log(`Submitting quote "${title}" using database password "${password}"`);

  return { title: title?.toString() ?? "" };
}

export async function loader() {
  const quote = await getRandomBackendQuote();
  return { quote };
}

export default function Server({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { quote } = loaderData;

  return (
    <>
      <h1>Server-side rendering</h1>
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