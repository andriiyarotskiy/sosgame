import React from 'react';
import styled from "styled-components";

import twitter_icon from '../../../assets/img/quotes/twitter_icon.svg'

const Container = styled.div`
  //border: 1px solid red;
  //margin: 25px;
  width: 450px;
  margin-left: auto;
  

  &:nth-child(2n) {
    margin: 25px 25px 25px 0;
  }
`
const Wrap = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  img {
    position: absolute;
    right: 20px;
    top: 30px;
  }
`
const UserInfo = styled.div`
  display: flex;
`
const Avatar = styled.div`
  display: flex;
  position: relative;

  img {
    z-index: 10;
    position: static;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    background-color: #FFB548;
    border-radius: 30px;
    width: 60px;
    height: 60px;
    top: 3px;
    right: -10px;
  }
`
const User = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`
const UserName = styled.div`
  font-family: Bebas Neue, cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #FFB548;
`
const UserSubTitle = styled.div`
  font-family: Open Sans, cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  color: #FFFFFF;
  opacity: 0.5;
`
const CommentBody = styled.span`
  display: block;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  padding: 20px 0;
`
const CommentDate = styled.span`
  display: block;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`

const Comment = ({ava, name, subTitle, comment, date}) => {
    return (
        <Container>
            <Wrap>
                <UserInfo>
                    <Avatar>
                        <img src={ava} alt="user1"/>
                    </Avatar>
                    <User>
                        <UserName>
                            {name}
                        </UserName>
                        <UserSubTitle>
                            {subTitle}
                        </UserSubTitle>
                    </User>
                </UserInfo>
                <CommentBody>
                    “{comment}”
                </CommentBody>
                <CommentDate>
                    {date}
                </CommentDate>
                <img src={twitter_icon} alt="twitter_icon"/>
            </Wrap>
        </Container>
    );
};

export default Comment;