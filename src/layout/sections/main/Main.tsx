import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi everybody</S.SmallText>
                        <S.Name>I'm <span>Anastasia Legkova</span></S.Name>
                        <S.MainTitle>Front-end developer</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
