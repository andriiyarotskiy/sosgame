import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  box-shadow: inset 0px 150px 40px 39px rgba(0,0,0,0.5);
`

const BackgroundSection = ({children, background}) => {
    return (
        <Wrapper background={background}>
            {children}
        </Wrapper>
    );
};

export default BackgroundSection;