// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {GlobalStyles} from "./styles/GlobalStyles";
//
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <GlobalStyles/>
//         <App/>
//     </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//
// import ReactDOM from 'react-dom/client';
// import styled from "styled-components";
//
//
// const CoffeeImg = styled.img`
//   object-fit: contain;
//   max-width: 1200px
// `
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <div className="App">
//         <CoffeeImg
//             src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png"
//             srcSet="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png 85w, https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png 512w, https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png 1200w"
//             sizes="(max-width: 600px) 85px, (max-width: 800px) 512px, 1200px"
//             alt="Coffee" />
//     </div>
// );
//
//
//
// // Посмотрите внимательно на код. Изображение с каким логотипом (Node.js, React или Angular) будет отображаться на экране шириной 768px?
// // ❗ Перед проверкой не забывате очищать cache (при открытой консоли разработчика, правой клавишей мыши по кнопке перезагрузка страницы -> Очистка кэша и жесткая перезагрузка)

// import ReactDOM from 'react-dom/client';
// import styled from "styled-components";
//
//
// const ApplicationImg = styled.img`
//   height: 400px;
//   width: 400px;
//   object-fit: contain
// `
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <div className="App">
//         <ApplicationImg
//             src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png?f=webp"
//
//             XXX="https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png YYY, https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png ZZZ" />
//     </div>
// );
//
//
// // Что должно быть вместо XXX, YYY и ZZZ, чтобы код работал корректно и для экранов с разной плотностью пикселей загружалось правильное изображение?
// //❗ В ответе укажите значения через пробел, вот так: XXX YYY ZZZ


import styled from "styled-components";
import ReactDOM from 'react-dom/client';

const StyledCurrency = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`

const StyledAirport = styled.div`
    padding: 20px;
    background-color: #8ab2ea;
    color: #fff
`

function Benefit() {
    return (
        <StyledCurrency>
            <StyledAirport>Anastasiya</StyledAirport>
            <StyledAirport>Natali</StyledAirport>
            <StyledAirport>Maxim</StyledAirport>
            <StyledAirport>Sergey</StyledAirport>
        </StyledCurrency>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Benefit />
    </div>
);

// Что должно быть вместо XXX, чтобы на экранах меньше 768px отступы между ячейками стали 20px?