import './App.css';
import delightLogo from './img/delight.png'
import Boton from './component/Boton'
import Visualizador from './component/Visualizador';
import Clear from './component/Clear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput]= useState('');
  const agregarValor =(valor)=>{
    setInput(input + valor);
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      
    }
    
  }

  return (
    <div className="App">
      <div className='contenedorLogo'>
        <img
          className='logo'
          src={delightLogo}
          alt='imagen del logo' />
      </div>
      <div className='contenedorCalculadora'>
        <Visualizador valorRecibido={input}/>
        <div className= 'fila'>
          <Boton manejarClic={agregarValor}>1</Boton>
          <Boton manejarClic={agregarValor}>2</Boton>
          <Boton manejarClic={agregarValor}>3</Boton>
          <Boton manejarClic={agregarValor}>+</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClic={agregarValor}>4</Boton>
          <Boton manejarClic={agregarValor}>5</Boton>
          <Boton manejarClic={agregarValor}>6</Boton>
          <Boton manejarClic={agregarValor}>-</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClic={agregarValor}>7</Boton>
          <Boton manejarClic={agregarValor}>8</Boton>
          <Boton manejarClic={agregarValor}>9</Boton>
          <Boton manejarClic={agregarValor}>*</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarValor}>0</Boton>
          <Boton  manejarClic={agregarValor}>.</Boton>
          <Boton manejarClic={agregarValor}>/</Boton>
        </div>
        <Clear manejarClear={() => setInput('')}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
