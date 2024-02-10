import { astronomyIcon, pawIcon, timeIcon, userIcon } from "@/components/icons";
import Image from "next/image";
import img from "@/assets/feature-bg.png";

export default function Options() {
  return (
    <section className="flex container flex-col items-center py-20 gap-20 w-full">
      <div className="max-w-[400px] flex flex-col items-center">
        <h6 className="text-[#828282] text-[12px] tracking-[2.16px]">
          YOUR TRUSTED PARTNER IN PET RELOCATION
        </h6>
        <h2 className="text-[#141414] font-bold font-heading text-center text-[40px] leading-[56px]">
          Why we are your best option
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row max-lg:gap-10 lg:gap-12 justify-between w-full">
        <div className="flex flex-col max-lg:gap-10 sm:flex-row justify-between item-center lg:w-2/3">
          <div className="flex flex-col justify-between lg:justify-between sm:justify-center max-lg:gap-10 max-lg:items-center">
            {optionsA.map((option, idx) => (
              <Card
                key={idx}
                text={option.text}
                title={option.title}
                icon={option.icon}
              />
            ))}
          </div>
          <Image
            src={img}
            alt="options"
            width={360}
            height={540}
            className="rounded-[30px]"
          />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col justify-between max-lg:gap-10 max-lg:items-center lg:w-1/3 lg:items-end">
          {optionsB.map((option, idx) => (
            <Card
              key={idx}
              text={option.text}
              title={option.title}
              icon={option.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ICard {
  title: string;
  icon: string;
  text: string;
}
function Card({ title, icon, text }: ICard) {
  return (
    <article className="max-w-[300px] flex flex-col gap-4">
      <Image src={icon} alt="icon" width={36} height={36} />
      <h2 className="text-[#141414] font-bold text-base">{title}</h2>
      <p>{text}</p>
    </article>
  );
}

const optionsA = [
  {
    icon: userIcon,
    title: "Expertise and Pet-Centric Approach",
    text: "Count on us for expert pet relocation. Our dedicated team prioritizes your pet's safety throughout their journey.",
  },
  {
    icon: astronomyIcon,
    title: "Global Support, Local Expertise",
    text: "We simplify international travel with guidance on regulations and offer support with documentation.",
  },
];

const optionsB = [
  {
    icon: pawIcon,
    title: "Tailored Solutions for Your Pet",
    text: "We create custom relocation packages to meet your pet's unique needs, making the entire process seamless and worry-free.",
  },
  {
    icon: timeIcon,
    title: "Around-the-Clock Pet Care",
    text: "Our team is available to address your concerns and answer questions, ensuring a caring journey for your furry friend.",
  },
];
