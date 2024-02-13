import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Relocate and Care for Your Beloved Pets | Move My Pet Nigeria",
  description:
    "Discover top-notch pet relocation, treatment, and care services at Move My Pet Nigeria. We prioritize your pet's safety and well-being throughout the relocation process.",
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
    </html>
  );
}
