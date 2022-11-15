import React from 'react'

export default function ClientDetails({clientName, clientNip, clientAddress}) {
  return (
    <section className='mt-5'>
        <h2 className='text-xl uppercase'>{clientName}</h2>
        <p>{clientNip}</p>
        <p>{clientAddress}</p>
    </section>
  )
}
