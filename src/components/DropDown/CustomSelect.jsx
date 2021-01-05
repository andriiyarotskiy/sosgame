import React, {useState} from "react";
import styled from "styled-components";


const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  text-align: center;
  position: relative;
  :before, :after {
  content: '';
  width: 2px;
  height: 15px;
  top: 15px;
  right: 30px;
  background: black;
  position: absolute;
  }
  :before {
    transform: ${(props) => props.isOpen ? `rotate(45deg)` : ` rotate(-45deg) `}
  }
  :after {
    right: 20.5px;
    transform: ${(props) => props.isOpen ? `rotate(-45deg)` : ` rotate(45deg) `}
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["ENG", "RUS", "FRA", "DEU"];

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <Main>
            <DropDownContainer>
                <DropDownHeader isOpen={isOpen}  onClick={toggling}>
                    {selectedOption}
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.filter(o => o !== selectedOption).map(option => (
                                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
}

export default CustomSelect;
