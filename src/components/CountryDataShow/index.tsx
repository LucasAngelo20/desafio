import React, { useContext } from "react";
import { CovidContext } from "../../contexts/covid";
import * as S from "./style";

function CountryDataShow() {
  const { listaPaises, paisSelecionado, setPaisSelecionado } =
    useContext(CovidContext);
  return (
    <S.MainContainer>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <S.Select
          onChange={(e) => {
            setPaisSelecionado(JSON.parse(e.target.value));
          }}
        >
          {listaPaises.map((item, index) => (
            <option key={index} value={JSON.stringify(item)}>
              {item.country}
            </option>
          ))}
        </S.Select>
      </div>
      <S.InformationContainer>
        <S.InformationRow>
          <S.InformationLabel>Casos</S.InformationLabel>
          <S.Information>Sem atualizações</S.Information>
        </S.InformationRow>
        <S.InformationRow>
          <S.InformationLabel>Mortes</S.InformationLabel>
          <S.Information>{paisSelecionado?.deaths}</S.Information>
        </S.InformationRow>
        <S.InformationRow>
          <S.InformationLabel>Confirmados</S.InformationLabel>
          <S.Information>{paisSelecionado?.confirmed}</S.Information>
        </S.InformationRow>
      </S.InformationContainer>
    </S.MainContainer>
  );
}

export default CountryDataShow;
