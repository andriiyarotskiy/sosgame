import React from 'react';
import styled from 'styled-components';
import {w} from '../../_variables'

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  //border: 1px solid red; //Border контейнера
  height: 100vh;
`
const Text = styled.div`
  flex: 0 1 45%;
  align-self: stretch;
  display: flex;
  align-items: center;
  color: white;
  font-family: Bebas Neue, cursive;
  font-style: normal;
  @media (max-width: ${w.md}) {
    flex: 1 0 100%;
  }
`

const TextContent = styled.div`
  @media (max-width: ${w.md}){
    position: absolute;
    top: 50px;
  }
  
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 2px;
    padding-bottom: 10px;
    @media (max-width: ${w.md}){
      font-size: 18px;
      line-height: 18px;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 3px;
    position: relative;
    @media (max-width: ${w.md}) {
      font-size: 33px;
      line-height: 33px;
      width: calc(100vw - 15px);
    }

    &:after {
      content: '';
      height: 2px;
      width: 130%;
      bottom: -20px;
      background: #fff;
      position: absolute;
      border-radius: 4px;
      @media (max-width: ${w.sm}) {
        width: 90%;
        right: 0;
      }
      @media (min-width: ${w.sm}) {
        width: 100%;
        left: 0;
      }
    }
  }
`
const Description = styled.div`
  max-width: 395px;
  margin-left: auto;
  margin-top: 50px;
  font-weight: 400;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  @media (max-width: ${w.md}) {
    font-size: 14px;
    line-height: 16px;
    padding-right: 15px;
    margin-left: 0;
  }

  span {
    padding-top: 15px;
    display: block;
  }
`
const Image = styled.div`
  flex: 0 1 55%;
  align-self: stretch;
`
const ImageContent = styled.div`
`
const About = () => {
    return (
        <AboutContainer>
            <Text>
                <TextContent>
                    <h3>
                        What is SOS?
                    </h3>
                    <h1>
                        social battle royale game
                    </h1>
                    <Description>
                        Each round, you and 15 other contestants compete to
                        escape a deadly island filled with monsters. The trick is: three people can survive. Will you
                        run
                        solo or form friendships with others to escape?
                        <span>
                            Making the right decisions could be the
                            difference between life and death.
                        </span>
                    </Description>
                </TextContent>
            </Text>
            <Image>
                <ImageContent>
                </ImageContent>
            </Image>
        </AboutContainer>
    );
};

export default About;
