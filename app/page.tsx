
import FindUs from "./_sections/find-us";
import Footer from "./_sections/footer";
import GalleryPreview from "./_sections/gallery-preview";
import GetQuote from "./_sections/get-quote";
import Hero from "./_sections/hero";
import { Header } from "./_sections/nav";
import Options from "./_sections/options";
import Services from "./_sections/services";
import Testimonial from "./_sections/testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen flex-col items-center justify-between pt-[80px]">
        <Hero />
        <Services />
        <Options />
        <FindUs />
        <Testimonial />
        <GalleryPreview />
        <GetQuote />
      </main>
      
      <Footer />
    </>
  );
}
