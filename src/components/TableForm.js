import { useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({
  nazwa,
  setNazwa,
  ilosc,
  setIlosc,
  vat,
  setVat,
  cenaNetto,
  setCenaNetto,
  warNetto,
  setWarNetto,
  kwotaVat,
  setKwotaVat,
  warBrutto,
  setWarBrutto,
  list,
  setList,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      nazwa,
      ilosc,
      vat,
      cenaNetto,
      warNetto,
      kwotaVat,
      warBrutto,
    };
    setNazwa("");
    setIlosc("");
    setVat("");
    setCenaNetto("");
    setWarNetto("");
    setKwotaVat("");
    setWarBrutto("");
    setList([...list, newItems]);
    console.log(list);
  };
  useEffect(() => {
    const calcWarNetto = (warNetto) => {
      setWarNetto(cenaNetto * ilosc);
    };
    calcWarNetto(warNetto);

    const calcKwotaVat = (kwotaVat) => {
      setKwotaVat((cenaNetto * vat) / 100);
    };
    calcKwotaVat(kwotaVat);

    const wszystko = parseFloat(cenaNetto) + parseFloat(kwotaVat);
    const calcWarBrutto = (warBrutto) => {
      setWarBrutto((wszystko * ilosc).toFixed(2));
    };
    calcWarBrutto(warBrutto);
  }, [warNetto, cenaNetto, ilosc, vat]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-10">
          <label htmlFor="nazwa">Nazwa produktu</label>
          <input
            type="text"
            name="nazwa"
            id="nazwa"
            placeholder="Opis produktu"
            value={nazwa}
            onChange={(e) => setNazwa(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-x-5 md:mb-10">
          <div className="flex flex-col">
            <label htmlFor="ilosc">Ilość</label>
            <input
              type="number"
              name="ilosc"
              id="ilosc"
              placeholder="Podaj ilość"
              value={ilosc}
              onChange={(e) => setIlosc(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vat">VAT</label>
            <input
              type="number"
              name="vat"
              id="vat"
              placeholder="Podaj VAT"
              value={vat}
              onChange={(e) => setVat(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cenaNetto">Cena Netto</label>
            <input
              type="number"
              name="cenaNetto"
              id="cenaNetto"
              placeholder="Podaj cenę jednego produktu"
              value={cenaNetto}
              onChange={(e) => setCenaNetto(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cenaNetto">Wartość netto</label>
            <p>{warNetto}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="cenaNetto">Kwota Vat</label>
            <p>{kwotaVat}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="cenaNetto">Wartość brutto</label>
            <p>{warBrutto}</p>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Dodaj pozycje
        </button>
      </form>

      {/* Dodane pozycje tabelka*/}

      <table width="100%" className="mb-10">
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
    </>
  );
}
