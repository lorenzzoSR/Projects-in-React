import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Cronômetro</h1>
      <p>{seconds} segundos</p>
      <div>
        <button onClick={toggle}>{isActive ? 'Pausar' : 'Iniciar'}</button>
        <button onClick={reset}>Resetar</button>
      </div>
    </div>
  );
}

export default App;
