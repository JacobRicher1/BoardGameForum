import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import UsersCollection from './UsersCollection';
import axios from "axios"
import ArticleThumbnail from './Articles/ArticleThumbnail';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
          <Article>
            {user?.picture && <ProfilePic src={user.picture}></ProfilePic>}
            <UsersName>{user.name}</UsersName>
            <Title>WishList</Title>
            <Wrapper>
            
              <ArticleThumbnail />
              <ArticleThumbnail />
              <ArticleThumbnail />
            
            </Wrapper>
            <Title>Collection</Title>
            <Wrapper>
            
              <ArticleThumbnail />
              <ArticleThumbnail />
              <ArticleThumbnail />
          
            </Wrapper>
            

          </Article>
          
        )
    )
}


const Title = styled.div`
font-family: Verdana-Bold;

`
const Article = styled.article`
display: flex;
flex-direction:column;
flex:1;
`

const Wrapper = styled.div`
width: fit-content;
position: relative;
left: 150px;

`

const WishList = styled.div`

`

const UsersName = styled.div`

font-family: Verdana-Bold;


`

const ProfilePic = styled.img`
width: 120px;
border-radius: 5px;
border-style: solid;
border-width: 5px;
`

export default Profile