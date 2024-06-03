import { json } from "@remix-run/node";

export const loader = async () => {
  return json({
    ok: true,
    message: "Hello from api",
  });
};

export const action = async ({ request }) => {
  const method = request.method;
  switch (method) {
    case "POST":
      return json({ message: "Success", method });
    case "PATCH":
      return json({ message: "Success", method });

    default:
      return new Response("Method not Allowed", { status: 405 });
  }
};
