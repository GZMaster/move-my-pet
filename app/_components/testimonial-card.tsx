import Image, { StaticImageData } from "next/image";

interface iProps {
  id: number;
  avatar: StaticImageData;
  name: string;
  review: string;
}

export default function TestimonialCard({ id, avatar, name, review }: iProps) {
  return (
    <article key={id} className="flex flex-col gap-8">
      <p className="text-[20px]">&quot;{review}&quot;</p>
      <div className="flex gap-3 items-center">
        <Image src={avatar} alt="user" width={50} height={50} />
        <div className="flex flex-col">
          <p className="font-bold text-[#141414]">{name}</p>
        </div>
      </div>
    </article>
  );
}
