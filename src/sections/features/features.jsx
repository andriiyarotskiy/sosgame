import React from 'react';
import styled from 'styled-components'
import Accordion from "../../components/Accordion/Accordion";

const FeaturesContainer = styled.div`
min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Content = styled.div`
  color: white;
  font-family: Bebas Neue, cursive;
  //border: 1px solid white;
  width: 50%;
  padding: 5%;

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 2px;
  }

  h1 {
    font-weight: 500;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 3px;
    position: relative;
    padding-bottom: 70px;
    padding-top: 15px;
`

const Features = () => {
    return (
        <FeaturesContainer>
            <Content>
                <h3>What’s so special?</h3>
                <h1>features</h1>
                <Accordion />
            </Content>
        </FeaturesContainer>
    );
};

export default Features;