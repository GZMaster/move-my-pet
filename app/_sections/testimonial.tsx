import { Button } from "@/components/ui/button";
import { TestimonialCarouselComponent } from "../_components/testimonial-carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Testimonial() {
  return (
    <section
      className="flex container flex-col items-center py-10 md:py-20 gap-20 w-full scroll-m-20"
      id="testimonial"
    >
      <div className="max-w-[480px] flex flex-col items-center">
        <h6 className="text-[#828282] text-[12px] tracking-[2.16px] uppercase">
          testimonials
        </h6>
        <h2 className="text-[#141414] font-bold font-heading text-center text-[40px] leading-[56px]">
          Hear what our customers have to say
        </h2>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <TestimonialCarouselComponent />
      </div>
      <Button
        variant={"outline"}
        className="border-green-500 text-green-500 gap-4 hover:text-green-500/80 hover:bg-green-100"
        size={"lg"}
        asChild
      >
        <Link href="/gallery">
          View our pet gallery <ArrowRightIcon className="text-green-500" />
        </Link>
      </Button>
    </section>
  );
}
