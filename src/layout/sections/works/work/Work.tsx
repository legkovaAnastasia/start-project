import React from 'react';
import styled from "styled-components";
import {Link, LinkProps} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkProps & LinkProps) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <Image src={props.src} alt={''}/>
                <Button>view project</Button>
            </ImgWrapper>
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
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const Title = styled.h3`
`
const Description = styled.div`
    padding: 25px 20px;
`
const ImgWrapper = styled.div`
    position: relative;
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Text = styled.p`
    padding: 14px 0 10px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`

