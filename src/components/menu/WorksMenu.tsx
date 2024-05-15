import React from 'react';
import {Link, LinkProps} from "../Link";
import {S} from "./Menu_Styles";

type TabMenuProps = {
    tabItems: Array<{ status: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA' }>
    ulType?: string
    changeStatus: (value: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA') => void
};
export const WorksMenu: React.FC<TabMenuProps & LinkProps> = (props: TabMenuProps & LinkProps) => {
    return (
        <S.StyledMenu ulType={props.ulType}>
            <ul>
                {props.tabItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link role={"button"} type={props.type} onClick={() => props.changeStatus(item.status)}
                        >{item.status}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.StyledMenu>
    );
};

