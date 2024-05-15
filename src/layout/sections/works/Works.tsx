import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.png'
import todolistImg from './../../../assets/images/todolist.jpg'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';
import {TabStatusType, WorksMenu} from "../../../components/menu/WorksMenu";

const worksItems: Array<{ status:'ALL'| 'REACT'| 'LANDING PAGE'| 'SPA' }> = [
    {status: 'ALL'},
    {status:'REACT'},
    {status:'LANDING PAGE'},
    {status:'SPA'}
]

const workData = [
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: socialImg,
        type: 'SPA'
    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: todolistImg,
        type: 'REACT'
    }
]

export const Works: React.FC = () => {

    const [currentStatus, setCurrentStatus] = useState<TabStatusType>('ALL');
    let filteredWorks = workData
    if (currentStatus === 'LANDING PAGE') {
        filteredWorks = workData.filter(work => work.type === 'LANDING PAGE');
    }
    if(currentStatus === 'SPA') {
        filteredWorks = workData.filter(work => work.type === 'SPA');
    }
    if (currentStatus==='REACT') {
        filteredWorks=workData.filter(work => work.type === 'REACT');
    }

    const changeStatus = (value: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA') => {
        setCurrentStatus(value)
    }

    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <WorksMenu tabItems={worksItems}
                           type={'decorated'}
                           ulType={'worksMenu'}
                           changeStatus={changeStatus}
                           currentStatus={currentStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {filteredWorks.map((work, index) => {
                        return (
                            <Work key={index} title={work.title} text={work.text} src={work.src}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};

