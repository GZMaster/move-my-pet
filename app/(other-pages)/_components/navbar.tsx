import { Header } from "@/app/_sections/nav";
import type { NavItem } from "@/app/config/routes";

export default function Navbar() {
  return (
    <>
      <Header />
    </>
  );
}
const links: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Gallery",
    href: "/gallery",
  },
  {
    title: "Get Quote",
    href: "/contact-us",
    button: true,
  },
];
