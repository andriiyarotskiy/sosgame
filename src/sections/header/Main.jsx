import React, {useContext} from 'react';
import styled from 'styled-components'
import {ButtonCustom} from "../../components/Buttons/Button";
import Header from "./Header";
import Menu from "../../common/Menu/Menu";
import {Context} from "../../App";
import {w} from '../../_variables'

const MainContainer = styled.div`
  height: 90vh;
  display: flex;
  position: relative;
`
const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  @media (max-width: ${w.md}){
    top: 30%;
  }
`
const Title = styled.h1`
  font-family: Bebas Neue, cursive;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 80px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (max-width: ${w.md}){
    font-size: 70px;
  }
`
const SubTitle = styled.h2`
  font-family: Bebas Neue, cursive;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 2px;
  margin: 10px 0 35px;
`
const ButtonSteam = styled(ButtonCustom)`
  color: #1A1917;
  padding-left: 17px;
  padding-right: 17px;
  width: 260px;
  position: relative;

  span {
    padding-left: 15px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    top: 22px;
    right: 73px;
    height: 18px;
    background: #1A1917;
    opacity: 0.5;
  }

  @media (max-width: 568px) {
    padding: 11px 0 11px;
    min-width: 216px;
    width: 216px;
    font-size: 14px;
    &:after {
      right: 59px;
      top: 13px;
    }
  }
`
const Main = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Content>
                    <Title>
                        SURVIVE AT ALL COSTS
                    </Title>
                    <SubTitle>
                        Experience new social battle royale game
                    </SubTitle>
                    <ButtonSteam>Buy Now on Steam <span>14.99</span></ButtonSteam>
                </Content>
            </MainContainer>
        </>

    );
};

export default Main;
