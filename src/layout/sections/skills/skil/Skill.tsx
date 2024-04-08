import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillProps = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 32%;
    background-color: rgba(255, 255, 255, 0.44);
    margin: 10px;
`

const SkillTitle = styled.h3``

const SkillText = styled.p``