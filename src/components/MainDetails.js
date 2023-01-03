import React from "react";

export default function MainDetails({ name, address, nip }) {
  return (
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-xl uppercase md:text-4">{name}</h2>
      <p>{nip}</p>
      <p>{address}</p>
    </section>
  );
}
