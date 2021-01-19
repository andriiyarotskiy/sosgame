import React, {useState, createContext} from "react";
import styled from "styled-components";
import About from "./sections/about/About";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection";
import about_bg_lg from './assets/img/about-bg-lg.jpg';
import features_bg_lg from './assets/img/features-bg-lg.jpg';
import quotes_bg_lg from './assets/img/quotes/quotes-bg-lg.jpg';
import requirments_bg_lg from './assets/img/requirments-bg-lg.jpg';
import Slide from "./components/Slider/Slide";
import Header from "./sections/header/Header";
import Main from "./sections/header/Main";
import NewsLetter from "./sections/newsletter/NewsLetter";
import Features from "./sections/features/features";
import Requirments from "./sections/requirments/Requirments";
import Quotes from "./sections/quotes/Quotes";


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Context = createContext()

export const languagesData = ["ENG", "RUS", "FRA", "DEU"];
const App = () => {
    const [lang, setLang] = useState(languagesData[0])
    const [isOpen, setIsOpen] = useState(false);
    const selectLanguege = {
        lang,setLang,
        isOpen,setIsOpen
    }

    return (
        <>
            <Context.Provider value={selectLanguege}>
                <Slide>
                    <Container>
                        <Header/>
                        {/*<Main/>*/}
                    </Container>
                </Slide>
{/*
                <BackgroundSection background={about_bg_lg}>
                    <Container>
                        <About/>
                    </Container>
                </BackgroundSection>
                <BackgroundSection background={features_bg_lg}>
                    <Container>
                        <Features/>
                    </Container>
                </BackgroundSection>
                <BackgroundSection background={requirments_bg_lg}>
                    <Container>
                        <Requirments/>
                    </Container>
                </BackgroundSection>
                <BackgroundSection background={quotes_bg_lg}>
                    <Container>
                        <Quotes/>
                    </Container>
                </BackgroundSection>
                <NewsLetter />*/}

            </Context.Provider>
        </>
    );
}

export default App;
