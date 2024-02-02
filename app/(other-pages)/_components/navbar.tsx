import { Header, NavLink } from "@/app/_sections/nav";

export default function Navbar() {
  return (
    <>
      <Header navLinks={links} />
    </>
  );
}
const links: NavLink[] = [
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
