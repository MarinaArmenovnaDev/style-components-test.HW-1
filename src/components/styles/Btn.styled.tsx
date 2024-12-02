import { css, styled } from "styled-components";
import { myTheme } from "./Theme.styled";

type BtnPropsType = {
  backgroundColor?: string;
  color?: string;
  btnType: "primary"| "outlined"
};

export const Btn = styled.button<BtnPropsType>`
  width: 86px;
  height: 30px;
  margin-top: ${myTheme.margin.top};
  margin-left: ${myTheme.margin.left};
  border-radius: 5px;


  ${(props) =>
    props.btnType === "primary" &&
    css<BtnPropsType>`
      background-color: ${(props) => props.backgroundColor || "#4e71fe"};
      color: ${(props) => props.color || "#fff"};
      border: none;

      &: hover {
        background-color: ${(props) => props.backgroundColor || "transparent"};
        color: ${(props) => props.color || "#e53fcf"};
        border: 1px solid #4e71fe;
      }
    `}

  ${(props) =>
    props.btnType === "outlined" &&
    css<BtnPropsType>`
      background-color: transparent;
      color: ${(props) => props.color || "#4e71fe"};
      border: 1px solid #4e71fe;

      &: hover {
        background-color: ${(props) => props.backgroundColor || "#e53fcf"};
        color: ${(props) => props.color || "#fff"};
        border: none;
      }
    `}
`;
