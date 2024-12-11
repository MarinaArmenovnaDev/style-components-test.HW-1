import React from "react";
import {styled} from "styled-components";
import {Paragraf, TextTitle} from "./components/styles/TextTitle.styled";
import {MainImage} from "./components/styles/Img.styled";
import {Btn} from "./components/styles/Btn.styled";
import {myTheme} from "./components/styles/Theme.styled";
import img from "../src/assets/img/0cbd17e4381497547009ce81acc4eee3.jpeg";

function App() {
    return (
        <MainWrapper>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <Description>
                    <TextTitle color={"#000"}>Headline</TextTitle>
                    <Paragraf color={"#abb3ba"}>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                        molestie ornare in venen.
                    </Paragraf>
                </Description>
                <BtnsWrapper>
                    <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                    <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
                </BtnsWrapper>
            </Box>
        </MainWrapper>
    );
}

type BoxPropsType = {
    color: string;
};

const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

const Description = styled.div`
    padding: 0 10px;
`

const BtnsWrapper = styled.div`
    display: flex;
    gap: 12px;
    padding: 0 10px;
`

export const Box = styled.div<BoxPropsType>`
    border-radius: ${myTheme.border.bordrRadius};
    max-width: 300px;
    min-height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    background: ${(props) => props.color};
`;

export default App;
