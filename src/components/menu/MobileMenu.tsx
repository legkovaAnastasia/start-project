import React, {useState} from 'react';
import {LinkProps} from "../Link";
import {MenuItem} from "./MenuItem";
import {S} from "./Menu_Styles";
import {MenuProps} from "./Menu";

export const MobileMenu: React.FC<MenuProps & LinkProps> = (props: MenuProps & LinkProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <S.StyledMobileMenu>
            <S.BurgerBtn isOpen={isOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopUp isOpen={isOpen} onClick={() => {
                setIsOpen(false)
            }}>
                <MenuItem menuItems={props.menuItems} type={props.type}/>
            </S.MobileMenuPopUp>
        </S.StyledMobileMenu>
    );
};