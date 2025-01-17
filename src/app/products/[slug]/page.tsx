import MainDetailPage from "./_components/main-section"

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return <MainDetailPage slug={slug} />
}