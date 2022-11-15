function App() {
  return (
    <div>
      <main>
      // header
      <header>
        <div>
          <h2>Faktury</h2>
        </div>

        <div>
          <ul>
            <li>Drukuj</li>
            <li>Pobierz</li>
            <li>Wyślij</li>
          </ul>
        </div>
      </header>
      //end of header
      //szczegóły
      <section>
        <input type="text" name="text" id="text" placeholder="Podaj swoje imię" required/>
      </section>
      </main>
    </div>
  );
}

export default App;
