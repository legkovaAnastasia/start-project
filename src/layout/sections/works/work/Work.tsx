import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';
import {NavLink} from "../../../../components/Link";


type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkProps> = (props: WorkProps) => {
    return (
        <S.StyledWork>
            <S.ImgWrapper>
                <S.Image src={props.src} alt={''}/>
                <Button>view project</Button>
            </S.ImgWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <NavLink active to={''} type={'decorated'}>DEMO</NavLink>
                <NavLink to={''} type={'decorated'}>CODE</NavLink>
            </S.Description>
        </S.StyledWork>
    );
};