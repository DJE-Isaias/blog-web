import Card from "@/components/Card";
import { AmbulanceIcon, BikeIcon, ComputerIcon, Gamepad2Icon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

const categories = [
  { key: "technology", label: "Technology", icon: <ComputerIcon size={50} className="text-primary" /> },
  { key: "sports", label: "Sports", icon: <BikeIcon size={50} className="text-secondary"/>},
  { key: "business", label: "Business", icon: <HandshakeIcon size={50} className="text-purple-700" /> },
  { key: "entertainment", label: "Entertainment", icon: <Gamepad2Icon className="text-blue-400" size={50}/> },
  { key: "health", label: "Health", icon:  <AmbulanceIcon size={50} className="text-red-500"/>},
];

export default async function Home() {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 shadow-lg rounded-lg text-center p-2">CATEGORIES</h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-3">
      {categories.map(({key, label, icon}) => (
        <Link href={`category/${key}`} key={key}>
          <Card  className="flex flex-col text-textMain justify-center items-center gap-4 py-7 m-2 cursor-pointer">
            {icon}
            {label}
          </Card>
        </Link>
      ))}
      </div>
    </div>
  );
}
