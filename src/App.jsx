import { useState } from "react";
import Content from "./components/Content";
import "tailwindcss/tailwind.css";
import useFilas from "./services/Filas";

function App() {
  const [filas, setFilas] = useState(2);
  const [resultados, setResultados] = useState(null);
  const {aumentarFilas, disminuirFilas} = useFilas({filas, setFilas})
  
  return (
    <>
      <Content aumentarFilas={aumentarFilas} disminuirFilas={disminuirFilas} filas={filas} resultados={resultados} setResultados={setResultados}/>
    </>
  );
}

export default App;
