import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Notes from './components/Notes'
import Table from './components/Table'
import MainDetails from './components/MainDetails'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'


function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
        <div>
          <Header handlePrint={handlePrint}/>
          <MainDetails />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
        </div>
      </main>
  );
}

export default App;
