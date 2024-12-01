import { styled } from "styled-components";

type TextTitlePropsType = {
  color: string
}

export const TextTitle = styled.h1<TextTitlePropsType>`
  font: 700 16px "Inter", sans-serif;
  color: ${props => props.color || "black"};
  margin-left: 20px;
`;

type ParagrafPropsType = {
  color: string
}

export const Paragraf = styled.p<ParagrafPropsType>`
  font: 500 12px / 1.66667 "Inter", sans-serif;
  color: ${props => props.color || "black"};
  margin-left: 20px;

`;