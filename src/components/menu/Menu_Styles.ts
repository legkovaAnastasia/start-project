import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

const StyledMenu = styled.nav<{ ulType: string | undefined }>`
    ${props => props.ulType === 'headerMenu' && css<{ ulType: string | undefined }>`
        ul {
            display: flex;
            gap: 30px;
            justify-content: center;
        }

    `}
    ${props => props.ulType === 'worksMenu' && css<{ ulType: string | undefined }>`
        ul {
            display: flex;
            justify-content: space-between;
            max-width: 352px;
            width: 100%;
            margin: 0 auto 40px;
        }
    `}
`
//Mobile Menu

const StyledMobileMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: black;
    }
`

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(38, 50, 56, 0.8);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerBtn = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondary};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const ListItem = styled.li`
`
export const S = {
    StyledMenu,
    StyledMobileMenu,
    MobileMenuPopUp,
    BurgerBtn,
    ListItem
}