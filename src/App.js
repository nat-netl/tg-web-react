import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {tg, onToggleButton} = useTelegram()
  
  useEffect (() => {
    tg.ready()
  })

  return (
    <div className="App">
      <Header />
      <h1>Ванек живи</h1>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
