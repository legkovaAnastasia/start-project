import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import {Link} from "react-scroll";

export type LinkProps = {
    type: 'decorated'
}
export const NavLink = styled(Link)<LinkProps & { active?: boolean }>`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 55px;
    text-align: center;
    padding: 10px;
    color: ${theme.colors.light};
    position: relative;
    z-index: 0;

    ${props => props.type === 'decorated' && css`
        &:hover, &.active {
            &::before {
                height: 10px;
            }
        }`
    }

    ${props => props.type && css<LinkProps & { active?: boolean }>`
        margin-bottom: 10px;

        &::before {
            content: '';
            display: inline-block;
            background-color: ${theme.colors.decoration};

            position: absolute;
            bottom: 8px;
            left: 0;
            right: 0;
            z-index: -1;
            height: 0;
            transition: ${theme.animation.transition};
            
            ${props => props.active && css`
                height: 10px;
            `}
        }
    `}
`