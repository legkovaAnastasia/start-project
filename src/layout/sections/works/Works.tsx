import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.png'
import todolistImg from './../../../assets/images/todolist.jpg'

const worksItems = ['ALL', 'REACT', 'LANDING PAGE', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={"Social network"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      src={socialImg}/>
                <Work title={"Todolist"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      src={todolistImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks=styled.section`
    min-height: 100vh;
    background-color: #bfe8c7;
`

