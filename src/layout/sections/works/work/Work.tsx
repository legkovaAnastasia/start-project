import React from 'react';
import styled from "styled-components";


type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkProps) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={''}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: rgba(255, 255, 255, 0.35);
    max-width: 540px;
    width: 100%;
`

const Title = styled.h3`
`

const Text = styled.p`
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`

const Link = styled.a`
`

