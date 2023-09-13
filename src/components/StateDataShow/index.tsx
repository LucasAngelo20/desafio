import React, { useContext } from "react";
import { CovidContext } from "../../contexts/covid";

import * as S from "./style";

function StateDataShow() {
  const { listaEstados, estadoSelecionado, setEstadoSelecionado } =
    useContext(CovidContext);
  return (
    <S.MainContainer>
      <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
        <S.Select
          onChange={(e) => {
            setEstadoSelecionado(JSON.parse(e.target.value));
          }}
        >
          {listaEstados.map((item, index) => (
            <option key={index} value={JSON.stringify(item)}>
              {item.state}
            </option>
          ))}
        </S.Select>
      </div>
      <S.InformationContainer>
        <S.InformationRow>
          <S.InformationLabel>Casos</S.InformationLabel>
          <S.Information>{estadoSelecionado?.cases}</S.Information>
        </S.InformationRow>
        <S.InformationRow>
          <S.InformationLabel>Mortes</S.InformationLabel>
          <S.Information>{estadoSelecionado?.deaths}</S.Information>
        </S.InformationRow>
        <S.InformationRow>
          <S.InformationLabel>Suspeitos</S.InformationLabel>
          <S.Information>{estadoSelecionado?.suspects}</S.Information>
        </S.InformationRow>
      </S.InformationContainer>
    </S.MainContainer>
  );
}

export default StateDataShow;
