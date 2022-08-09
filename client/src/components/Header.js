import React from 'react'
import styled from "styled-components" 
import { NavLink as Link } from "react-router-dom"

<link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet'></link>
const Header = () => {
    return (
        <Nav>
            <NavLink to="/">
                <Title>BGDB</Title>
            </NavLink>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    <Title>About</Title>
                </NavLink>
                <NavLink to="/profile" activeStyle>
                    <Title>Profile</Title>
                </NavLink>
                <NavLink to="/ranking" activeStyle>
                <Title>Ranking</Title>
                </NavLink>
                <NavBtnLink to="/sign">Sign In</NavBtnLink>
            </NavMenu>
        </Nav>
    )
}


const Title = styled.div`
    font-family: 'Verdana-Bold

';
`

const Nav = styled.nav`
    background: #A350A3;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding: 3px;
`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    height: 100%;
    
    cursor: pointer;

    &.active{
        color: #C1436D;
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
`

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #222;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;

    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all .2s ease-in-out;
        background: #fff;
        color: pink;
    }
`

export default Header