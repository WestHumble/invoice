import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Notes from './components/Notes'
import Table from './components/Table'
import MainDetails from './components/MainDetails'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'


function App() {

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [nip, setNip] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientNip, setClientNip] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")

  const handlePrint = () => {
    window.print()
  }
  
  useEffect(() => {
    setName('DRS Design');
    setNip('781 203 70 20');
    setAddress('Mrowino');
    setEmail('domsoj@gmail.com');
    setPhone('700200200');
    setBankName('PKO');
    setBankAccount('76 1000 1010 1010 1000 1010 1010');
    setClientName('Klient');
    setClientNip('781 100 45 45');
    setClientAddress('Dąbrowskiego 56');
    setInvoiceNumber('F/140930/2022');
    setNotes('Notatka testowa');
  },[])

  return (
      <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
        {showInvoice ? <div>
          <Header handlePrint={handlePrint}/>
          <MainDetails name={name} address={address} nip={nip}/>
          <ClientDetails clientName={clientName} clientNip={clientNip} clientAddress={clientAddress}/>
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
          <Table />
          <Notes notes={notes}/>
          <Footer name={name} address={address} nip={nip} email={email} phone={phone} bankName={bankName} bankAccount={bankAccount}/>
          <button onClick={() => setShowInvoice(false)} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Edytuj informacje</button>
        </div>: (
          <>
          <div className='flex flex-col justify-center'>
            
            {/* Dane wystawiającego fakturę */}
            <label htmlFor='name' className='font-bold'>Podaj nazwę firmy</label>
            <input type="text" name="name" id="name" placeholder='Nazwa firmy' autoComplete='off' value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor='nip' className='font-bold'>Podaj NIP firmy</label>
            <input type="text" name="nip" id="nip" placeholder='NIP firmy' autoComplete='off' value={nip} onChange={(e) => setNip(e.target.value)}/>

            <label htmlFor='address' className='font-bold'>Podaj adres firmy</label>
            <input type="text" name="address" id="address" placeholder='Adres firmy' autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)}/>

            <label htmlFor='email' className='font-bold'>Podaj email firmy</label>
            <input type="email" name="email" id="email" placeholder='Adres email firmy' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor='phone' className='font-bold'>Podaj telefon firmy</label>
            <input type="text" name="phone" id="phone" placeholder='Telefon firmy' autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            
            <label htmlFor='bankName' className='font-bold'>Podaj nazwę banku firmy</label>
            <input type="text" name="bankName" id="bankName" placeholder='Nazwa banku' autoComplete='off' value={bankName} onChange={(e) => setBankName(e.target.value)}/>
            
            <label htmlFor='bankAccount' className='font-bold'>Podaj numer konta bankowego firmy</label>
            <input type="text" name="bankAccount" id="bankAccount" placeholder='Numer konta bankowego' autoComplete='off' value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}/>
            
            {/* Informacje o kliencie */}
            <label htmlFor='clientName' className='font-bold'>Podaj nazwę firmy klienta</label>
            <input type="text" name="clientName" id="clientName" placeholder='Nazwa firmy klienta' autoComplete='off' value={clientName} onChange={(e) => setClientName(e.target.value)}/>
            
            <label htmlFor='clientNip' className='font-bold'>Podaj NIP klienta</label>
            <input type="text" name="clientNip" id="clientNip" placeholder='NIP firmy klienta' autoComplete='off' value={clientNip} onChange={(e) => setClientNip(e.target.value)}/>
            
            <label htmlFor='clientAddress' className='font-bold'>Podaj adres firmy klienta</label>
            <input type="text" name="clientAddress" id="clientAddress" placeholder='Adres firmy klienta' autoComplete='off' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}/>
            
            {/* Informacje o fakturze */}
            <label htmlFor='invoiceNumber' className='font-bold'>Podaj numer faktury</label>
            <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder='Numer faktury' autoComplete='off' value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
            
            <label htmlFor='invoiceDate' className='font-bold'>Podaj datę wystawienia faktury</label>
            <input type="date" name="invoiceDate" id="invoiceDate" placeholder='Data wystawienia faktury' autoComplete='off' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
            
            <label htmlFor='dueDate' className='font-bold'>Podaj datę opłacenia faktury</label>
            <input type="date" name="dueDate" id="dueDate" placeholder='Data opłacenia faktury' autoComplete='off' value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>

            {/* Notatki */}
            <label htmlFor='notes' className='font-bold'>Napisz notatkę do faktury</label>
            <input type="text" name="notes" id="notes" placeholder='Notatka do faktury' autoComplete='off' value={notes} onChange={(e) => setNotes(e.target.value)}/>

            <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Podgląd faktury</button>
          </div>
          </>
        )}
      </main>
  );
}

export default App;
