import {styled} from "styled-components";
import {myTheme} from "./Theme.styled";

export const MainImage = styled.img`
    border-radius: ${myTheme.img.bordrRadius};
    width: 280px;
    height: 170px;
    margin: 10px;
    object-fit: cover;
`;