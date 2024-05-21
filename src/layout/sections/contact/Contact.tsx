import React from 'react';
 import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
 import { S } from './Contact_Styles';

export const Contact:React.FC = () => {
    return (
        <S.StyledContact id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContact>
    );
};