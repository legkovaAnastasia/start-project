import React from 'react';
import {LinkProps, NavLink} from "../Link";
import {S} from "./Menu_Styles";
export type TabStatusType = 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA'

type TabMenuProps = {
    worksItems: Array<{ status: TabStatusType }>
    ulType?: string
    changeStatus: (value: 'ALL' | 'REACT' | 'LANDING PAGE' | 'SPA') => void
    currentStatus: TabStatusType
};
export const WorksMenu: React.FC<TabMenuProps & LinkProps> = (props: TabMenuProps & LinkProps) => {
    return (
        <S.StyledMenu ulType={props.ulType}>
            <ul>
                {props.worksItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <NavLink to={''} active={props.currentStatus===item.status} role={"button"} type={props.type} onClick={() => props.changeStatus(item.status)}
                        >{item.status}</NavLink>
                    </S.ListItem>
                })}
            </ul>
        </S.StyledMenu>
    );
};

