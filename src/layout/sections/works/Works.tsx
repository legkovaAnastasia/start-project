import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.png'
import todolistImg from './../../../assets/images/todolist.jpg'
import {Container} from "../../../components/Container";
import { S } from './Works_Styles';

const worksItems = ['ALL', 'REACT', 'LANDING PAGE', 'SPA']

const workData = [
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: socialImg
    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: todolistImg
    }
]

export const Works: React.FC = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={worksItems} type={'decorated'} ulType={'worksMenu'}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {workData.map((work, index)=>{
                        return (
                            <Work key={index} title={work.title} text={work.text} src={work.src}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};

