import React from 'react';
 import {Link} from "../../../../components/Link";
 import {Button} from "../../../../components/Button";
import { S } from '../Works_Styles';


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
                <Link href={''} type={'decorated'}>DEMO</Link>
                <Link href={''} type={'decorated'}>CODE</Link>
            </S.Description>
        </S.StyledWork>
    );
};