import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import UsersCollection from './UsersCollection';
import axios from "axios"

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
          <Article>
            {user?.picture && <ProfilePic src={user.picture}></ProfilePic>}
            <UsersName>{user.name}</UsersName>
            <Wrapper>
            <div>WishList</div>
            <WishList>

            </WishList>
            </Wrapper>
            <Wrapper>
            <div>Collection</div>
            <>
            </>
            </Wrapper>
            {/* <UsersCollection /> */}
            

          </Article>
          
        )
    )
}

const Article = styled.article`
display: flex;
flex-direction:column;
flex:1;
`

const Wrapper = styled.div`
border-style: solid;
border-width: 1px;
width: fit-content;
align-self: flex-end;

`

const WishList = styled.li`
`

const UsersName = styled.div`
align-self: flex-end;
font-family: Verdana-Bold;


`

const ProfilePic = styled.img`
width: 120px;
border-radius: 5px;
align-self: flex-end;
border-style: solid;
border-width: 5px;
`

export default Profile