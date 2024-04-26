import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/menu/MobileMenu";

const items = ['Home', 'Skills', 'Works', 'About Me', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items} type={'decorated'}/>
                    <MobileMenu menuItems={items} type={'decorated'}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(38, 50, 56, 0.7);
    padding: 20px 0;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`
