import Image from "next/image";
import bg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="container pt-10 flex flex-col items-center justify-center">
      <div className="flex flex-col max-w-[700px] w-full items-center gap-6">
        <h2 className="text-center font-heading text-3xl sm:text-5xl font-bold lg:text-[64px] lg:leading-[89.6px]">
          Move your pets with comfort and ease
        </h2>
        <p className="text-center w-2/3">
          We offer a world of worry-free pet travel with our dedicated services.
          Your pets feel at home wherever they go.
        </p>
        <Button size={"lg"} asChild>
          <Link href="/contact-us">Get Quote</Link>
        </Button>
      </div>
      <Image src={bg} priority className="w-full " alt="hero" />
    </section>
  );
}
