"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
interface IProps {
  images: string[];
}
const Gallery = ({ images }: IProps) => {
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 9));

  const handleLoadMoreImages = () => {
    const currentIndex = displayedImages.length;
    const newImages = images.slice(currentIndex, currentIndex + 9);
    setDisplayedImages([...displayedImages, ...newImages]);
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full">
        {displayedImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-full"
            width={380}
            height={280}
          />
        ))}
      </div>
      {displayedImages.length < images.length && (
        <Button
          onClick={handleLoadMoreImages}
          variant={"outline"}
          className="border-green-500 flex items-center  text-green-500 gap-4 hover:text-green-500/80 hover:bg-green-100"
          size={"lg"}
        >
          Load More <ArrowDownIcon />
        </Button>
      )}
    </div>
  );
};

export default Gallery;
