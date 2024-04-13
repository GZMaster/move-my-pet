import Footer from "../_sections/footer";
import GetQuote from "../_sections/get-quote";
import Navbar from "./_components/navbar";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between pt-[80px]">
          {children}
          <GetQuote />
        </main>
        <Footer />
    </>
  );
}
