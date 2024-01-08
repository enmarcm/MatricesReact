import { useMemo } from "react";

const useInputs = ({ filas, inputsInvalidos }) => {
  const inputs = useMemo(() => {
    const elementosTotales = filas * (filas + 1);
    const listaInputs = [];

    for (let i = 0; i < elementosTotales; i++) {
      const calculo = `X${Math.floor(i / (filas + 1)) + 1}_${
        (i % (filas + 1)) + 1
      }`;

      const isInvalid = inputsInvalidos.includes(calculo);

      const elemento = {
        key: i,
        placeholder: calculo,
        name: calculo,
        className: isInvalid ? "bg-red-800" : "",
      };

      listaInputs.push(elemento);
    }

    return listaInputs;
  }, [filas, inputsInvalidos]);

  return { inputs };
};

export default useInputs;