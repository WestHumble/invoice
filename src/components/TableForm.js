import { useState, useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  //Funkcja wysyłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nazwa && !ilosc && !vat && !cenaNetto) {
      alert("Proszę uzupełnij dane");
    } else {
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
      setIsEditing(false);
    }
  };

  //Obliczanie wartości Brutto produktu
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

  //Obliczanie sumy wszystkich pozycji w tabeli
  useEffect(() => {
    let rows = document.querySelectorAll(".totalBrutto");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "totalBrutto") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Funkcja edycji
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setNazwa(editingRow.nazwa);
    setIlosc(editingRow.ilosc);
    setVat(editingRow.vat);
    setCenaNetto(editingRow.cenaNetto);
    setWarBrutto(editingRow.warBrutto);
    setKwotaVat(editingRow.kwotaVat);
    setWarBrutto(editingRow.warBrutto);
  };
  // Funkcja usuwania
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

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
          {isEditing ? "Edytuj pozycje faktury" : "Dodaj pozycję do faktury"}
        </button>
      </form>

      {/* Dodane pozycje tabelka*/}

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
                  <td className="totalBrutto">{warBrutto}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiFillDelete className="text-red-500 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editRow(id)}>
                      <AiFillEdit className="text-blue-500 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            )
          )}
        </tbody>
      </table>
      <div>
        <h2 className="flex items-end justify-end mb-5 text-grey-800 text-4xl font-bold">
          {total.toLocaleString()} zł
        </h2>
      </div>
    </>
  );
}
