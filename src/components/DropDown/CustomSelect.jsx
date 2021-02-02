import React, {useContext} from "react";
import styled from "styled-components";
import {Context, languagesData} from "../../App";


const DropDownContainer = styled("div")`
  width: 55px;
  text-align: left;
  margin-right: 20px;
  font-family: 'Open Sans', sans-serif;
`;

const DropDownHeader = styled("div")`
  font-weight: 700;
  background: transparent;
  position: relative;
  font-size: 12px;
  padding-left: 5px;
  cursor: pointer;

  :before, :after {
    content: '';
    width: 2px;
    height: 7px;
    top: 5px;
    right: 10px;
    background: white;
    position: absolute;
  }

  :before {
    transform: ${(props) => props.isOpen ? `rotate(45deg)` : ` rotate(-45deg) `}
  }

  :after {
    right: 6px;
    transform: ${(props) => props.isOpen ? `rotate(-45deg)` : ` rotate(45deg) `}
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  z-index: 20;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  li {
    padding: 5px 20px 5px 5px;

    &:hover {
      color: #FFB548;
      transition: .2s ease-in-out;
    }
  }
`;

const ListItem = styled("li")`
  list-style: none;
`;


const CustomSelect = React.memo(() => {

    const { lang,setLang,
        isOpen,setIsOpen} = useContext(Context)

    console.log(lang)

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => {
        return () => {
            setLang(value)
            setIsOpen(false);
        }
    };

    return (
        <DropDownContainer>
            <DropDownHeader isOpen={isOpen} onClick={toggling}>
                {lang}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {["ENG", "RUS", "FRA", "DEU"].filter(o => o !== lang).map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
})

export default CustomSelect;
