import Navbar from "./Navbar";
import Resultados from "./Resultados";
import CardInputs from "./CardInputs";
import Footer from "./Footer";

const Content = ({
  filas,
  setResultados,
  aumentarFilas,
  disminuirFilas,
  resultados,
}) => {
  return (
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

        {resultados && (
          <div className="my-5 mx-4 p-4 overflow-auto bg-blue-400 rounded-lg min-h-[500px] h-[600px] shadow-lg">
            <Resultados resultados={resultados} />
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default Content;
