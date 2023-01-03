import React from "react";

export default function Footer({
  name,
  address,
  nip,
  email,
  phone,
  bankName,
  bankAccount,
}) {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span className="font-bold">Nazwa firmy:</span> {name}
        </li>
        <li>
          <span className="font-bold">NIP firmy:</span> {nip}
        </li>
        <li>
          <span className="font-bold">Adres firmy:</span> {address}
        </li>
        <li>
          <span className="font-bold">Email firmy:</span> {email}
        </li>
        <li>
          <span className="font-bold">Numer telefonu:</span> {phone}
        </li>
        <li>
          <span className="font-bold">Bank:</span> {bankName}
        </li>
        <li>
          <span className="font-bold">Imię posiadacza rachunku:</span> Dominik
        </li>
        <li>
          <span className="font-bold">Numer konta:</span> {bankAccount}
        </li>
      </ul>
    </footer>
  );
}
