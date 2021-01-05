import React, {useState} from 'react';
import {DataAccordion} from './Data';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from "react-icons/fi";


const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;justify-content: center;
position: relative;
height: 100vh;
background: #fff;
`
const Container = styled.div`
position: absolute;
top: 30%;
box-shadow: 2px 10px 35px 1px rgba(153, 153,153,0.3);
`
const Wrap = styled.div`
background: #272727;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;
  h1{
  padding: 2rem;
  font-size: 2rem;
  }
  span {
  margin-right: 1.5rem;
  }
`
const Dropdown = styled.div`
background: #1c1c1c;
color: #00ffb9;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid #00ffb9;
border-top: 1px solid #00ffb9;
p{
font-size: 2rem;
transition: 2s all;

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
        <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
            <AccordionSection>
                <Container>
                    {DataAccordion.map((item, i) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(i)} key={i}>
                                    <h1>{item.title}</h1>
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
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;