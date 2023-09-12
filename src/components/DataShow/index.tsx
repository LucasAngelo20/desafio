import React, { useContext, useEffect, useState } from "react";
import { CovidContext } from "../../contexts/covid";
import Tab from "../Tab";
import StateDataShow from "../StateDataShow";
import CountryDataShow from "../CountryDataShow";
import PeriodDataShow from "../PeriodDataShow";
import Form from "../Form";

function DataShow() {
  const [tabOption, setTabOption] = useState(1);

  const { getTodosEstados, getTodosPaises } = useContext(CovidContext);

  useEffect(() => {
    getTodosEstados();
  }, [getTodosEstados]);

  useEffect(() => {
    getTodosPaises();
  }, [getTodosPaises]);

  return (
    <div>
      <Tab state={tabOption} setState={setTabOption} />
      {tabOption === 1 ? (
        <StateDataShow />
      ) : tabOption === 2 ? (
        <CountryDataShow />
      ) : tabOption === 3 ? (
        <PeriodDataShow />
      ) : (
        <Form />
      )}
    </div>
  );
}

export default DataShow;
