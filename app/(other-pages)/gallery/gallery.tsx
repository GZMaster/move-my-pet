"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import { IMedia } from "./page";
import ReactCountryFlag from "react-country-flag";
import { flightIcon } from "@/components/icons";
import { countries } from "@/lib/countryCode";

interface IProps {
  media: IMedia[];
}
const Gallery = ({ media }: IProps) => {
  let initialCount = 9;
  let totalCount = media.length;
  const [displayedMedia, setDisplayedMedia] = useState(
    media.slice(0, initialCount)
  );

  const handleLoadMoreMedia = () => {
    const currentIndex = displayedMedia.length;
    const newMedia = media.slice(currentIndex, currentIndex + 9);
    setDisplayedMedia([...displayedMedia, ...newMedia]);
  };

  const handleShowLessMedia = () => {
    const newLength = Math.max(displayedMedia.length - initialCount, 0);
    const newMedia = media.slice(0, newLength);
    setDisplayedMedia(newMedia);
  };

  const getCountryName = (countryCode: string) => {
    return countries[countryCode] || "Unknown";
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 items-center w-full">
        {displayedMedia.map((media, index) => (
          <div
            className="flex flex-col gap-3 items-center max-w-[440px] max-h-[480px]"
            key={index}
          >
            {media.type === "image" ? (
              <img
                src={media.url}
                alt={`Media ${index + 1}`}
                className="w-full h-[400px]"
              />
            ) : (
              <video controls className="h-[400px]">
                <source src={media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="flex gap-4 items-center">
              {media.countries.map((code, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex gap-1 items-center ">
                    <ReactCountryFlag countryCode={code} />
                    <span className="font-bold">{getCountryName(code)}</span>
                  </div>
                  {idx !== media.countries.length - 1 && (
                    <Image
                      src={flightIcon}
                      alt="icon"
                      height={35}
                      width={135}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button
          onClick={handleLoadMoreMedia}
          variant={"outline"}
          className="border-green-500 font-bold border-2 flex items-center  text-green-500 gap-4 hover:text-green-500/80 hover:bg-green-100"
          size={"lg"}
          disabled={displayedMedia.length == totalCount}
        >
          Load More <ArrowDownIcon />
        </Button>
        <Button
          onClick={handleShowLessMedia}
          variant={"outline"}
          className="border-[#979797] border-2 font-bold flex items-center  text-[#979797] gap-4 hover:text-[##979797f0] hover:bg-[#97979717]"
          size={"lg"}
          disabled={displayedMedia.length <= initialCount}
        >
          Show Less <ArrowUpIcon />
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
