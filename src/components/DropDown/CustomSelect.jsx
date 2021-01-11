import React, {useState, useCallback} from "react";
import styled from "styled-components";


// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 100vh;
// `;

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
  //margin-bottom: 0.8em;
`;


const CustomSelect = React.memo(() => {
    const options = ["ENG", "RUS", "FRA", "DEU"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => {
        return () => {
            setSelectedOption(value);
            setIsOpen(false);
            console.log(selectedOption);
        }
    };

    return (
        <DropDownContainer>
            <DropDownHeader isOpen={isOpen} onClick={toggling}>
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
    );
})

export default CustomSelect;

//
// const DropDownContainer = styled("div")`
//   width: 55px;
//   text-align: left;
//   //margin: 0 auto;
// `;
//
// const DropDownHeader = styled("div")`
//   //margin-bottom: 0.8em;
//   //padding: 0.4em 1em 0.4em 1em;
//   font-weight: 500;
//   //font-size: 1.3rem;
//   background: transparent;
//   position: relative;
//   font-size: 12px;
//
//   :before, :after {
//     content: '';
//     width: 2px;
//     height: 7px;
//     top: 5px;
//     right: 15px;
//     background: white;
//     position: absolute;
//   }
//
//   :before {
//     transform: ${(props) => props.isOpen ? `rotate(45deg)` : ` rotate(-45deg) `}
//   }
//
//   :after {
//     right: 11px;
//     transform: ${(props) => props.isOpen ? `rotate(-45deg)` : ` rotate(45deg) `}
//   }
// `;
//
// const DropDownListContainer = styled("div")``;
//
// const DropDownList = styled("ul")`
//   position: absolute;
//   z-index: 20;
//   margin: 10px;
//   //padding-left: 1em;
//   background: black;
//   //border: 2px solid #e5e5e5;
//   //box-sizing: border-box;
//   //color: #3faffa;
//   font-size: 12px;
//   padding-left: 5px;
//   font-weight: 500;
//   li {
//     padding: 5px 20px 5px 5px;
//   }
// `;
//
// const ListItem = styled("li")`
//   list-style: none;
//   //margin-bottom: 0.8em;
// `;

