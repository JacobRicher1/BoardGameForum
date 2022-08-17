import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Wrapper>
            <LogIButton onClick={() => logout()}>
                Sign Out
            </LogIButton>
            </Wrapper>
        )
    )
}

const Wrapper = styled.div`


`
const LogIButton = styled.button`
    width: 150px;
	height: 50px;
	cursor: pointer;
	border: none;
	background-color: #7f5a83;
	background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
	background-size: 200% 100%;
	background-repeat: no-repeat;
	transition: 500ms;
    &::before{
        content: 'Sign In';
	color: rgba(255,255,255,0.5);
	font-size: 16px;
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

export default LogoutButton