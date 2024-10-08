export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <p>Post {id}</p>;
}
