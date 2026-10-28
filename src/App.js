import './App.css';
import CourseCard from './CourseCard';

function App() {
  return (
    <main className="App">
      <h1>Dostępne kursy</h1>
      <div className="course-list">
        <CourseCard title="Podstawy React" />
        <CourseCard title="JavaScript od podstaw" totalSeats={0} />
        <CourseCard title="Tworzenie aplikacji webowych" totalSeats={5} />
      </div>
    </main>
  );
}

export default App;
