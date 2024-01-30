import Footer from "./_sections/footer";
import { Header } from "./_sections/nav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-[80px]"></main>
      <Footer />
    </>
  );
}
