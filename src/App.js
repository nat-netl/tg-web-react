import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {
  useEffect (() => {
    tg.ready()
  })

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <h1>It`s work</h1>

      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
