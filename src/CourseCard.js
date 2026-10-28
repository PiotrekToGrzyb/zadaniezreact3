import { useState } from 'react';

// Wyświetla kurs i pozwala użytkownikowi zarządzać szczegółami oraz zapisem.
function CourseCard({ title, totalSeats = 3 }) {
  const [szczegolyWidoczne, ustawSzczegolyWidoczne] = useState(false);
  const [czyZapisany, ustawCzyZapisany] = useState(false);
  const [imie, ustawImie] = useState('');
  const wolneMiejsca = totalSeats - (czyZapisany ? 1 : 0);
  const czyBrakMiejsc = wolneMiejsca === 0 && !czyZapisany;

  // Zapisuje w stanie imię wpisane przez użytkownika.
  function obsluzZmianeImienia(zdarzenie) {
    ustawImie(zdarzenie.target.value);
  }

  // Pokazuje lub ukrywa opis kursu.
  function przelaczSzczegoly() {
    ustawSzczegolyWidoczne(!szczegolyWidoczne);
  }

  // Zapisuje użytkownika na kurs lub go z niego wypisuje.
  function przelaczZapis() {
    ustawCzyZapisany(!czyZapisany);
  }

  return (


    <article className={`karta-kursu${czyZapisany ? ' karta-kursu--zapisany' : ''}`}>
      <h3>{title}</h3>
      <p>Wolne miejsca: {wolneMiejsca}</p>
      <label className="karta-kursu__etykieta-imienia" htmlFor={`imie-${title}`}>
        Twoje imię
      </label>
      
      <input
        id={`imie-${title}`}
        value={imie}
        onChange={obsluzZmianeImienia}
        placeholder="Wpisz imię"
      />


      <div className="karta-kursu__przyciski">
        <button type="button" onClick={przelaczSzczegoly}>
          {szczegolyWidoczne ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
        </button>
        <button
          type="button"
          onClick={przelaczZapis}
          disabled={czyBrakMiejsc || (!czyZapisany && !imie.trim())}
        >
          {czyZapisany ? 'Wypisz się' : 'Zapisz się'}
        </button>
      </div>



      {szczegolyWidoczne && (
        <p className="karta-kursu__szczegoly">
          Poznaj praktyczne zagadnienia i wykorzystaj je w swoich projektach.
        </p>
      )}
      {czyZapisany && <p role="status">Jesteś zapisany na ten kurs, {imie.trim()}.</p>}
      {czyBrakMiejsc && <p>Brak wolnych miejsc</p>}
    </article>
  );
}

export default CourseCard;
