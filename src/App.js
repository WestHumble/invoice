import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [nip, setNip] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientNip, setClientNip] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [nazwa, setNazwa] = useState("");
  const [ilosc, setIlosc] = useState("");
  const [vat, setVat] = useState("");
  const [cenaNetto, setCenaNetto] = useState("");
  const [warNetto, setWarNetto] = useState("");
  const [kwotaVat, setKwotaVat] = useState("");
  const [warBrutto, setWarBrutto] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {showInvoice ? (
        <>
          <ReactToPrint
            trigger={() => (
              <button className="ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Drukuj / Pobierz
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="m-5">
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} nip={nip} />
            <ClientDetails
              clientName={clientName}
              clientNip={clientNip}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              nazwa={nazwa}
              ilosc={ilosc}
              vat={vat}
              cenaNetto={cenaNetto}
              warNetto={warNetto}
              kwotaVat={kwotaVat}
              warBrutto={warBrutto}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              nip={nip}
              email={email}
              phone={phone}
              bankName={bankName}
              bankAccount={bankAccount}
            />
          </div>
          <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edytuj informacje
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            {/* Dane wystawiającego fakturę */}
            <h2 className="font-bold text-2xl mb-5">
              Dane wystawiającego fakturę
            </h2>
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-bold">
                  Podaj nazwę firmy
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nazwa firmy"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="nip" className="font-bold">
                  Podaj NIP firmy
                </label>
                <input
                  type="text"
                  name="nip"
                  id="nip"
                  placeholder="NIP firmy"
                  autoComplete="off"
                  value={nip}
                  onChange={(e) => setNip(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="address" className="font-bold">
                  Podaj adres firmy
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Adres firmy"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold">
                  Podaj email firmy
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adres email firmy"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="font-bold">
                  Podaj telefon firmy
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Telefon firmy"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName" className="font-bold">
                  Podaj nazwę banku firmy
                </label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Nazwa banku"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankAccount" className="font-bold">
                  Podaj numer konta bankowego firmy
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Numer konta bankowego"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>
            </article>

            {/* Informacje o kliencie */}
            <h2 className="font-bold text-2xl mb-5 md:mt-20">
              Informacje klienta
            </h2>
            <article className="md:grid grid-cols-2 gap-x-10 ">
              <div className="flex flex-col">
                <label htmlFor="clientName" className="font-bold">
                  Podaj nazwę firmy klienta
                </label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Nazwa firmy klienta"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientNip" className="font-bold">
                  Podaj NIP klienta
                </label>
                <input
                  type="text"
                  name="clientNip"
                  id="clientNip"
                  placeholder="NIP firmy klienta"
                  autoComplete="off"
                  value={clientNip}
                  onChange={(e) => setClientNip(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress" className="font-bold">
                  Podaj adres firmy klienta
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Adres firmy klienta"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </article>

            {/* Informacje o fakturze */}
            <h2 className="font-bold text-2xl mb-5">Dane faktury</h2>
            <article className="grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber" className="font-bold">
                  Podaj numer faktury
                </label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Numer faktury"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate" className="font-bold">
                  Podaj datę wystawienia faktury
                </label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Data wystawienia faktury"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dueDate" className="font-bold">
                  Podaj datę opłacenia faktury
                </label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Data opłacenia faktury"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>

            {/* Tabelka */}
            <article>
              <TableForm
                nazwa={nazwa}
                setNazwa={setNazwa}
                ilosc={ilosc}
                setIlosc={setIlosc}
                vat={vat}
                setVat={setVat}
                cenaNetto={cenaNetto}
                setCenaNetto={setCenaNetto}
                warNetto={warNetto}
                setWarNetto={setWarNetto}
                kwotaVat={kwotaVat}
                setKwotaVat={setKwotaVat}
                warBrutto={warBrutto}
                setWarBrutto={setWarBrutto}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
            </article>

            {/* Notatki */}
            <label htmlFor="notes" className="font-bold">
              Napisz notatkę do faktury
            </label>
            <input
              type="text"
              name="notes"
              id="notes"
              placeholder="Notatka do faktury"
              autoComplete="off"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Podgląd faktury
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
