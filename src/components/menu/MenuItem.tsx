import React from 'react';
import {Link, LinkProps} from "../Link";
import {MenuProps} from "./Menu";
import {S} from "./Menu_Styles";

export const MenuItem: React.FC<MenuProps & LinkProps> = (props: MenuProps & LinkProps) => {
    return (
        <ul>
            {props.menuItems?.map((item, index) => {
                return <S.ListItem key={index}>
                    <Link href="" type={props.type}
                    >{item}</Link>
                </S.ListItem>
            })}
        </ul>
    );
};

