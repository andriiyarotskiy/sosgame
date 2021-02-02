import React, {useContext} from 'react';
import styled from 'styled-components';
import header_logo from '../../assets/img/header/header_logo.png';
import xbox_icon from '../../assets/img/header/xbox_icon.svg';
import steam_icon from '../../assets/img/header/stea_icon.svg'
import CustomSelect from "../../components/DropDown/CustomSelect";
import {w} from '../../_variables'
import Menu from "../../common/Menu/Menu";
import {Context} from "../../App";

const Header = () => {

    const {menuActive, setMenuActive, titles} = useContext(Context)
    return (
        <Content>
            <Logo>
                <img src={header_logo} alt="header_logo"/>
            </Logo>
            <TopBar>
                <nav>
                    {titles.map(item => <li key={Math.random()}><a href={item.href}>{item.value}</a></li>)}
                </nav>
            </TopBar>
            <HeaderIcons>
                <SelectLang>
                    <CustomSelect/>
                </SelectLang>
                <Border></Border>
                <span>
                        <img src={xbox_icon} alt="xbox_icon"/>
                    </span>
                <span>
                        <img src={steam_icon} alt="steam_icon"/>
                    </span>
                <BurgerBtn onClick={() => setMenuActive(!menuActive)}>
                    <CenterLine></CenterLine>
                </BurgerBtn>

            </HeaderIcons>
        </Content>
    );
};

export default Header;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  color: white;
  line-height: 16px;
  letter-spacing: 0.1em;
  font-style: normal;
`
const Logo = styled.div`
  img {
    display: flex;
    width: 55px;
    height: 55px;
  }
`
const TopBar = styled.div`
  nav {
    display: flex;

    li {
      margin: 0 20px;
      text-transform: uppercase;

      a {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        color: white;
        font-weight: 700;
      }
    }
  }

  @media (max-width: ${w.lg}) {
    display: none;
  }
`
const Border = styled.div`
  height: 30px;
  width: 1px;
  background: rgba(255, 255, 255, 0.5);
`
const HeaderIcons = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 20px;
    @media (max-width: ${w.lg}) {
      display: none;
    }
  }
`
const SelectLang = styled.div``
export const CenterLine = styled.div``
const BurgerBtn = styled.div`

  @media (min-width: ${w.lg}) {
    display: none;
  }

  width: 25px;
  height: 20px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    top: 0;
    width: 25px;
    background-color: white;
    height: 3px;
    border-radius: 3px;
  }

  ${CenterLine} {
    position: absolute;
    top: 9px;
    width: 25px;
    background-color: white;
    height: 3px;
    margin: 0;
    border-radius: 3px;
  }

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 17px;
    background-color: white;
    height: 3px;
    border-radius: 3px;
  }
`

