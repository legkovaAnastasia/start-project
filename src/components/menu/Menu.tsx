import React from 'react';
import {LinkProps} from "../Link";
import {MenuItem} from "./MenuItem";
import {S} from "./Menu_Styles";

export type MenuProps = {
    items: Array<ItemProps>
    ulType?: string
}
type ItemProps = {
    title: string,
    href:string
}

export const Menu: React.FC<MenuProps & LinkProps> = (props: MenuProps & LinkProps) => {
    return (
        <S.StyledMenu ulType={props.ulType}>
            <MenuItem items={props.items}
                      type={props.type}
                      ulType={props.ulType}
            />
        </S.StyledMenu>
    );
};

