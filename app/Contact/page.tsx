import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center gap-20 bg-alabaster py-40">
      <div className="text-right">
        <h2 className="pb-5">Contact Us.</h2>
        <p className="pb-5">We&apos;d love to hear from you!</p>
        <p>Fill out the form or alternatively email us at</p>
        <p className="text-tigerseye">pilanesbergleopards@gmail.com</p>
      </div>
      <form className="flex flex-col">
        <div className="flex gap-5 pb-10">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              className="rounded-md border-2 border-gray-500 p-2 text-xl"
            />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              className="rounded-md border-2 border-gray-500 p-2 text-xl"
            />
          </div>
        </div>
        <label>Email</label>
        <input
          type="email"
          className="mb-10 rounded-md border-2 border-gray-500 p-2 text-xl"
        />
        <label>Message</label>
        <textarea
          name="message"
          className="rounded-md border-2 border-gray-500 p-2 text-xl"
          rows={4}
        ></textarea>
      </form>
    </div>
  );
}
