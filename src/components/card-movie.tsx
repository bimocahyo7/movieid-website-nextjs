import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type CardProps = {
  name: string;
  image: string;
  date: string;
};

function Card({ name, image, date }: CardProps) {
  // Change format date
  const dateEdit = new Date(date);
  const formatedDate = dateEdit.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="overflow-hidden w-40 h-80 shadow-md rounded-lg bg-white">
      <Image src={image} alt={name} width={300} height={300} className="w-40 h-2/3 object-cover" />
      <div className="px-3 pt-2">
        <h3 className="text-base font-semibold text-wrap leading-tight">{name}</h3>
        <p className="text-sm pt-1 text-slate-500">{formatedDate}</p>
      </div>
    </div>
  );
}

export default Card;
