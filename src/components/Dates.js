import React from 'react'

export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <article className='my-5 flex items-end justify-end'>
        <ul>
          <li><span className='font-bold'>Numer faktury: {invoiceNumber}</span></li>
          <li><span className='font-bold'>Data wystawienia faktury: {invoiceDate}</span></li>
          <li><span className='font-bold'>Termin zapłaty: {dueDate}</span></li>
        </ul>
    </article>
  )
}
