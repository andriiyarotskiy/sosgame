import React from 'react';
import styled from 'styled-components';
import Accordion from "../../components/Accordion/Accordion";
import {w} from '../../_variables';

const FeaturesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
  @media (max-width: ${w.md}) {
    align-items: flex-start;
    &:before {
      content: '';
      width: calc(100% + 30px);
      z-index: -1;
      position: absolute;
      background-color: black;
      opacity: .6;
      top: 0;
      bottom: 0;
      right: 0;
      left: -15px;
    }
  }
`
const Content = styled.div`
  color: white;
  font-family: Bebas Neue, cursive;
  width: 50%;
  padding: 5%;
  margin-top: calc(50px - 5%);
  @media (max-width: ${w.md}) {
    width: 100%;
  }
}

h3 {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 2px;
  @media (max-width: ${w.md}) {
    font-size: 21px;
  }
}

h1 {
  font-weight: 500;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 70px;
  padding-top: 10px;
  @media (max-width: ${w.md}) {
    font-size: 50px;
    line-height: 50px;
    padding-bottom: 30px;
  }
`

const Features = () => {
    return (
        <FeaturesContainer>
            <Content>
                <h3>What’s so special?</h3>
                <h1>features</h1>
                <Accordion/>
            </Content>
        </FeaturesContainer>
    );
};

export default Features;
