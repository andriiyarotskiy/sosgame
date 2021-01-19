import React from 'react';
import styled from 'styled-components';
import header_logo from '../../assets/img/header/header_logo.png';
import xbox_icon from '../../assets/img/header/xbox_icon.svg';
import steam_icon from '../../assets/img/header/stea_icon.svg'
import CustomSelect from "../../components/DropDown/CustomSelect";
import {w} from '../../_variables'


const Content = styled.div`
  background: gray;

  //height: 10vh;
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
const SelectLang = styled.div`
`
const Toggle = styled.div`
  margin-left: 20px;
  width: 25px;
  height: 2px;
  border-radius: 3px;
  background: #fff;
  position: relative;
  :before{
    content: '';
    position: absolute;
    height: 2px;
  }
  :after{
    
  }
`

const Header = () => {
    return (
        <Content>
            <Logo>
                <img src={header_logo} alt="header_logo"/>
            </Logo>
            <TopBar>
                <nav>
                    <li><a href="#">Main</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Game Features</a></li>
                    <li><a href="#">System Requirments</a></li>
                    <li><a href="#">Quotes</a></li>
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
                <Toggle>

                </Toggle>
            </HeaderIcons>
        </Content>
    );
};

export default Header;
