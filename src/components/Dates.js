import React from 'react'

export default function Dates() {
  return (
    <article className='my-5 flex items-end justify-end'>
        <ul>
          <li><span className='font-bold'>Numer faktury: </span></li>
          <li><span className='font-bold'>Data wystawienia faktury: </span></li>
          <li><span className='font-bold'>Termin zapłaty: </span></li>
        </ul>
    </article>
  )
}
