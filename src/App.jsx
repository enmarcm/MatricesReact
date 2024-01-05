import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";
import { Navbar } from "./components/Navbar";
import CardInputs from "./components/CardInputs";
import Resultados from "./components/Resultados";

function App() {
  const [filas, setFilas] = useState(2);
  const [resultados, setResultados] = useState(null);

  const aumentarFilas = (e) => {
    e.preventDefault();
    if (filas === 30) return console.log(`No se puede aumentar más`);
    setearFila({ accion: true });
  };

  const disminuirFilas = (e) => {
    e.preventDefault();
    if (filas === 2) return console.log(`No se puede disminuir más`);
    setearFila({ accion: false });
  };

  //accion: true -> aumentar, false -> disminuir
  const setearFila = ({ accion }) => {
    const nuevaFila = accion ? filas + 1 : filas - 1;
    setFilas(nuevaFila);
  };

  useEffect(() => {
    if (!resultados) return;

    console.log(resultados);
  }, [resultados]);

  return (
    <>
      <section className="w-full bg-background min-h-screen max-h-max">
        <Navbar filas={filas} />

        <div className="grid grid-cols-1 box-border mx-auto mt-5 max-h-full md:grid-cols-3 md:w-5/6">
          <div className="h-[600px] p-4 col-span-2">
            <CardInputs
              filas={filas}
              setResultados={setResultados}
              aumentar={aumentarFilas}
              disminuir={disminuirFilas}
            />
          </div>

          {/* Contenedor de los resultados */}
          {resultados && (
            <div className="my-5 mx-4 p-4 overflow-auto bg-blue-400 rounded-lg min-h-[500px] h-[600px] shadow-lg">
              <Resultados resultados={resultados} />
            </div>
          )}
        </div>

        <Footer />
      </section>
    </>
  );
}

export default App;
