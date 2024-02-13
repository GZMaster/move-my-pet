"use client";

import React, { useState } from "react";
import { media } from "../(other-pages)/gallery/page";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { flightIcon } from "@/components/icons";
import { countries } from "../(other-pages)/gallery/countryCode";

export default function GalleryPreviewComponent() {
  let initialCount = 3;
  const [displayedMedia, setDisplayedMedia] = useState(
    media.slice(0, initialCount)
  );
  const getCountryName = (countryCode: string) => {
    return countries[countryCode] || "Unknown";
  };

  return (
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
              className="w-full h-full"
            />
          ) : (
            <video controls className="w-full h-full">
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
                  <Image src={flightIcon} alt="icon" height={35} width={135} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
