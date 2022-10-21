import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ProductsList from './components/ProductList/ProductsList';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {tg} = useTelegram()
  
  useEffect (() => {
    tg.ready()
  })

  return (
    <div className="App">
      <Header />
      <h1>Ванек живи</h1>

      <Routes>
        <Route index element={<ProductsList />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
