"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  adoptedIcon,
  collarIcon,
  loveIcon,
  planeIcon,
  vaccineIcon,
} from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ServiceCard from "./service-card";

export function ServiceCarouselComponent() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {ServicesData.map((data) => (
          <CarouselItem key={data.id} className=" sm:basis-1/3">
            <ServiceCard
              id={data.id}
              title={data.title}
              text={data.text}
              icon={data.icon}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
export const ServicesData = [
  {
    id: 1,
    title: "Local and International Pet Travel",
    text: "We take care of every detail, making sure your pet feels at ease during their travel",
    icon: planeIcon,
  },
  {
    id: 2,
    title: "Export and Import Permit Assistance",
    text: "We offer expert assistance in obtaining the necessary permits for your pet's travel",
    icon: adoptedIcon,
  },
  {
    id: 3,
    title: "Veterinary Health Certificate Services",
    text: "We offer thorough health examinations and  documentation by qualified veterinarians",
    icon: loveIcon,
  },
  {
    id: 4,
    title: "Pet Micro-chipping Services",
    text: "We handle implantation of secure and internationally recognized microchips for your pet",
    icon: collarIcon,
  },
  {
    id: 5,
    title: "Pet Travel Laboratory Test Requirements",
    text: "We ensure your pet fulfills all testing requirements, minimizing potential travel disruptions",
    icon: vaccineIcon,
  },
  {
    id: 6,
    title: "Consultation",
    text: "We ensure your pet fulfills all testing requirements, minimizing potential travel disruptions",
    icon: vaccineIcon,
  },
];
