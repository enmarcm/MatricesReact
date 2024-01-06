export default function useFilas({filas, setFilas }) {
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

  return { aumentarFilas, disminuirFilas };
}
