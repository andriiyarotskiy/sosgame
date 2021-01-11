import React from "react";
import styled from "styled-components";
import About from "./sections/about/About";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection";
import about_bg_lg from './assets/img/about-bg-lg.jpg';
import Slide from "./components/Slider/Slide";
import Header from "./sections/header/Header";
import Main from "./sections/header/Main";


const Container = styled.div`
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

        </>
    )
        ;
}

export default App;
