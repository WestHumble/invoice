import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>

      <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
        <div>
          <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'>Faktura</h1>
        </div>

        <div>
          <ul className='flex items-center justify-between flex-wrap'>
            <li><button onClick={handlePrint} className='btn btn-print'>Drukuj</button></li>
            <li><button className='btn btn-download'>Pobierz</button></li>
            <li><button className='btn btn-send'>Wyślij</button></li>
          </ul>
        </div>
      </header>

      {/* Moje dane */}
      <section className='flex flex-col items-end justify-end'>
        <h2 className='text-xl uppercase'>Dominik Soj</h2>
        <p>Moj Adres</p>
      </section>

      {/* dane klienta */}
      <section className='mt-5'>
        <h2 className='text-xl uppercase'>Klient</h2>
        <p>Adres klienta</p>
      </section>

      <article className='my-5 flex items-end justify-end'>
        <ul>
          <li><span className='font-bold'>Numer faktury: </span></li>
          <li><span className='font-bold'>Data wystawienia faktury: </span></li>
          <li><span className='font-bold'>Termin zapłaty: </span></li>
        </ul>
      </article>

      {/* tabela */}
      <div className='my-5'>
        tabelka ez
      </div>
      {/* Notatki */}
      <section className='mb-5'>
        <p>Notatki dla klienta</p>
      </section>
      
      {/* Stopka */}
      <footer>
        <ul className='flex flex-wrap items-center justify-center'>
          <li><span className='font-bold'>Moje imię:</span> Dominik</li>
          <li><span className='font-bold'>Moj email:</span> domsoj@gmail.com</li>
          <li><span className='font-bold'>Numer telefonu:</span> 700200200</li>
          <li><span className='font-bold'>Bank:</span> Fajny bank</li>
          <li><span className='font-bold'>Imię posiadacza rachunku:</span> Dominik</li>
          <li><span className='font-bold'>Numer konta:</span> 72 1010 1010 1010 1010 1010</li>
        </ul>
      </footer>

      </main>
    </div>
  );
}

export default App;
