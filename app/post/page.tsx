export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <p>Query: {q}</p>;
}
