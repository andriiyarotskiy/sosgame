import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  background: url(${props => props.background}) no-repeat center center;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;

  -webkit-box-shadow: inset 0px 0px 100px 50px rgba(0,0,0,0.8);
  box-shadow: inset 0px 0px 100px 50px rgba(0,0,0,0.8);
  
  
  @media (max-width: 1568px){
    background-size: cover;
    background-position: left top;
  }
`

const BackgroundSection = ({children, background}) => {
    return (
        <Wrapper background={background}>
            {children}
        </Wrapper>
    );
};

export default BackgroundSection;