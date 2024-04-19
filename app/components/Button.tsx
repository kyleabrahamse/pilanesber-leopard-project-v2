import React from "react";

type ButtonProps = {
  text: string;
  buttonType: string;
};

export default function Button({ text, buttonType }: ButtonProps) {
  return (
    <div>
      <button
        className={`mr-5 rounded-lg px-6 py-2 text-2xl font-medium ${buttonType === "white" ? "bg-earth" : "bg-black text-white"}`}
      >
        {text}
      </button>
    </div>
  );
}
