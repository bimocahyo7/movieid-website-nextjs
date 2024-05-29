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
    <div className="overflow-hidden w-36 h-64">
      <Image src={image} alt={name} width={300} height={300} className="w-36 h-52 rounded-md my" />
      <div className="px-3 text-center">
        <h3 className="truncate text-ml font-semibold">{name}</h3>
        <p className="text-sm">{formatedDate}</p>
      </div>
    </div>
  );
}

export default Card;
