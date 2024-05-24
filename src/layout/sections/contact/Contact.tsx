import React, {ElementRef, useRef} from 'react';
 import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
 import { S } from './Contact_Styles';
import emailjs from '@emailjs/browser';

export const Contact:React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return
        
        emailjs
            .sendForm('service_vjlr73e', 'template_yda5efh', form.current, {
                publicKey: 'vDSMkmQZBpGIB5Srd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        window.alert('your message has been sent!');
        e.target.reset();
    };
    return (
        <S.StyledContact id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={'name'} name={'user_name'}/>
                    <S.Field placeholder={'email'} name={'email'} type='email' required={true}/>
                    <S.Field placeholder={'subject'} name={'subject'}/>
                    <S.Field placeholder={'message'} as={'textarea'} name={'message'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContact>
    );
};