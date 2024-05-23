 import styled from "styled-components";
 import {theme} from "../../styles/Theme";

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.light};
        border-radius: 20px;

        & + span {
            margin-left: 10px;
        }

        &active {
            background-color: ${theme.colors.secondary};
            width: 20px;
        }
    }
`

export const S = {
    StyledSlider,
    Slide,
    Text,
    Pagination
}