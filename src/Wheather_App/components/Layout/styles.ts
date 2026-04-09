import styled from "@emotion/styled";
import { NavLink, } from "react-router-dom";
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #0f172a;
  padding: 0 40px;
  color: white;
`;

export const NavigationContainer = styled.nav`
  display: flex; 
  gap: 30px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.7;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px;
  background: #0b1f33;
  display: flex;
  justify-content: center;
`;