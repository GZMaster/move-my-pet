import { TestimonialCarouselComponent } from "../_components/testimonial-carousel";
export default function Testimonial() {
  return (
    <section
      className="flex container flex-col items-center py-20 gap-20 w-full scroll-m-20"
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
    </section>
  );
}
