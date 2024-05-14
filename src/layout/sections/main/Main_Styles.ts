import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    width: 200px;
    height: 350px;
    object-fit: cover;
    margin-right: 20px;
`

const MainTitle = styled.h1`
    ${font({
        weight: 400, Fmax: 50, Fmin: 27
    })}
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;
`
const Name = styled.h2`
    ${font({
        family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36
    })}
    letter-spacing: 0.05rem;
    margin: 10px 0;
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;

    span {
        white-space: nowrap;
        background-image: linear-gradient(90deg, #79dfca, #4ec6da);
        color: transparent;
        -webkit-background-clip: text;
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-image: linear-gradient(90deg, #4ec6da, #79dfca);
            -webkit-background-clip: content;
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondary};
`

const PhotoWrapper = styled.div`
    position: relative;
    margin-top: 65px;

    &::before {
        content: '';
        width: 220px;
        height: 400px;
        border: 5px solid ${theme.colors.decoration};
        position: absolute;
        left: 10px;
        bottom: -20px;
        z-index: -1;
    }
`

export const S = {
    StyledMain,
    Photo,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper
}