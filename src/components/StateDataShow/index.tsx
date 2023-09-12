import React, { useContext } from "react";
import { CovidContext } from "../../contexts/covid";

function StateDataShow() {
  const { listaEstados, estadoSelecionado, setEstadoSelecionado } =
    useContext(CovidContext);

  return (
    <div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setEstadoSelecionado(JSON.parse(e.target.value));
        }}
      >
        {listaEstados.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateDataShow;
