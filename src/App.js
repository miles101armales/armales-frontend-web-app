import { useEffect } from 'react';
import './App.css';
import 'telegram-web-app';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <button className='toggle__button' onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

