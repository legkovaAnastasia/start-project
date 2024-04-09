import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
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
const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 55px;
    text-align: center;
    color: #DBEBEA;
`