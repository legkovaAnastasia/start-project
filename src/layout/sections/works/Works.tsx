import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.png'
import todolistImg from './../../../assets/images/todolist.jpg'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';
import {TabStatusType, WorksMenu} from "../../../components/menu/WorksMenu";
import {AnimatePresence, motion} from "framer-motion";

const worksItems: Array<{ status: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA' }> = [
    {status: 'ALL'},
    {status: 'REACT'},
    {status: 'LANDING PAGE'},
    {status: 'SPA'}
]

const workData = [
    {
        title: 'Social network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: socialImg,
        type: 'SPA',
        id: 1
    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: todolistImg,
        type: 'REACT',
        id: 2
    }
]

export const Works: React.FC = () => {

    const [currentStatus, setCurrentStatus] = useState<TabStatusType>('ALL');
    let filteredWorks = workData
    if (currentStatus === 'LANDING PAGE') {
        filteredWorks = workData.filter(work => work.type === 'LANDING PAGE');
    }
    if (currentStatus === 'SPA') {
        filteredWorks = workData.filter(work => work.type === 'SPA');
    }
    if (currentStatus === 'REACT') {
        filteredWorks = workData.filter(work => work.type === 'REACT');
    }

    const changeStatus = (value: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA') => {
        setCurrentStatus(value)
    }

    return (
        <S.StyledWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <WorksMenu worksItems={worksItems}
                           type={'decorated'}
                           ulType={'worksMenu'}
                           changeStatus={changeStatus}
                           currentStatus={currentStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work) => {
                            return (
                                <motion.div style={{  width: '330px', flexGrow: 1, maxWidth: '540px'}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={work.id}
                                >
                                    <Work key={work.id} title={work.title} text={work.text} src={work.src}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};

