import React from "react";

export default function Header({ handlePrint }) {
  return (
    <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
      <div>
        <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
          Faktura
        </h1>
      </div>
    </header>
  );
}
