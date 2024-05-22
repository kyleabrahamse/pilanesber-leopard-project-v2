import React from "react";
import Image from "next/image";
import Button from "./Button";

type SightingsCardProps = {
  name: string;
  location: string;
  time: string;
  description: string;
  imageUrl?: string;
  id: string;
  onDelete: (id: string) => void; 
}

export default function SightingsCard({
  name,
  location,
  time,
  description,
  imageUrl,
  id,
  onDelete,
}: SightingsCardProps) {
  const handleDeleteClick = () => {
    onDelete(id);
  };
  
  return (
    <div className="my-5 ml-10 rounded-md bg-white pt-8">
      <div className="mx-auto mb-5 w-11/12 border-b border-black">
        <div className="mb-5 flex">
          <Image
            src="/images/kimbia2.jpg"
            alt="kimbiaLeopard"
            width={500}
            height={500}
            className="h-[100px] w-[100px] rounded-full bg-auto"
          />
          <h2 className="ml-5 mt-auto">{name}</h2>
        </div>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Sighting Image"
          width={2000}
          height={2000}
          className="mx-auto h-[800px] w-11/12"
          priority={true}
        />
      )}
      <div className="mx-auto w-11/12">
        <p>Location: {location}</p>
        <p>Time: {time}</p>
        <p>{description}</p>
        <div className="mt-4 text-right" onClick={handleDeleteClick}>
          <Button buttonType="white" text="Delete" />
        </div>
      </div>
    </div>
  );
}
