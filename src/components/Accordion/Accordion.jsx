import React, {useState} from 'react';
import styled from 'styled-components';
import {FiMinus, FiPlus} from "react-icons/fi";
import {w} from '../../_variables'

export const DataAccordion = [
    {
        title: 'SURVIVE AT ALL COSTS',
        subtitle: 'You have 30 minutes to find a relic, signal for extraction, and grab\n' +
            'one of three spots on the rescue chopper.'
    },
    {
        title: 'CREATE ALLIES AND ENEMIES',
        subtitle: 'You have 30 minutes to find a relic, signal for extraction, and grab\n' +
            'one of three spots on the rescue chopper.'
    },
    {
        title: 'IMPRESS THE AUDIENCE',
        subtitle: 'You have 30 minutes to find a relic, signal for extraction, and grab\n' +
            'one of three spots on the rescue chopper.'
    },
]


const AccordionSection = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
`
const Container = styled.div`
  //top: 30%;
  max-width: 360px;
  min-height: 300px;
  padding-left: 45px;
  @media (max-width: ${w.md}){
    padding: 0;
  }
  //box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`
const Wrap = styled.div`
  //border: 1px solid red;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  text-align: center;
  cursor: pointer;
  padding: 20px 0;
  @media (max-width: ${w.md}){
    text-align: left;
  }

  h3 {
    color: #FFB548;
  }

  span {
    margin-right: 1.5rem;
  }
`
const Dropdown = styled.div`
  //background: #1c1c1c;
  //max-width: 400px;
  //height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border-bottom: 1px solid #00ffb9;
  //border-top: 1px solid #00ffb9;

  p {
    font-family: Open Sans, cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    //padding: 20px 0 20px;
  }
`
const Accordion = () => {

    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <AccordionSection>
            <Container>
                {DataAccordion.map((item, i) => {

                    return (
                        <span key={i}>
                            <Wrap onClick={() => toggle(i)}>
                                <h3>{item.title}</h3>
                                <span>{(clicked === i)
                                    ? <FiMinus/>
                                    : <FiPlus/>
                                }</span>
                            </Wrap>
                            {clicked === i ?
                                (<Dropdown>
                                        <p>{item.subtitle}</p>
                                    </Dropdown>
                                ) : null
                            }
                        </span>
                    )
                })}
            </Container>
        </AccordionSection>
    );
};

export default Accordion;
