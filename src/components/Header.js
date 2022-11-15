import React from 'react'

export default function Header({handlePrint}) {
  return (
    
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
  )
}
