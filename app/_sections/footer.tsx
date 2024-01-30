import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.jpg";
import Link from "next/link";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
export default function Footer() {
  const socials = [
    {
      id: "1",
      icon: <InstagramLogoIcon className="text-orange-500" />,
      slug: "https://www.instagram.com/bralewoodinvestments/",
    },
    {
      id: "1",
      icon: <LinkedInLogoIcon className="text-orange-500" />,
      slug: "https://www.linkedin.com/company/bralewood-investment-limited/",
    },
  ];
  return (
    <footer className="w-full bg-black">
      <div className="flex flex-col gap-16  pt-14 text-white">
        <div className="container flex flex-col items-center justify-between max-md:items-start max-md:gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-5">
            <img
              src="/images/footer-logo.png"
              alt="logo"
              width={135}
              height={135}
              className="rounded-[22px]"
            />
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  target="_blank"
                  className="rounded-[10px] bg-orange-500 bg-opacity-20 p-[5px]"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="flex gap-6 max-md:flex-col lg:gap-12">
            {footerLinks.map((column) => (
              <div key={column.column} className="flex-1">
                <h2 className="mb-4 font-mcqueen text-base font-bold capitalize text-white">
                  {column.data.leadText}
                </h2>
                <ul>
                  {column.data.items.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        href={item.slug}
                        className="text-sm font-medium leading-[28px] text-white opacity-70 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex w-full flex-col gap-8 sm:w-[240px]">
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-mcqueen font-bold">
                  Sign up to our Newsletter
                </h2>
                <Input
                  placeholder="Enter Email Address"
                  className="rounded-[12px] border border-white border-opacity-20 bg-white bg-opacity-[15]"
                />
              </div>
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-mcqueen font-bold">Address</h2>
                <p className="text-sm font-light">
                  7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase
                  1, Lagos
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="border-t border-white border-opacity-20">
          <p className="container py-6">
            Copyright © 2023 Bralewood Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
