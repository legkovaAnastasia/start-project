import React from 'react';
import {LinkProps} from "../Link";
import {MenuItem} from "./MenuItem";
import {S} from "./Menu_Styles";

export const MobileMenu = (props: { menuItems: Array<string>}&LinkProps) => {
    return (
        <S.StyledMobileMenu>
            <S.BurgerBtn isOpen={false}>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopUp isOpen={false}>
                <MenuItem menuItems={props.menuItems} type={props.type} />
            </S.MobileMenuPopUp>
        </S.StyledMobileMenu>
    );
};