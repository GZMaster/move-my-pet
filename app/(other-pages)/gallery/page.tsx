import Gallery from "./gallery";

export default function page() {
  return (
    <section className="container flex flex-col items-center gap-10 py-20 ">
      <div className="max-w-[480px] flex flex-col items-center">
        <h2 className="text-[#141414] font-bold font-heading text-center text-3xl lg:text-[40px] lg:leading-[56px]">
          Our gallery of pet relocations
        </h2>
      </div>
      <Gallery images={images} />
    </section>
  );
}

const images = [
  "/assets/gallery/1.png",
  "/assets/gallery/2.png",
  "/assets/gallery/3.png",
  "/assets/gallery/4.png",
  "/assets/gallery/5.png",
  "/assets/gallery/6.png",
  "/assets/gallery/7.png",
  "/assets/gallery/8.png",
  "/assets/gallery/9.png",
  "/assets/gallery/2.png",
  "/assets/gallery/5.png",
  "/assets/gallery/1.png",
  "/assets/gallery/9.png",
  "/assets/gallery/3.png",
  "/assets/gallery/5.png",
  "/assets/gallery/7.png",
  "/assets/gallery/2.png",
  "/assets/gallery/8.png",
  "/assets/gallery/1.png",
];
