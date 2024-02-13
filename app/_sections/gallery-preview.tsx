import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GalleryPreviewComponent from "../_components/gallery-preview-component";

export default function GalleryPreview() {
  return (
    <section className="flex container flex-col items-center py-20 gap-20 w-full scroll-m-20">
      <div className="max-w-[540px] flex flex-col items-center">
        <h6 className="text-[#828282] text-[12px] tracking-[2.16px] uppercase">
          our gallery
        </h6>
        <h2 className="text-[#141414] font-bold   font-heading text-center text-[40px] leading-[56px]">
          Meet our happy travelers
        </h2>
        <p className="pt-4 text-center">
          View our transport gallery of pets we have relocated for our lovely
          customers
        </p>
      </div>
      <div className="w-full">
        <GalleryPreviewComponent />
      </div>
      <Button
        variant={"default"}
        className="border-green-500 "
        size={"lg"}
        asChild
      >
        <Link href="/gallery">
          View more pets <ArrowRightIcon className="text-white font-bold" />
        </Link>
      </Button>
    </section>
  );
}
