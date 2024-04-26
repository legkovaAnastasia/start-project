import React from 'react';
import styled, {css} from "styled-components";
import {Link, LinkProps} from "../Link";
import {theme} from "../../styles/Theme";

type MenuProps = {
    menuItems: Array<string>
    ulType: string
}
export const Menu = (props: MenuProps & LinkProps) => {
    return (
        <StyledMenu ulType={props.ulType}>
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

const StyledMenu = styled.nav<{ulType:string}>`
    ${props => props.ulType === 'headerMenu' && css<{ ulType: string }>`
        ul {
            display: flex;
            gap: 30px;
            justify-content: center;
        }

        @media ${theme.media.tablet} {
            display: none;
        }
    `}
    ${props => props.ulType === 'worksMenu' && css<{ ulType: string }>`
        ul {
            display: flex;
            justify-content: space-between;
            max-width: 352px;
            width: 100%;
            margin: 0 auto 40px;
        }
    `}
`

const ListItem = styled.li`
`
