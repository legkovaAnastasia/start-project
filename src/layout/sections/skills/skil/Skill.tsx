import React from 'react';
import {Icon, IconIdProps} from "../../../../components/icon/Icon";
 import {FlexWrapper} from "../../../../components/FlexWrapper";
 import { S } from '../Skills_Styles';

type SkillProps = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillProps & IconIdProps) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction="column" align="center">
                <S.IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox} height={props.height} width={props.width}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};

