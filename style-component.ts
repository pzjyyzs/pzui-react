import styled, { createGlobalStyle } from "styled-components";
import { NavLink as MyNavLink  } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        :after {
            box-sizing: border-box;
        }
        :before {
            box-sizing: border-box;
        }
    }
    ul, ol{list-style: none;}
    h1, h2, h3, h4, h5 ,h6 { font-weight: normal;}
    a { text-decoration: none; color: inherit;}
    pre{font-family: "Fira Code Medium", Consolas, monospace;}
    
`;

export const IndexBody = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background-color: #ffffff;
    color: #000;
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    padding: 12px 24px 12px 24px;
    border-bottom: 1px solid #cbcbcb;
    line-height: 24px;
    font-weight: normal;
    font-size: 16px;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media (min-width: 715px) {
        flex-wrap: nowrap;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    order: 1;
    margin-right: auto;
`;

export const HeaderButton = styled.div`
    padding: 10px 12px;
    color: #000;
    line-height: 16px;
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;
    @media (min-width: 1000px) {
        display: block;
    }
`;

export const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
    order: 2;
    @media (min-width: 715px) {
       order: 3;
    }
`;

export const HeaderIconBtn = styled.a`
    display: flex;
    height: 36px;
    width: 36px;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    padding-top: 10px;
    background-color: #fff;
    color: #000;
`;

export const Nav = styled.nav`
    display: none;
    margin: 0 24px;
    padding-top: 20px;
    max-width: 16em;

    @media (min-width: 920px) {
       display: block;
    }
`;


export const Main = styled.main`
    display: block;
    position: relative;
    padding: 0 24px;
    padding-top: 20px;
    color: #000;
    outline: none;
    width: 100%;
    @media (min-width: 920px) {
        display: block;
        max-width: 40em;
    }
`;

export const NavA = styled.a`
    outline: none;
    color: inherit;
`;

export const NavDiv = styled.div`
    text-transform: uppercase;
    padding: 6px 24px;
    border-left: 4px solid transparent;
    cursor: default;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
`;

export const NavLink = styled(MyNavLink)`
    display: block;
    padding: 6px 12px 6px 72px;
    border-left: 4px solid transparent;
    line-height: 24px;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;

    &.active {
        border-left-color: #000;
        background-image: linear-gradient(
            0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92));    
        background-color: rgb(0, 0, 0);
    }
`;