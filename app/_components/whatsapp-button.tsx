import { phoneIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
  return <div className="fixed bottom-5 right-5 z-50 bg-white rounded-xl shadow border-2 border-primary">
    <Link
      href={"https://wa.me/+2347031990568"}
      target="_blank"
      rel="noopener noreferrer"
      className=" p-[10px] flex gap-2"
    >
      <Image src={phoneIcon} alt="icon" width={24} height={24} />
      Whatsapp Us
    </Link>
  </div>
}