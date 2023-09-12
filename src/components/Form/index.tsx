import React, { useContext } from "react";
import { CovidContext } from "../../contexts/covid";

function Form() {
  const { listaPaises } = useContext(CovidContext);

  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        {listaPaises.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Form;
