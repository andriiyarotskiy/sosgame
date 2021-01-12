import React from 'react';
import styled from "styled-components";
import Button from "../../components/Buttons/Button";
import Comment from "./Comment/Comment";
import user1 from '../../assets/img/quotes/User1.jpg';
import user2 from '../../assets/img/quotes/User2.jpg';
import user3 from '../../assets/img/quotes/User3.jpg';

const Users = [
    {
        ava: user1,
        name: 'Evan Lahti',
        subTitle: 'PC Gamer',
        comment: 'One of my gaming highlights of the year.',
        date: 'October 18, 2018'
    }, {
        ava: user2,
        name: 'Jada Griffin',
        subTitle: 'Nerdreactor',
        comment: 'The next big thing in the world of streaming and survival games.',
        date: 'December 21, 2018'
    }, {
        ava: user3,
        name: 'Aaron Williams',
        subTitle: 'Uproxx',
        comment: 'Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.',
        date: 'December 24, 2018'
    },
]


const QuotesContainer = styled.div`
  min-height: 100vh;

  font-style: normal;
  font-weight: bold;
  color: white;

  display: flex;
  align-items: center;
`
const Item = styled.div`
  width: 50%;

  h3, h1 {
    font-family: Bebas Neue, sans-serif;
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
    max-width: 400px; //!!!!!!!!!!!!!!!!!
    font-weight: 400;
    padding-bottom: 50px;
  }
`
const Quotes = () => {
    return (
        <QuotesContainer>
            <Item>
                <h3>What people think?</h3>
                <h1>Press quotes</h1>
                <p>Our goal is to create a product and service that you’re satisfied with and use it every day. This is
                    why we’re constantly working on our services to make it better every day and really listen to what
                    our users has to say.</p>
                <Button onClick={() => {
                }} name={"read more testimonials"}/>
            </Item>
            <Item>
                {Users.map(card => <Comment
                    name={card.name}
                    ava={card.ava}
                    comment={card.comment}
                    date={card.date}
                    subTitle={card.subTitle}/>)}
            </Item>
        </QuotesContainer>
    );
};

export default Quotes;