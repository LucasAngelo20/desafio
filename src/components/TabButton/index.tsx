import React from 'react'

import * as S from './style'

interface TabButtonProps {
  title: string
  selected: boolean
  onClick: any
}

function TabButton({title, selected, onClick}: TabButtonProps) {
  console.log(selected)
  return (
    <S.MainContainer onClick={onClick} selected={selected}>{title}</S.MainContainer>
  )
}

export default TabButton