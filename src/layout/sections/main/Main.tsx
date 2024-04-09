import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi everybody</SmallText>
                        <Name>I'm <span>Anastasia Legkova</span></Name>
                        <MainTitle>Front-end developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    width: 200px;
    height: 350px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;
`
const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05rem;
    margin: 10px 0;
    background-image: linear-gradient(90deg, #79dfca, #4ec6da);
    color: transparent;
    -webkit-background-clip: text;

    span {
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
            background-color: ${theme.colors.secondary};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondary};

`

const PhotoWrapper = styled.div`
    position: relative;
    
    &::before {
        content: '';
        width: 220px;
        height: 400px;
        border: 5px solid ${theme.colors.secondary};
        position: absolute;
        left: 10px;
        bottom: -20px;
        z-index: -1;
    }
`