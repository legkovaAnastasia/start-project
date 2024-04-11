import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skil/Skill";

export const AboutMe = () => {
    return (
        <StyledAbout>
            <SectionTitle>About Me</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  
    ${IconWrapper} {
        margin: 30px 0 72px;
    }
`