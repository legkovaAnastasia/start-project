import React from 'react';
import styled from "styled-components";
import {Link, LinkProps} from "../Link";

export const Menu = (props: { menuItems: Array<string>}&LinkProps) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="" type={props.type}>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const ListItem = styled.li`
`
