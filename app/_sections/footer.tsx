import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  facebookIcon,
  instagramIcon,
  mailIcon,
  mapPinIcon,
  moveIcon,
  phoneIcon,
} from "@/components/icons";
export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="flex flex-col gap-16  pt-14 ">
        <div className="container flex flex-col items-center justify-between max-md:items-start max-md:gap-4 md:flex-row">
          <div className="flex flex-col gap-5 max-w-[275px]">
            <Image src="/assets/logo.png" alt="logo" width={135} height={135} />
            <p className="text-sm">
              Paws in Transit, Nurturing Happy Journeys for Your Furry Friends.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[5px] bg-primary p-[10px]"
                >
                  <Image src={s.icon} alt="icon" width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-6 max-md:flex-col lg:gap-12 max-md:mt-4">
            {footerLinks.map((column) => (
              <div key={column.column} className="flex-1">
                <h2 className="mb-4 font-heading text-base font-bold capitalize ">
                  {column.data.leadText}
                </h2>
                <ul>
                  {column.data.items.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        href={item.slug}
                        target={item.new_page ? "_blank" : "_self"}
                        className="text-sm font-medium leading-[28px] flex gap-4 "
                      >
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={24}
                            height={24}
                          />
                        )}
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 bg-black">
          <div className="container py-6 flex flex-col text-white text-sm">
            <p>Copyright © 2024 movemypetNigeria. All rights reserved.</p>
            <p>
              Designed by <strong>Retro Developers</strong>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
const socials = [
  {
    id: "1",
    icon: instagramIcon,
    slug: "https://www.instagram.com/",
  },
  {
    id: "2",
    icon: facebookIcon,
    slug: "https://www.facebook.com/",
  },
];
const footerLinks: FooterLink[] = [
  {
    column: 1,
    data: {
      leadText: "Company",
      items: [
        { title: "Services", slug: "/#services" },
        {
          title: "Locate us",
          slug: "/#locate",
        },
        { title: "Testimonials", slug: "/#testimonial" },
        { title: "Gallery", slug: "/gallery" },
      ],
    },
  },
  {
    column: 2,
    data: {
      leadText: "Contact us",
      items: [
        { title: "Pet import/export quote", slug: "#", icon: moveIcon },
        {
          title: "movemypetnigeria@gmail.com",
          slug: "mailto:movemypetnigeria@gmail.com",
          icon: mailIcon,
        },
        {
          title: "+234 8180281937",
          slug: "tel:+2348180281937",
          icon: phoneIcon,
        },
        {
          title: "Muritala Muhammed International Airport Lagos",
          slug: "https://maps.app.goo.gl/B126UEBsCoeyvk2D9",
          icon: mapPinIcon,
          new_page: true,
        },
      ],
    },
  },
];
interface FooterItem {
  title: string;
  slug: string;
  icon?: string;
  new_page?: boolean;
}

interface FooterColumn {
  leadText: string;
  items: FooterItem[];
}

interface FooterLink {
  column: number;
  data: FooterColumn;
}
