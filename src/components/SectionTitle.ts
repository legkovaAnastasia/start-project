import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    padding-top: 30px;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.secondary};
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`

