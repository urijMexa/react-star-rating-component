import { MovieCard } from './components/MovieCard';
import './index.css';

// ШАГ 1: Импортируем картинки как модули
import supermanPoster from './assets/images/superman.jpg';
import loneRangerPoster from './assets/images/lone-ranger.jpg';

const movies = [
  {
    id: 1,
    // ШАГ 2: Используем импортированные переменные вместо строк
    poster: supermanPoster,
    tag: 'ЭКШН',
    tagColor: 'orange' as const,
    title: 'Супермен',
    rating: 1,
    price: 1299,
  },
  {
    id: 2,
    poster: loneRangerPoster,
    tag: 'ВЕСТЕРН',
    tagColor: 'brown' as const,
    title: 'Одинокий странник',
    rating: 1,
    price: 899,
  }
];

function App() {
  return (
    <div className="movie-list-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default App;
