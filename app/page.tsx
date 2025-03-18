import PageProses from "./components/PageProses";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-4xl flex flex-col gap-8">
        <PageProses />
      </main>
    </div>
  );
}