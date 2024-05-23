import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {NavLink} from "../../../components/Link";

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`
const StyledWork = styled.div`
    background-color: ${theme.colors.text};

    ${NavLink} {
        padding: 10px 0;

        & + ${NavLink} {
            margin-left: 20px;
        }
    }
`

const Title = styled.h3`
`
const Description = styled.div`
    padding: 25px 20px;
`
const ImgWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -20%);
        transition: ${theme.animation.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animation.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -40%);
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Text = styled.p`
    padding: 14px 0 10px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`

export const S = {
    StyledWorks,
    StyledWork,
    Title,
    Description,
    ImgWrapper,
    Text,
    Image
}

