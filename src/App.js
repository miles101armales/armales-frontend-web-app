import { useEffect } from 'react';
import './App.css';
import 'telegram-web-app';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

