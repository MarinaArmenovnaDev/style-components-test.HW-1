import React from "react";
import {styled} from "styled-components";
import {Paragraf, TextTitle} from "./components/styles/TextTitle.styled";
import {MainImage} from "./components/styles/Img.styled";
import {Btn} from "./components/styles/Btn.styled";
import {myTheme} from "./components/styles/Theme.styled";
import img from "../src/assets/img/0cbd17e4381497547009ce81acc4eee3.jpeg";

function App() {
    return (
        <div>
            <Box color={"#ffffff"}>
                <MainImage src={img}/>
                <TextTitle color={"#000"}>Headline</TextTitle>
                <Paragraf color={"#abb3ba"}>
                    Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit
                    molestie ornare in venen.
                </Paragraf>
                <Btn color={myTheme.colors.primary} btnType={"primary"}>See more</Btn>
                <Btn color={myTheme.colors.secondary} btnType={"outlined"}>Save</Btn>
            </Box>
        </div>
    );
}

type BoxPropsType = {
    color: string;
};

export const Box = styled.div<BoxPropsType>`
    border-radius: ${myTheme.border.bordrRadius};
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.color};
`;

export default App;
