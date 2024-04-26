import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.png'
import todolistImg from './../../../assets/images/todolist.jpg'
import {Container} from "../../../components/Container";
import {LinkProps} from "../../../components/Link";

const worksItems = ['ALL', 'REACT', 'LANDING PAGE', 'SPA']

export const Works = (props: LinkProps) => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={worksItems} type={'decorated'} ulType={'worksMenu'}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work title={"Social network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                          src={socialImg}
                          type={props.type}/>
                    <Work title={"Todolist"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                          src={todolistImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

