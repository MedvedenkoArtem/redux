import {
  LayoutWrapper,
  Header,
  Main,
  HeaderLink,
  NavigationContainer,
  getActiveStyles
} from "./styles";

import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <Header>

        <NavigationContainer>
          <HeaderLink to="/" style={getActiveStyles}>
            Create Employee
          </HeaderLink>

          <HeaderLink to="/EmployeeCard" style={getActiveStyles}>
            Employees
          </HeaderLink>
        </NavigationContainer>
      </Header>

      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;