import React, { useContext, useEffect, useState } from "react";
import { CovidContext } from "../../contexts/covid";
import * as S from "./style";
import moment from "moment";

function PeriodDataShow() {
  const { getDataEspecifica, listaEstadosSelecionados } =
    useContext(CovidContext);
  const [dataEspecifica, setDataEspecifica] = useState("20200318");
  console.log(listaEstadosSelecionados);

  useEffect(() => {
    getDataEspecifica("20200318");
  }, [getDataEspecifica]);

  return (
    <S.MainContainer>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <S.DataLabel>{moment(dataEspecifica).format('DD/MM/YYYY')}</S.DataLabel>
        <S.DateInput
          type="date"
          onChange={(e) => setDataEspecifica(e.target.value)}
        />
        <S.Button onClick={() => getDataEspecifica(dataEspecifica)}>
          Buscar
        </S.Button>
      </div>
      <S.InformationContainer>
        {listaEstadosSelecionados?.map((estado: any) => (
          <div style={{ display: "flex" }}>
            <S.InformationRow>
              <S.InformationLabel>Estado</S.InformationLabel>
              <S.Information>{estado.state}</S.Information>
            </S.InformationRow>
            <S.InformationRow>
              <S.InformationLabel>Casos</S.InformationLabel>
              <S.Information>{estado.cases}</S.Information>
            </S.InformationRow>
            <S.InformationRow>
              <S.InformationLabel>Mortes</S.InformationLabel>
              <S.Information>{estado.deaths}</S.Information>
            </S.InformationRow>
            <S.InformationRow>
              <S.InformationLabel>Suspeitos</S.InformationLabel>
              <S.Information>{estado.suspects}</S.Information>
            </S.InformationRow>
          </div>
        ))}
      </S.InformationContainer>
    </S.MainContainer>
  );
}

export default PeriodDataShow;
