import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi everybody</span>
                    <Name>I'm Anastasia Legkova</Name>
                    <MainTitle>A Front-end developer</MainTitle>
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

`
const Name = styled.h2`

`