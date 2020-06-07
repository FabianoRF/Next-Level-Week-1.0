import React, {useState} from 'react';
import './App.css';
import Header from  './header'

function App() {
  const [counter, setCounter]=useState(0);//[valor do estado, funcao para atualizar o valor do estado]: Array retornado


  function handleButtonClick(){
      setCounter(counter+1);
  }

  return (
    <div>
      <Header title="Hello World"/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
