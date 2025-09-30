import { Stars } from './components/Stars';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Демонстрация компонента Stars</h1>
      
      <h2>Рейтинг 1:</h2>
      <Stars count={1} />

      <h2>Рейтинг 3:</h2>
      <Stars count={3} />
      
      <h2>Рейтинг 5:</h2>
      <Stars count={5} />

      <h2>Рейтинг 0 (не отображается):</h2>
      <Stars count={0} />

      <h2>Рейтинг 6 (не отображается):</h2>
      <Stars count={6} />

      <h2>Не число (не отображается):</h2>
      <Stars count={Number('не число')} />

      <h2>Пропс не передан (не отображается):</h2>
      <Stars />
    </div>
  );
}

export default App;
