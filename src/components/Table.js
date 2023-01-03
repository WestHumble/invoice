import React from "react";

export default function Table({
  nazwa,
  ilosc,
  vat,
  cenaNetto,
  warNetto,
  kwotaVat,
  warBrutto,
}) {
  return (
    <table width="100%">
      <thead>
        <tr className="bg-gray-200">
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Stawka VAT</th>
          <th>Cenna netto</th>
          <th>Wartość netto</th>
          <th>Kwota VAT</th>
          <th>Wartość brutto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nazwa}</td>
          <td>{ilosc}</td>
          <td>{vat}</td>
          <td>{cenaNetto}</td>
          <td>{warNetto}</td>
          <td>{kwotaVat}</td>
          <td>{warBrutto}</td>
        </tr>
      </tbody>
    </table>
  );
}
