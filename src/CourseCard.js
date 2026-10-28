import { useState } from 'react';

function CourseCard({ title, totalSeats = 3 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [name, setName] = useState('');
  const availableSeats = totalSeats - (isEnrolled ? 1 : 0);
  const isFull = availableSeats === 0 && !isEnrolled;

  return (
    <article className={`course-card${isEnrolled ? ' course-card--enrolled' : ''}`}>
      <h3>{title}</h3>
      <p>Wolne miejsca: {availableSeats}</p>

      <label className="course-card__name-label" htmlFor={`name-${title}`}>
        Twoje imię
      </label>
      <input
        id={`name-${title}`}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Wpisz imię"
      />

      <div className="course-card__actions">
        <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
        </button>
        <button
          type="button"
          onClick={() => setIsEnrolled(!isEnrolled)}
          disabled={isFull || (!isEnrolled && !name.trim())}
        >
          {isEnrolled ? 'Wypisz się' : 'Zapisz się'}
        </button>
      </div>

      {isExpanded && (
        <p className="course-card__details">
          Poznaj praktyczne zagadnienia i wykorzystaj je w swoich projektach.
        </p>
      )}
      {isEnrolled && <p role="status">Jesteś zapisany na ten kurs, {name.trim()}.</p>}
      {isFull && <p>Brak wolnych miejsc</p>}
    </article>
  );
}

export default CourseCard;
