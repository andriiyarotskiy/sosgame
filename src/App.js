import React from "react";
import styled from "styled-components";
import About from "./sections/about/About";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection";
import about_bg_lg from './assets/img/about-bg-lg.jpg';
import features_bg_lg from './assets/img/features-bg-lg.jpg';
import quotes_bg_lg from './assets/img/quotes-bg-lg.jpg';
import requirments_bg_lg from './assets/img/requirments-bg-lg.jpg';
import Slide from "./components/Slider/Slide";
import Header from "./sections/header/Header";
import Main from "./sections/header/Main";
import NewsLetter from "./sections/newsletter/NewsLetter";
import Features from "./sections/features/features";


export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

const App = () => {
    return (
        <>

            <Slide>
                <Container>
                    <Header/>
                    <Main/>
                </Container>
            </Slide>

            <BackgroundSection background={about_bg_lg}>
                <Container>
                    <About/>
                </Container>
            </BackgroundSection>
            <BackgroundSection background={features_bg_lg}>
                <Container>
                <Features />
                </Container>
            </BackgroundSection>
            <BackgroundSection background={quotes_bg_lg}>
                <Container>
                </Container>
            </BackgroundSection>
            <BackgroundSection background={requirments_bg_lg}>
                <Container>
                </Container>
            </BackgroundSection>
            <NewsLetter>
                <Container>

                </Container>
            </NewsLetter>


        </>
    );
}

export default App;
