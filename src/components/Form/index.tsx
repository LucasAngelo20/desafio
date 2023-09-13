import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import * as S from "./style";

interface DataProps {
  estado: string;
  casos: number;
  confirmados: number;
  mortos: number;
  recuperados: number;
  dataAtualizacao: number;
}

function Form() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [data, setData] = useState<DataProps>({} as DataProps);
  const [state, setState] = useState("");
  const [cases, setCases] = useState(0);
  const [confirmeds, setConfirmeds] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [refuses, setRefuses] = useState(0);
  const [date, setDate] = useState(0);

  const handleSendData = () => {
    if (state && cases && confirmeds && deaths && refuses && data) {
      setData({
        estado: state,
        casos: cases,
        confirmados: confirmeds,
        mortos: deaths,
        recuperados: refuses,
        dataAtualizacao: date,
      });
      console.log("Dados: ", {
        estado: state,
        casos: cases,
        confirmados: confirmeds,
        mortos: deaths,
        recuperados: refuses,
        dataAtualizacao: date,
      });
      enqueueSnackbar("Dados enviados com sucesso!", {variant: 'success'});
    } else {
      enqueueSnackbar("Preencha todos os campos!", {variant: 'error'});
    }
  };
  return (
    <S.MainContainer>
      <SnackbarProvider />
      <div style={{ display: "flex" }}>
        <S.Column>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Estado</S.CustomInputLabel>
            <S.CustomInput type="text" onChange={(e: any) => setState(e.target.value)} />
          </S.CustomInputContainer>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Casos</S.CustomInputLabel>
            <S.CustomInput
              onChange={(e: any) => setCases(e.target.value)}
              type="number"
            />
          </S.CustomInputContainer>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Confirmados</S.CustomInputLabel>
            <S.CustomInput
              onChange={(e: any) => setConfirmeds(e.target.value)}
              type="number"
            />
          </S.CustomInputContainer>
        </S.Column>
        <S.Column>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Mortes</S.CustomInputLabel>
            <S.CustomInput
              onChange={(e: any) => setDeaths(e.target.value)}
              type="number"
            />
          </S.CustomInputContainer>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Recuperados</S.CustomInputLabel>
            <S.CustomInput
              onChange={(e: any) => setRefuses(e.target.value)}
              type="number"
            />
          </S.CustomInputContainer>
          <S.CustomInputContainer>
            <S.CustomInputLabel>Data</S.CustomInputLabel>
            <S.CustomInput
              onChange={(e: any) => setDate(e.target.value)}
              type="date"
            />
          </S.CustomInputContainer>
        </S.Column>
      </div>

      <S.Button onClick={() => handleSendData()}>Enviar</S.Button>
    </S.MainContainer>
  );
}

export default Form;
