"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, type NavItem } from "@/app/config/routes";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#00000033] bg-background">
      <nav className="container mx-auto flex w-full items-center justify-between bg-background px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <Navigation />
        <Navigation mobile />
      </nav>
    </header>
  );
}

function Logo() {
  return <img src="/assets/logo.png" width={75} height={50} alt="logo" />;
}

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  const pathname = usePathname();

  const navClassName = cn(
    "text-base bg-background space-x-2",
    mobile
      ? "transition transform -right-2/3 fixed top-0 z-20 py-4 pb-7 w-2/3 overflow-y-auto py-4 sm:hidden"
      : "hidden sm:flex",
    mobile && mobileNavigationOpened && "-translate-x-full shadow-2xl"
  );

  const navListClassName = cn(
    "flex",
    mobile ? "flex-col space-y-2 w-full" : "items-center gap-12"
  );

  const navListItemClassName = cn(
    "group relative hover:scale-105 transform transition-transform",
    mobile && "w-full overflow-x-visible text-right"
  );

  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileNavigation();
      }
    }
  };

  return (
    <>
      {mobile && (
        <div className="flex gap-2 md:hidden">
          <button
            type="button"
            className="block text-slate-900 dark:text-slate-50 sm:hidden"
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
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              closeMobileNavigation();
            }
          }}
          role="button"
          tabIndex={0}
        />
      )}

      <nav className={navClassName}>
        <ul className={navListClassName}>
          {mobile && (
            <li className="text-right">
              <button
                type="button"
                className="px-6 py-2 text-slate-900 dark:text-slate-50"
                onClick={closeMobileNavigation}
              >
                <ArrowRightIcon />
              </button>
            </li>
          )}
          {NAV_ITEMS.map(({ title, href, button }) => (
            <li
              className={navListItemClassName}
              key={href}
              onClick={closeMobileNavigation}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  closeMobileNavigation();
                }
              }}
            >
              {button ? (
                <Button variant="default" className={cn(mobile && "mx-4")}>
                  <Link href={href}>{title}</Link>
                </Button>
              ) : (
                <NavLink
                  href={href}
                  isActive={pathname === href}
                  mobile={mobile}
                  onClick={(e) => handleHashClick(e, href)}
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

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  mobile?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavLink({ children, href, isActive, mobile, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block whitespace-nowrap px-2 py-2 text-base no-underline transition",
        isActive && "font-semibold text-primary",
        mobile && "text-right"
      )}
    >
      {children}
    </Link>
  );
}
