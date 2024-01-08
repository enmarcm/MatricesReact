import Button from "./Button";
import { useState } from "react";
import GaussJordan from "../services/GJ";
import useInputs from "../customHooks/useInputs";

const CardInputs = ({ filas, aumentar, disminuir, setResultados }) => {
  const [inputsInvalidos, setInputsInvalidos] = useState([]);

  const { inputs } = useInputs({ filas, inputsInvalidos });

  console.log(inputs);

  const calcular = (e) => {
    e.preventDefault();

    const valor = Object.fromEntries(new window.FormData(e.target));

    const inputsInvalidos = Object.keys(valor).filter((key) => {
      const inputValor = valor[key];
      return isNaN(Number(inputValor));
    });

    setInputsInvalidos(inputsInvalidos);

    setTimeout(() => setInputsInvalidos([]), 2000);

    const matriz = [];
    for (const key in valor) {
      if (!Number(valor[key])) {
        console.log(`Error en el valor ${valor[key]}`);
      }
      matriz.push(Number(valor[key]));
    }

    const GJ = new GaussJordan(filas);
    const resultado = GJ.Llenar(matriz).GaussJordan();
    setResultados(resultado);
  };

  return (
    <form
      className="h-full w-full flex flex-col justify-between gap-5 box-border"
      onSubmit={calcular}
    >
      <div
        className="w-full grid grod-rows-12 p-4 overflow-auto box-border"
        style={{
          gridTemplateColumns: `repeat(${filas + 1}, minmax(80px, 1fr))`,
          gridTemplateRows: `repeat(${filas}, 1fr)`,
        }}
      >
        {inputs &&
          inputs.map((input) => {
            return (
              <input
                type="number"
                key={input.key}
                placeholder={input.placeholder}
                name={input.name}
                className={input.className}
              />
            );
          })}
      </div>

      <div className="flex flex-col gap-1 box-border w-full">
        <Button color="#870000" onClick={disminuir}>
          -
        </Button>
        <Button color="#419F00" onClick={aumentar}>
          +
        </Button>
        <Button color="#FFA800" onSubmit={calcular}>
          Calcular
        </Button>
      </div>
    </form>
  );
};

export default CardInputs;
