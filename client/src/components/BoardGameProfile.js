import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react';

const BoardGameProfile = () => {
  const [profile, setProfile] = React.useState([]);
  const [review, setReview] = React.useState([]);
  const { id }  = useParams();
  useEffect(() => {
    fetch(`/bgProfile/${id}`)
    .then((res) => res.json())
    .then((data) => {  
        setProfile(data.data.games[0])
        
    })
}, [id]);

useEffect(() => {
  fetch(`/reviews/${id}`)
  .then((res) => res.json())
  .then((data) => {
    setReview(data.data)

  })
}, [id])


console.log(profile)
document.body.style.backgroundColor = 'white';
  
  return (
    <Wrapper>
    <MainImage src={profile.image_url}></MainImage>
    <Rating>{Math.round(profile.average_user_rating * 10) / 10}</Rating>
    <Title>{profile.name}</Title>
    <Price>{profile.msrp_text}</Price>
    <Players>{profile.players} Players </Players>
    <WishListButton>Add To WishList</WishListButton>
    <CollectionButton>Add To Collection</CollectionButton>
    <Description>{profile.description_preview}</Description>

    <div>{review.rating}</div>
    

    </Wrapper>


  )
}

const CollectionButton = styled.button`
margin: 10px;
font-family: Verdana-Bold;
background-color: grey; 
border: none;
color: black;
padding: 10px 12px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 12px;
border-radius: 5px;
color: black;

&:hover{
    background-color: #C1436D;
}
`

const WishListButton = styled.button`
margin: 10px;
font-family: Verdana-Bold;
background-color: grey; 
border: none;
color: black;
padding: 10px 12px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 12px;
border-radius: 5px;
color: black;

&:hover{
    background-color: #C1436D;
}
`

const Description = styled.div`
color: black;
display: flexbox;
flex-flow: wrap;
border-style: solid;
margin: 20px;
`


const Players = styled.div`
color: black;
font-family: Verdana-Bold;
font-size: 10px;
width: fit-content;
`
const Price = styled.div`
color: black;
font-family: Verdana-Bold;
font-size: 10px;
width: fit-content;
`
const Title = styled.div`
color: black;
font-family: Verdana-Bold;
font-size: 35px;
display: flex;
margin: 15px;

width: fit-content;
`

const MainImage = styled.img`
border-radius: 5%;
margin-top: 50px;
margin-left: 50px;
margin-right: 20px;
width: 15%;

`
const Rating = styled.div`
color: white;
font-family: Verdana-Bold;
font-size: 25px;
background-color: #A350A3;
width: fit-content;
height: fit-content;
padding: 10px;
border-radius: 50%;
text-align: center;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-flow: wrap;
`

export default BoardGameProfile