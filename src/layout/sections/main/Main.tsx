import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi everybody</span>
                    <Name>I'm Anastasia Legkova</Name>
                    <MainTitle>Front-end developer</MainTitle>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: azure;
`

const Photo = styled.img`
    width: 200px;
    height: 350px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;
`
const Name = styled.h2`
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;
`