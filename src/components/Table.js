import React from "react";

export default function Table({ list, total }) {
  return (
    <>
      <table width="100%" className="mb-10 text-center">
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
          {list.map(
            ({
              id,
              nazwa,
              ilosc,
              vat,
              cenaNetto,
              warNetto,
              kwotaVat,
              warBrutto,
            }) => (
              <React.Fragment key={id}>
                <tr>
                  <td>{nazwa}</td>
                  <td>{ilosc}</td>
                  <td>{vat}</td>
                  <td>{cenaNetto}</td>
                  <td>{warNetto}</td>
                  <td>{kwotaVat}</td>
                  <td>{warBrutto}</td>
                </tr>
              </React.Fragment>
            )
          )}
        </tbody>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-grey-800 text-4xl font-bold">
          Do zapłaty {total.toLocaleString()} zł
        </h2>
      </div>
    </>
  );
}
