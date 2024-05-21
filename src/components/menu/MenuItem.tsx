import React from 'react';
import {LinkProps, NavLink} from "../Link";
import {MenuProps} from "./Menu";
import {S} from "./Menu_Styles";

export const MenuItem: React.FC<MenuProps & LinkProps> = (props: MenuProps & LinkProps) => {
    return (
        <ul>
            {props.items?.map((item, index) => {
                return <S.ListItem key={index}>
                    <NavLink activeClass='active'
                             spy={true}
                             offset={70}
                        to={item.href} smooth={true} type={props.type}
                    >{item.title}</NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};

