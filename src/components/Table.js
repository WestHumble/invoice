import React from "react";

export default function Table({ list, total }) {
  return (
    <>
      <table className="mb-10 text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-200">
            <th className="px-6 py-3">Nazwa</th>
            <th className="px-6 py-3">Ilość</th>
            <th className="px-6 py-3">Stawka VAT</th>
            <th className="px-6 py-3">Cenna netto</th>
            <th className="px-6 py-3">Wartość netto</th>
            <th className="px-6 py-3">Kwota VAT</th>
            <th className="px-6 py-3">Wartość brutto</th>
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{nazwa}</td>
                  <td className="px-6 py-4">{ilosc}</td>
                  <td className="px-6 py-4">{vat}</td>
                  <td className="px-6 py-4">{cenaNetto}</td>
                  <td className="px-6 py-4">{warNetto}</td>
                  <td className="px-6 py-4">{kwotaVat}</td>
                  <td className="px-6 py-4">{warBrutto}</td>
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
