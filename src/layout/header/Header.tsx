import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "../../components/menu/MobileMenu";
import {S} from "./Header_Styles";

const items = ['Home', 'Skills', 'Works', 'About Me', 'Contacts']
export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ?
                        <MobileMenu menuItems={items} type={'decorated'}/> :
                        <Menu menuItems={items} type={'decorated'} ulType={'headerMenu'}/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

