import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <LogIButton onClick={() => loginWithRedirect()}>
                Sign In
            </LogIButton>
            
        )
    )
}
const LogIButton = styled.button`
width: 150px;
	height: 50px;
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #7f5a83;
	background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
	background-size: 200% 100%;
	background-position: left;
	background-repeat: no-repeat;
	transition: 500ms;
    &::before{
        content: 'Sign In';
	color: rgba(255,255,255,0.5);
	font-size: 16px;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 40px;
	background-color: #1b2845;
	background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
	transition: 500ms;
    }
    &:hover{
        background-position: right;
    }
    &:hover::before{
        color: rgba(255,255,255,0.8);
    }
    &:focus{
        outline: none;
    }

`
export default LoginButton