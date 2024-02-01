import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface IProps {
  id: number;
  icon: string;
  title: string;
  text: string;
}
export default function ServiceCard({ icon, id, title, text }: IProps) {
  return (
    <Card className="w-[300px] md:w-[220px]" key={id}>
      <CardContent className="pt-4">
        <CardHeader className="flex justify-center items-center bg-black rounded-lg">
          <Image alt="icon" src={icon} width={100} height={100} />
        </CardHeader>
        <CardTitle className="pt-10">{title}</CardTitle>
        <CardDescription className="pt-5 text-foreground">
          {text}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
