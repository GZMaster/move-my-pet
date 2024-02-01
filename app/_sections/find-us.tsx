import Image from "next/image";
import map from "@/assets/map-bg.png";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export default function FindUs() {
  return (
    <section className="bg-black w-full py-20">
      <div className="container flex justify-between max-lg:gap-5 flex-col md:flex-row items-center ">
        <div className="flex flex-col gap-10 sm:w-1/2">
          <div className="max-w-[490px] flex flex-col">
            <h6 className="text-[#FFFFFFB2] text-[12px] tracking-[2.16px] uppercase">
              Find Us WITH EASE
            </h6>
            <h2 className="text-[#FFFFFF] font-bold font-heading text-[38px] leading-[56px]">
              Locate us for assistance in your pet&apos;s journey
            </h2>
          </div>
          <div className="flex flex-col w-full lg:w-[400px]">
            <h2 className="font-bold text-[#8A9EFF]">Our address:</h2>
            <p className="text-[#FFFFFFCC]">
              Muritala Mohammed International Airport, NAHCO Aviation Complex
              Ikeja, Lagos, Nigeria.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-[400px]">
            <h2 className="font-bold text-[#8A9EFF]">Opening hours:</h2>
            <p className="text-[#FFFFFFCC]">
              Our walk-in offices are open Monday to Fridays from 9am to 5pm.
              Our customer care line is available everyday 24/7.
            </p>
          </div>
          <Button
            variant={"outline"}
            className="border-green-500 text-green-500 gap-4 hover:text-green-500/80 hover:bg-green-100 bg-transparent w-fit"
            size={"lg"}
          >
            Send us a message <ArrowRightIcon className="text-green-500" />
          </Button>
        </div>
        <Image
          src={map}
          alt="map"
          width={480}
          height={480}
          className="sm:w-1/2"
        />
      </div>
    </section>
  );
}
