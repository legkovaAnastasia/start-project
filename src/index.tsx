import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import ReactDOM from 'react-dom/client';
// import styled, { css } from "styled-components";
//
//
// const StyledArticle = styled.a`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 25px;
//   white-space: nowrap;
//   color: #2182d9;
// `
//
// type ArticlePropsType = {
//     path: string
//     text: string
// }
//
// function Article(props:ArticlePropsType) {
//     return (
//         <StyledArticle href={props.path}>
//             {props.text}
//         </StyledArticle>
//     );
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <div className="App">
//         <Article path="https://hotmart.s3.amazonaws.com/product_pictures/ccdb08be-d4d5-467b-8491-a88bf61024bc/guiahtml38051.png" text="See Article" />
//     </div>
// );
//
//
// // Что должно быть вместо XXX, YYY и ZZZ, чтобы код работал корректно?
// // ❗ В ответе укажите значения через пробел: XXX YYY ZZZ

// not done
// import ReactDOM from 'react-dom/client';
// import styled from "styled-components";
//
//
// type BallPropsType = {
//     children: string
//     href?: string
// };
//
// const StyledBall = styled.button<BallPropsType>`
//     font-weight: bold;
//     font-size: 20px;
//     line-height: 1.2;
//     white-space: nowrap;
//     color: #11be5f;
// `
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <div className="App">
//         <StyledBall>AccountButton</StyledBall>
//
//         <StyledBall  xxx="yyy" zzz="#">AccountLink</StyledBall>
//     </div>
// );
//
//
// // Что должно быть вместо XXX, YYY и ZZZ, чтобы этот же стилизованный компонент отрисовался как ссылка (тег <a>)?
// // ❗ В ответе укажите значения через пробел: XXX YYY ZZZ

// import ReactDOM from 'react-dom/client';
// import styled, { css } from "styled-components";
//
//
// const CurrencyButton = styled.button`
//     border: none;
//     border-radius: 5px;
//     color: white;
//     background-color: #2c73d1;
//     cursor: pointer;
//     padding: 15px;
//     flex-grow: 1;
//     font-size: 20px
// `
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <CurrencyButton title='Click me to say currency!'>Say Currency!</CurrencyButton>
// );
//
// // Какой атрибут должен быть вместо XXX, чтобы при наведении курсора на элемент появлялась подсказка?

// import ReactDOM from 'react-dom/client';
// import styled from "styled-components";
//
// const StyledApp = styled.div`
//     color: white;
//     display: grid;
//     height: 100vh;
//     grid-template-columns: 250px 1fr;
//     grid-template-rows: 60px 1fr 60px;
//     grid-template-areas:
//     "h h"
//     "s c"
//     "f f"
// `
// const StyledHeader = styled.header`
//     background-color: #5555ef;
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     grid-area: h;
//
//     a {
//         color: white
//     }
// `
// const StyledContent = styled.p` //div
//     color: #1f1d1d;
//     padding: 020px;
//     grid-area: c
//
// `
// const StyledSidebar = styled.aside` // aside
//     border-right: 1px solid silver;
//     color: #1f1d1d;
//     grid-area: s;
//
// `
// const StyledFooter = styled.footer`
//     background-color: #5555ef;
//     padding: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     grid-area: f;
// `
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <StyledApp>
//         <StyledHeader>
//             <a href="#">building-logo</a>
//         </StyledHeader>
//         <StyledSidebar>
//             <div> //zzz
//                 <ul>
//                     <li><a href="">balance</a></li>
//                     <li><a href="">bank</a></li>
//                     <li><a href="">boy</a></li>
//                     <li><a href="">community</a></li>
//                 </ul>
//             </div>
//         </StyledSidebar>
//         <StyledContent>
//             <h1>
//                 county
//             </h1>
//         </StyledContent>
//         <StyledFooter>©amount</StyledFooter>
//     </StyledApp>
// );
//
// // Что должно быть вместо XXX, YYY и ZZZ, чтобы разметка была семантическая?
// // ❗ В ответе укажите значения через пробел, вот так: XXX YYY ZZZ

