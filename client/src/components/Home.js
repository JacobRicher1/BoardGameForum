import React from 'react'
import styled from 'styled-components'
import {useState} from "react"
import { Link } from 'react-router-dom';
import ArticleThumbnail from './Articles/ArticleThumbnail';
import ForumPosts from './ForumPosts';

const Home = () => {
    const [randombg, setRandombg] = useState([]);
    
    const randomGame =  () => {
        fetch(`/random`).then((res) => res.json()).then((data) => {
            console.log(data)
            setRandombg(data.data[0])
        })
        console.log(randombg)
    }
return (
    <>
    <Wrapper>
        <RandomTitle>Discover something new!</RandomTitle>
        <RandomButton onClick={randomGame}>Random Game!</RandomButton>
        <Link to={`/boardgame/${randombg.id}`}>
        <ImgDisplay>
        <RandomName>{randombg.name}</RandomName>
        <RandomImage src={randombg.image_url}>
        </RandomImage>
        </ImgDisplay>
        </Link>
    </Wrapper>
    <ForumTitle>Forum Posts</ForumTitle>
    <ForumPosts />
    <HotTitle>New Hotness</HotTitle>
    <ArticleThumbnail />
    <ArticleThumbnail />
    <ArticleThumbnail />
    </>
)
}

const ForumTitle = styled.div`
position: relative;
bottom: 400px;
left: 15px;
font-family: Verdana-Bold;
`

const HotTitle = styled.div`
position: relative;
bottom: 70px;
left: 350px;
font-family: Verdana-Bold;


`

const RandomName = styled.div`
color: black;
font-family: Verdana-Bold;
text-decoration: none;
`


const RandomImage = styled.img`
width: 100%;
`

const RandomButton = styled.button`
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
const ImgDisplay = styled.div`
width: 400px;
height: 100px;

`
const RandomTitle = styled.div`
font-family: Verdana-Bold;
color: black;

`
const Wrapper = styled.div`
display: flex;
height:400px;
flex-flow: column wrap;
align-content: flex-end;
`
export default Home