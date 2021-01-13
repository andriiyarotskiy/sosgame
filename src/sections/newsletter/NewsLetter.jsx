import React from 'react';
import styled from 'styled-components';
import totem from '../../assets/img/totem.png';
import {Container} from "../../App";

const NewsLetterContainer = styled.div`
  min-height: 100vh;
  background: #080A0B;
  -webkit-box-shadow: inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0px 0px 100px 20px rgba(0, 0, 0, 0.8);
`
const ImageBlock = styled.div`
  padding-top: 75px;
  text-align: left;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`

const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <Container>
                <ImageBlock>
                    <img src={totem} alt=""/>
                </ImageBlock>
            </Container>
        </NewsLetterContainer>
    );
};

export default NewsLetter;