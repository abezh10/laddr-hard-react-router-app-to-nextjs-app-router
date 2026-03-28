export const starterauthItems = [
  { id: "starter-1", label: "Sample auth record", status: "draft" },
  { id: "starter-2", label: "Another auth record", status: "ready" },
];

export async function loadauthPreview() {
  return Promise.resolve(starterauthItems);
}

export async function saveauthPreview() {
  return Promise.resolve({
    ok: false,
    message: "The auth workflow is intentionally unfinished in React Router App to Next.js App Router.",
  });
}
