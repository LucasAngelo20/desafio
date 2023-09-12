import React, { useState } from "react";

import * as S from "./style";
import TabButton from "../TabButton";

function Tab({state, setState}: any) {

  const tabInfo = [
    {
      title: "Estados",
      id: 1,
    },
    {
      title: "Países",
      id: 2,
    },
    {
      title: "Período",
      id: 3,
    },
    {
      title: "Formulários",
      id: 4,
    },
  ];

  return (
    <S.MainContainer>
      {tabInfo.map((tab) => (
        <TabButton
          key={tab.id}
          onClick={() => setState(tab.id)}
          selected={state === tab.id}
          title={tab.title}
        />
      ))}
    </S.MainContainer>
  );
}

export default Tab;
