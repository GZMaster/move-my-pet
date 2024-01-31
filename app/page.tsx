import Footer from "./_sections/footer";
import GetQuote from "./_sections/get-quote";
import Hero from "./_sections/hero";
import { Header } from "./_sections/nav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-[80px]">
        <Hero />
        <GetQuote />
      </main>
      <Footer />
    </>
  );
}
