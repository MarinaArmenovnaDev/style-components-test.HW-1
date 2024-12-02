import { styled } from "styled-components";
import { myTheme } from "./Theme.styled";

type TextTitlePropsType = {
  color: string
}

export const TextTitle = styled.h1<TextTitlePropsType>`
  font: 700 16px "Inter", sans-serif;
  color: ${props => props.color || "black"};
  margin-left: ${myTheme.margin.left};
`;

type ParagrafPropsType = {
  color: string
}

export const Paragraf = styled.p<ParagrafPropsType>`
  font: 500 12px / 1.66667 "Inter", sans-serif;
  color: ${props => props.color || "black"};
  margin-left: ${myTheme.margin.left};
  margin-top: ${myTheme.margin.top};

`;