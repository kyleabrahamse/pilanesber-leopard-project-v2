"use client";
import { useState } from "react";

import ProfileIdCard from "../components/ProfileIdCard";
import leopardIdCardsSorted from "../leopard-profiles";

export default function LeopardProfiles() {
  const [inputValue, setInputValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value.toLowerCase());
  }

  const filteredLeopards = leopardIdCardsSorted.filter((leopard) => {
    return leopard.name.toLowerCase().includes(inputValue);
  });

  return (
    <div className="bg-alabaster p-20">
      <div className="mx-auto w-1/2 text-center">
        <h1>Leopards of Pilanesberg</h1>
        <p>
          Browse collected images of leopards or use id cards to help identify
          which leopard you&apos;ve seen
        </p>
        <input
          type="text"
          placeholder="Search Name"
          onChange={handleChange}
          className="my-10 border-2 border-black p-2 text-2xl rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {filteredLeopards.map((id) => {
          return <ProfileIdCard image={id.imgUrl} name={id.name} key={id.name} />;
        })}
      </div>
    </div>
  );
}
