import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: blue;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 20px 40px;
  color: white;
`;

export const NavigationContainer = styled.nav`
  display: flex; 
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: black;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});