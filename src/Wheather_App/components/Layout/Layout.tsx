import {
  LayoutWrapper,
  Header,
  Main,
  HeaderLink,
  NavigationContainer,
} from "./styles";

import { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {

    return (
        <LayoutWrapper>
            <Header>
                <NavigationContainer>
                    <HeaderLink to="/"> 
                        Home
                    </HeaderLink>
                    <HeaderLink to="/weather">
                        Weather
                    </HeaderLink>
                </NavigationContainer>
            </Header>
            <Main>{children}</Main>
        </LayoutWrapper>
    );
}

export default Layout;