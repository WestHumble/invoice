import { useEffect } from "react";
import React from "react";

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
}) {
  useEffect(() => {
    const calcWarNetto = (warNetto) => {
      setWarNetto(cenaNetto * ilosc);
    };
    calcWarNetto(warNetto);

    const calcKwotaVat = (kwotaVat) => {
      setKwotaVat((cenaNetto * vat) / 100);
    };
    calcKwotaVat(kwotaVat);

    const calcWarBrutto = (warBrutto) => {
      setWarBrutto(warNetto + kwotaVat);
    };
    calcWarBrutto(warBrutto);
  }, [warNetto, cenaNetto, ilosc, vat]);

  return (
    <>
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
    </>
  );
}
