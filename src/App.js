import './App.css';
import CourseCard from './CourseCard';

function App() {
  return (
    <main className="aplikacja">
      <h1>Dostępne kursy</h1>
      <div className="lista-kursow">
        <CourseCard title="Podstawy React" />
        <CourseCard title="JavaScript od podstaw" totalSeats={0} />
        <CourseCard title="Tworzenie aplikacji webowych" totalSeats={1} />
      </div>
    </main>
  );
}

export default App;
