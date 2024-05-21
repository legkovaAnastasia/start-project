import React from 'react';
 import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skil/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

const skillsData = [
    {
        iconId: 'html',
        title: 'html',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        iconId: 'react',
        title: 'react',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        iconId: 'redux',
        title: 'redux',
        viewBox: '0 0 256 256',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        iconId: 'css',
        title: 'css',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        iconId: 'ts',
        title: 'ts',
        viewBox: '-2 -2 20 20',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        iconId: 'styled',
        title: 'styled-components',
        viewBox: '0 0 24 22',
        width: '55',
        height: '55',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export const Skills = () => {
    return (
        <S.StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="space-between">
                    {skillsData.map((skill, index) => {
                        return <Skill key={index}
                                      iconId={skill.iconId}
                                      title={skill.title}
                                      description={skill.description}
                                      viewBox={skill.viewBox}
                                      height={skill.height}
                                      width={skill.width}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};


