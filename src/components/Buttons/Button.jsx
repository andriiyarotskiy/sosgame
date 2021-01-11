import React from 'react';
import styled from 'styled-components'

export const ButtonCustom = styled.button`
  width: 260px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(194.68deg, #FFB548 11.27%, #F3AF34 90.4%);
  line-height: 22px;
  padding: 20px 0;
  outline: none;
  cursor: pointer;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    //background: linear-gradient(194.68deg, #ffb548 11.27%, #624a17 90.4%);
  }
`


const Button = ({name, onClick, type}) => {
    return (
        <>
            <ButtonCustom type={type} onClick={onClick}>{name}</ButtonCustom>
        </>

    )
};

export default Button;