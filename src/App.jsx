import Button from "./componentes/Button";
import './App.css';
import Pantalla from "./componentes/Pantalla";
import ButtonClear from "./componentes/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input)); 
    } else{
      alert("ingrese valores")
    }
  }

  return (
    <div className='App'>
      <h1>Calculadora</h1>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Button manejarClic={agregarInput} >1</Button>
          <Button manejarClic={agregarInput} >2</Button>
          <Button manejarClic={agregarInput} >3</Button>
          <Button manejarClic={agregarInput} >+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput} >4</Button>
          <Button manejarClic={agregarInput} >5</Button>
          <Button manejarClic={agregarInput} >6</Button>
          <Button manejarClic={agregarInput} >-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput} >7</Button>
          <Button manejarClic={agregarInput} >8</Button>
          <Button manejarClic={agregarInput} >9</Button>
          <Button manejarClic={agregarInput} >*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado} >=</Button>
          <Button manejarClic={agregarInput} >0</Button>
          <Button manejarClic={agregarInput} >.</Button>
          <Button manejarClic={agregarInput} >/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={()=> setInput("")} >
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
