import React from 'react';
import styled from "styled-components";
import {Link, LinkProps} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";


type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkProps & LinkProps) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={''}/>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={''} type={'decorated'}>DEMO</Link>
                <Link href={''} type={'decorated'}>CODE</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.text};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const Title = styled.h3`
`
const Description = styled.div`
    padding: 25px 20px;
`

const Text = styled.p`
    padding: 14px 0 10px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`

