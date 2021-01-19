import React from 'react';
import styled from 'styled-components';
import totem from '../../assets/img/totem.png';
import {Container} from "../../App";
import Button from "../../components/Buttons/Button";

const NewsLetterContainer = styled.div`
  min-height: 100vh;
  background: #080A0B;
  -webkit-box-shadow: inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0px 0px 100px 20px rgba(0, 0, 0, 0.8);
`

const Wrap = styled.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  color: white;
`

const ItemImg = styled.div`
  width: 40%;
  padding-top: 75px;
  text-align: left;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`
const ItemContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;

  h3, h1 {
    font-family: Bebas Neue, sans-serif;
    font-weight: 400;
  }

  h3 {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 3px;
    padding-top: 10px;
    padding-bottom: 50px;
  }

  p {
    font-weight: 400;
    padding-bottom: 50px;
  }
`
const Form = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 100%;
    max-width: 360px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 5px;
    border: 2px transparent;
    margin-right: 10px;
    padding: 15px;
    font-family: Open Sans, sans-serif;
    font-size: 18px;
    line-height: 25px;
    color: #FFB548;

    :focus {
      outline: none;
      box-shadow: 0 0 2px 2px #FFB548;
    }
    &::-webkit-input-placeholder {
      /* Chrome */
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      font-size: 14px;
      line-height: 19px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      font-size: 14px;
      line-height: 19px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
    &:-moz-placeholder {
      /* Firefox 4 - 18 */
      font-size: 14px;
      line-height: 19px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }
`

const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <Container>
                <Wrap>
                    <ItemImg>
                        <img src={totem} alt=""/>
                    </ItemImg>
                    <ItemContent>
                        <h3>Want to stay in touch?</h3>
                        <h1>newsletter SUBSCRIBE</h1>
                        <p>In order to start receiving our news, all you have to do is enter your email address.
                            Everything else will be taken care of by us. We will send you emails containing information
                            about game. We don’t spam.</p>
                        <form>
                            <Form>
                                <input placeholder="Your email address" type="text"/>
                                <Button type="Submit" name="Subscribe now"/>
                            </Form>
                        </form>
                    </ItemContent>
                </Wrap>
            </Container>
        </NewsLetterContainer>
    );
};

export default NewsLetter;