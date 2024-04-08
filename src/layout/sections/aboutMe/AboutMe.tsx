import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutMe = () => {
    return (
        <StyletAbout>
            <SectionTitle>About Me</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={'quote'}/>
                <Slider/>
            </FlexWrapper>
        </StyletAbout>
    );
};

const StyletAbout = styled.section`
    min-height: 50vh;
    background-color: #b9d3ec;
`