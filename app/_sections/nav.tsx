"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header({ navLinks = links }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#00000033] bg-background">
      <nav className="container mx-auto  flex w-full items-center justify-between bg-background px-6 py-4">
        <a href="/">
          <Logo />
        </a>
        <Navigation navLinks={navLinks} />
        <Navigation mobile navLinks={navLinks} />
      </nav>
    </header>
  );
}

function Logo() {
  return <img src="/assets/logo.png" width={75} height={50} alt="logo" />;
}
const links: NavLink[] = [
  {
    title: "Our Services",
    href: "#services",
  },
  {
    title: "Locate Us",
    href: "#locate",
  },
  {
    title: "Testimonials",
    href: "#testimonial",
  },
  {
    title: "Get Quote",
    href: "/contact-us",
    button: true,
  },
];

function Navigation({ mobile = false, navLinks = [] }: NavigationProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);

  const navClassName = ` text-base bg-background space-x-2
    ${mobile
      ? `transition transform -right-2/3 fixed top-0 z-20 py-4 pb-7 w-2/3 overflow-y-auto py-4 sm:hidden ${mobileNavigationOpened ? "-translate-x-full shadow-2xl" : ""
      }`
      : "hidden sm:flex"
    }
  `;
  const navListClassName = `
    flex
    ${mobile ? "flex-col space-y-2 w-full " : "items-center gap-12"}
  `;
  const navListItemClassName = `
    group relative hover:scale-105 transform transition-transform
    ${mobile ? "w-full overflow-x-visible text-right" : ""}
  `;
  const navListLinkClassName = mobile
    ? "mx-4 text- dark:text-white rounded-[20px]"
    : "";

  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  return (
    <>
      {mobile && (
        <div className="flex gap-2 md:hidden ">
          <button
            className="block text-slate-900  dark:text-slate-50 sm:hidden"
            onClick={() => setMobileNavigationOpened(true)}
            title="Open navigation menu"
          >
            <HamburgerMenuIcon />
          </button>
        </div>
      )}

      {mobile && mobileNavigationOpened && (
        <div
          className="fixed right-0 top-0 z-10 h-full w-full opacity-70 dark:opacity-90 sm:hidden"
          onClick={closeMobileNavigation}
        ></div>
      )}

      <nav className={navClassName}>
        <ul className={navListClassName}>
          {mobile && (
            <li className="text-right">
              <button
                className="px-6 py-2  text-slate-900 dark:text-slate-50"
                onClick={closeMobileNavigation}
              >
                <ArrowRightIcon />
              </button>
            </li>
          )}
          {navLinks.map(({ title, href, button }) => (
            <li
              className={navListItemClassName}
              key={href}
              onClick={closeMobileNavigation}
            >
              {button ? (
                <Button variant={"default"} className={` ${mobile && "mx-4"}`}>
                  <Link href={href}>{title}</Link>
                </Button>
              ) : (
                <NavLink
                  className={navListLinkClassName}
                  mobile={mobile}
                  href={href}
                >
                  {title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function NavLink({ children, className, mobile, href }: NavLinkProps) {
  return (
    <a
      className={`
        block whitespace-nowrap px-2 py-2 text-base no-underline transition 
        ${mobile && ""}
        ${className}
      `}
      href={href}
    >
      {children}
    </a>
  );
}

export interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
  button?: boolean;
}

interface NavigationProps {
  mobile?: boolean;
  navLinks?: NavLink[];
}

interface NavLinkProps extends React.HTMLProps<HTMLLinkElement> {
  mobile?: boolean;
}

interface HeaderProps {
  navLinks?: NavLink[];
}
