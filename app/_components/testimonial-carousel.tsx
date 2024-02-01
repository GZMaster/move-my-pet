"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import user1 from "@/assets/review/1.png";
import user2 from "@/assets/review/2.png";
import user3 from "@/assets/review/3.png";
import user4 from "@/assets/review/4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";

export function TestimonialCarouselComponent() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {TestimonialData.map((data) => (
          <CarouselItem key={data.id}>
            <TestimonialCard
              id={data.id}
              name={data.name}
              review={data.review}
              avatar={data.avatar}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
const TestimonialData = [
  {
    id: 1,
    name: "Aderinsola Oluwakisi",
    review:
      "“The company helped me to move my cat from Nigeria to Uk. The whole process was seamless. I would definitely recommend their services.”",
    avatar: user1,
  },
  {
    id: 2,
    name: "John Smith",
    review:
      "“I was impressed by the professionalism and care they showed while relocating my dog across the country. Highly recommend their pet transportation services.”",
    avatar: user2,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    review:
      "“Excellent service! They took great care of my parrot during the international relocation. Everything went smoothly from start to finish.”",
    avatar: user3,
  },
  {
    id: 4,
    name: "David Johnson",
    review:
      "“I cannot thank the team enough for safely transporting my hamster to our new home. Their attention to detail and dedication were outstanding.”",
    avatar: user4,
  },
  {
    id: 5,
    name: "Emily Chen",
    review:
      "“The company provided top-notch service in relocating my rabbit. The staff was friendly, and the entire process was stress-free. Highly recommended!”",
    avatar: user3,
  },
];
