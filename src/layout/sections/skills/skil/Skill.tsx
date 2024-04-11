import React from 'react';
import {Icon, IconIdProps} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillProps = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillProps & IconIdProps) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox} height={props.height} width={props.width}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 60px 20px 40px;
`

export const IconWrapper = styled.div`

position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
`