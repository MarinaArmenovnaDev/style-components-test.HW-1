import React from "react";
import { styled } from "styled-components";
import { Paragraf, TextTitle } from "./components/styles/TextTitle.styled";
import { Img } from "./components/styles/Img.styled";
import { Btn } from "./components/styles/Btn.styled";
import { myTheme } from "./components/styles/Theme.styled";

function App() {
  return (
    <div>
      <Box color={"#ffffff"}>
        <Img
          src="https://ixbt.online/live/images/original/20/93/55/2022/08/11/3d1b18dc51.png"
          alt="breez"
        />
        <TextTitle color={"#000"}>Headline</TextTitle>
        <Paragraf color={"#abb3ba"}>
          Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit
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
  margin: 0 auto;
`;

export default App;
