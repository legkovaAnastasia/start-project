import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi everybody</S.SmallText>
                        <S.Name>I'm <span>Anastasia Legkova</span></S.Name>
                        <S.MainTitle>
                            <p>Web developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Web developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
