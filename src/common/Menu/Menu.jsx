import React, {useContext} from 'react';
import styled from "styled-components";
import {w} from '../../_variables'
import {CenterLine} from "../../sections/header/Header";
import {Context} from "../../App";

const Menu = ({active, setMenuActive}) => {

    const {titles} = useContext(Context)

    const onClickHandler = () => {
        setMenuActive(false)
    }

    return (
        <MenuStyle active={active} onClick={onClickHandler}>
            <BtnClose onClick={onClickHandler}>
                <CenterLine></CenterLine>
            </BtnClose>
            <Blur></Blur>
            <MenuContent onClick={(e) => e.stopPropagation()}>
                <ul>
                    {titles.map(item =>
                        <li key={Math.random().toString()}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </MenuContent>
        </MenuStyle>
    );
};

export default Menu;

const MenuStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${props => props.active ? "translateY(0)" : "translateY(-100%)"};
  transition: .5s;
`
const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;
`
const MenuContent = styled.div`

  position: relative;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: black;
  opacity: .8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: .5s;

  ul li a {

    font-family: Bebas Neue, cursive;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 2px;
    
    color: white;
    text-decoration: none;
    padding: 30px;
  }

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${w.lg}) {
    width: 100%;
  }
`
const BtnClose = styled.div`
  position: fixed;
  z-index: 2;
  width: 30px;
  height: 30px;
  top: 40px;
  right: 15px;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    right: 0;
    top: 13px;
    width: 30px;
    background-color: white;
    transform: rotate(45deg);
    height: 3px;
    border-radius: 3px;
  }
  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 13px;
    width: 30px;
    background-color: white;
    transform: rotate(-45deg);
    height: 3px;
    border-radius: 3px;
  }
`
