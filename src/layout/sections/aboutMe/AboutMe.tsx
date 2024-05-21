import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from '../skills/Skills_Styles';

export const AboutMe: React.FC = () => {
    return (
        <StyledAbout id={'aboutme'}>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'} />
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`

    ${S.IconWrapper} {
        margin: 30px 0 72px;
    }
`