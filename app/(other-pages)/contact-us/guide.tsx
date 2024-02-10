import Image from "next/image";
import crate1 from "@/assets/crate1.png";
import crate2 from "@/assets/crate2.png";

export default function Guide() {
  return (
    <section id="guide" className="flex flex-col gap-20 items-center py-20">
      <div className="max-w-[500px] flex flex-col items-center">
        <h6 className="text-[#828282] text-[12px] tracking-[2.16px]">
          USER GUIDE
        </h6>
        <h2 className="text-[#141414] font-bold font-heading text-center text-[40px] leading-[56px]">
          How to get your pets crate size
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-28 max-w-[820px]">
        <div className="flex flex-col gap-2">
          <Image src={crate1} alt="crate" width={350} height={350} />
          <h2 className="text-2xl font-bold">1. Measure your pet</h2>
          <p>
            Animal measurements
            <strong>as illustrated:</strong>
          </p>
          <p className="flex items-center">
            <Point text={"A"} />= length of animal
          </p>
          <p className="flex items-center">
            <Point text={"B"} /> = height from ground to elbow joint
          </p>
          <p className="flex items-center">
            <Point text={"C"} />= width across shoulders or widest points
          </p>
          <p className="flex items-center">
            <Point text={"D"} />= full height of animal while standing (ear tips
            included)
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Image src={crate2} alt="crate" width={350} height={350} />
          <h2 className="text-2xl font-bold">2. Calculate crate dimensions</h2>
          <p>
            The calculated dimensions are <strong>internal container </strong>
            dimensions:
          </p>
          <p className="flex items-center">
            Crate length = <Point text={"A"} /> + (1/2
            <Point text={"B"} />)
          </p>
          <p className="flex items-center">
            Crate width = <Point text={"C"} /> x 2
          </p>
          <p className="flex items-center">
            Crate height, <Point text={"E"} /> = <Point text={"D"} /> + bedding
          </p>
          <p>
            (<strong>Note:</strong> Snub-nosed breeds require a 10% larger
            crate)
          </p>
        </div>
      </div>
    </section>
  );
}

function Point({ text }: any) {
  return (
    <span className=" mx-2 min-w-10 h-10 bg-[#3A328826] text-[#3A3288] flex items-center justify-center text-lg">
      {text}
    </span>
  );
}
