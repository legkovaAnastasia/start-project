import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    width: 170px;
    height: 32px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
 
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }

    &::before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.secondary};
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: ${theme.animation.transition};
    }

`