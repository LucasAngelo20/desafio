import React, { useContext, useState } from "react";
import { CovidContext } from "../../contexts/covid";

function PeriodDataShow() {
  const { getDataEspecifica } = useContext(CovidContext);
  const [dataEspecifica, setDataEspecifica] = useState("dataEspecifica");

  return (
    <div>
      <input type="date" onChange={(e) => setDataEspecifica(e.target.value)} />
      <button onClick={() => getDataEspecifica(dataEspecifica)}>buscar</button>
    </div>
  );
}

export default PeriodDataShow;
