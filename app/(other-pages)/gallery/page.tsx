import Gallery from "./gallery";

export default function page() {
  return (
    <section className="container flex flex-col items-center gap-10 py-20 ">
      <div className="max-w-[480px] flex flex-col items-center">
        <h2 className="text-[#141414] font-bold font-heading text-center text-3xl lg:text-[40px] lg:leading-[56px]">
          Our gallery of pet relocations
        </h2>
      </div>
      <Gallery media={media} />
    </section>
  );
}

export interface IMedia {
  url: string;
  type: "image" | "video";
  countries: string[];
}
const media: IMedia[] = [
  {
    type: "image",
    countries: ["GB", "NG"],
    url: "/assets/gallery/1.jpg",
  },
  {
    type: "image",
    countries: ["NG", "GB"],
    url: "/assets/gallery/2.jpg",
  },
  {
    type: "image",
    countries: ["NG", "IT"],
    url: "/assets/gallery/3.jpg",
  },
  {
    type: "image",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/4.jpg",
  },
  {
    type: "video",
    countries: ["NG", "GB"],
    url: "/assets/gallery/5.mp4",
  },
  {
    type: "image",
    countries: ["US", "NG"],
    url: "/assets/gallery/6.jpg",
  },
  {
    type: "image",
    countries: ["NG", "BR"],
    url: "/assets/gallery/7.jpg",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/8.mp4",
  },
  {
    type: "image",
    countries: ["NG", "GB"],
    url: "/assets/gallery/9.jpg",
  },
  {
    type: "image",
    countries: ["NG", "CA"],
    url: "/assets/gallery/10.jpg",
  },
  {
    type: "image",
    countries: ["NG", "RW"],
    url: "/assets/gallery/11.jpg",
  },
  {
    type: "image",
    countries: ["NG", "GB"],
    url: "/assets/gallery/12.jpg",
  },
  {
    type: "video",
    countries: ["NG", "CA"],
    url: "/assets/gallery/13.mp4",
  },
  {
    type: "image",
    countries: ["NG", "SL"],
    url: "/assets/gallery/14.jpg",
  },
  {
    type: "image",
    countries: ["NG", "US"],
    url: "/assets/gallery/15.jpg",
  },
  {
    type: "image",
    countries: ["NG", "CV"],
    url: "/assets/gallery/16.jpg",
  },
  {
    type: "image",
    countries: ["NG", "KE"],
    url: "/assets/gallery/17.jpg",
  },
  {
    type: "image",
    countries: ["NG", "KE"],
    url: "/assets/gallery/18.jpg",
  },
  {
    type: "image",
    countries: ["NG", "GB"],
    url: "/assets/gallery/19.jpg",
  },
  {
    type: "image",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/20.jpg",
  },
  {
    type: "video",
    countries: ["NG", "NG"],
    url: "/assets/gallery/21.mp4",
  },
  {
    type: "image",
    countries: ["NG", "BW"],
    url: "/assets/gallery/22.jpg",
  },
  {
    type: "image",
    countries: ["NG", "PH"],
    url: "/assets/gallery/23.jpg",
  },
  {
    type: "video",
    countries: ["NG", "AO"],
    url: "/assets/gallery/24.mp4",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/25.mp4",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/26.mp4",
  },
  {
    type: "video",
    countries: ["NG", "US"],
    url: "/assets/gallery/27.mp4",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/28.mp4",
  },
  {
    type: "video",
    countries: ["NG", "KE"],
    url: "/assets/gallery/29.mp4",
  },
  {
    type: "image",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/30.jpg",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/31.mp4",
  },
  {
    type: "image",
    countries: ["NG", "US"],
    url: "/assets/gallery/32.jpg",
  },
  {
    type: "video",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/33.mp4",
  },
  {
    type: "image",
    countries: ["NG", "ZA"],
    url: "/assets/gallery/34.jpg",
  },
];
