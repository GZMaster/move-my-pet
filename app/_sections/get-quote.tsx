import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetQuote() {
  return (
    <section className="w-full h-[510px] md:h-[430px] flex flex-col md:grid md:grid-cols-2 ">
      <div className="bg-secondary w-full flex justify-center items-center max-md:py-10">
        <div className="container flex flex-col gap-5 text-white max-w-[540px]">
          <h2 className="font-heading font-bold text-4xl">
            Do you need help moving your pet?
          </h2>
          <p>Contact us for a quick and easy solution.</p>
          <Button className="w-fit" asChild>
            <Link href="/contact-us">Get Quote</Link>
          </Button>
        </div>
      </div>
      <div className=" w-full relative h-full">
        <div className="bg-[url(/assets/quote-bg.png)] absolute inset-0 bg-cover bg-center" />
      </div>
    </section>
  );
}
