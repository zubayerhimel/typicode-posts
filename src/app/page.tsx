import PostTimeLine from "@/components/post-time-line";

export default async function Home() {
  return (
    <main className='container p-24 max-w-4xl mx-auto'>
      <PostTimeLine />
    </main>
  );
}
