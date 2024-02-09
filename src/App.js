import "./styles.css";
import { useState } from "react";
import Counter from "./componentes/Exercicio1/Exercicio1";

// Temos 2 logicas uma para incrementar outra paara diiminuir
// Alteraro span
// Ação/Event
// button.addEventListener("click", funcao)

//useState - hook, funcao

export default function App() {
  console.log("Renderizou!!!");
  //Universo da Logica

  // useState( initialState ) => array [valor, funcao para alterar o valor]
  // Original const counterArray = useState(10);
  //counterArray[0] === valor
  //counterArray[1] === funcao de modificacao

  //Destructuring
  const [counter, setCounter] = useState(10);

  const obj = {
    name: "nelson",
    lastname: "fernandes"
  };

  const { name } = obj;

  console.log(counter);

  const add = () => {
    console.log("Adicionar", counter);
    setCounter(counter + 1);
  };

  const subtract = () => {
    console.log("Subtrair", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  //Universo da Renderização
  return (
    <Counter />
  );
}
