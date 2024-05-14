import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Footer_Styles';

const contactsData = [
    {
        iconId: 'in',
        viewBox: '-3 -3 30 30'
    },
    {
        iconId: 'tg',
        viewBox: '-5 -4 33 33'
    }
]
export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
                <S.Name>Anastasia</S.Name>
                <S.SocialList>
                    {contactsData.map((contacts, index)=>{
                        return(
                            <S.SocialItem>
                                <S.SocialLink>
                                    <Icon key={index} iconId={contacts.iconId} viewBox={contacts.viewBox}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Anastasia Legkova. All rights reserved</S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};