"use client";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASIC_USER);
  console.log(process.env.NEXT_PUBLIC_BASIC_PASSWORD);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ほえ</h1>
    </main>
  );
}
