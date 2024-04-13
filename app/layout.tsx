import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Whatsapp from "./_components/whatsapp-button";

export const metadata: Metadata = {
  title: "Relocate and Care for Your Beloved Pets | Move My Pet Nigeria",
  description:
    "Discover top-notch pet relocation, treatment, and care services at Move My Pet Nigeria. We prioritize your pet's safety and well-being throughout the relocation process.",
 authors: [{ name: 'Retro Devs' }],
   openGraph: {
    title: "Relocate and Care for Your Beloved Pets | Move My Pet Nigeria",
    description: "Discover top-notch pet relocation, treatment, and care services at Move My Pet Nigeria. We prioritize your pet's safety and well-being throughout the relocation process.",
    images: 'https://www.movemypetng.com/assets/quote-bg.png',
    siteName: 'Move My Pet Nigeria',
    url: 'https://www.movemypetng.com',
    type: 'website',
  },
   twitter: {
    card: 'summary_large_image',
   title: "Relocate and Care for Your Beloved Pets | Move My Pet Nigeria",
    description: "Discover top-notch pet relocation, treatment, and care services at Move My Pet Nigeria. We prioritize your pet's safety and well-being throughout the relocation process.",
   
    creator: 'Retro Devs',
    images: ['https://www.movemypetng.com/assets/quote-bg.png'], 
  },
   icons: { shortcut: ['/favicon.ico'] },
    keywords:
    "pet relocation, pet treatment, pet care, animal relocation, pet transport, pet services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster />
      <Whatsapp/>
    </html>
  );
}
