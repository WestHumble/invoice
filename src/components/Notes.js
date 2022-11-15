import React from 'react'

export default function Notes({notes}) {
  return (
    <section className='mb-5'>
        <p>Notatki dla klienta</p>
        <p>{notes}</p>
    </section>
  )
}
