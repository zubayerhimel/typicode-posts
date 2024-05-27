import TimeLine from "@/components/timeline";

export default async function Home() {
  // console.log(userData)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello there</h1>
      <TimeLine />
    </main>
  );
}
