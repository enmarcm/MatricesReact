const Resultados = ({ resultados }) => {
  const itemsResultados = resultados.map((resultado, indice) => {
    return (
      <tr key={indice}>
        <td>{`X${indice+1}`}</td>
        <td>{resultado}</td>
      </tr>
    );
  });

  return (
    <>
      <h2 className="text-center text-black font-bold font-Sora">Resultados</h2>
      <table className="table-auto text-black font-Sora">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{itemsResultados}</tbody>
      </table>
    </>
  );
};

export default Resultados;
