import React from 'react';
import {LinkProps} from "../Link";
import {MenuItem} from "./MenuItem";
import {S} from "./Menu_Styles";

export type MenuProps = {
    menuItems: Array<string>
    ulType?: string
}
export const Menu: React.FC<MenuProps & LinkProps> = (props: MenuProps & LinkProps) => {
    return (
        <S.StyledMenu ulType={props.ulType}>
            <MenuItem menuItems={props.menuItems}
                      type={props.type}
                      ulType={props.ulType}
            />
        </S.StyledMenu>
    );
};

