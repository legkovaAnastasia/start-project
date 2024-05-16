import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles";
import './../../styles/slider.css'

const Slide = (props: { text: string }) => {
    return (
        <S.Text>
            {props.text}
        </S.Text>
    )
}

const items = [
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt labore et dolore magna aliqua.'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt labore et dolore magna aliqua.'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt labore et dolore magna aliqua.'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt labore et dolore magna aliqua.'}/>
];

export const Slider = () => (
    <S.StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.StyledSlider>
);


// import React from 'react';
//  import {FlexWrapper} from "../FlexWrapper";
//  import { S } from './Slider_Styles';
//
// export const Slider: React.FC = () => {
//     return (
//         <S.StyledSlider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                         labore et dolore magna aliqua.
//                     </S.Text>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={'active'}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.StyledSlider>
//     );
// };