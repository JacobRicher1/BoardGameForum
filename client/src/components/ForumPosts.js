import React from 'react'
import { useState,useEffect } from "react"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ForumPosts = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        fetch(`/posts`).then((res) => res.json()).then((data) => {
            console.log(data)
            setPost(data.data.posts)
        }, )
        console.log(post)

    }, [])

return (
    <div>{post.map((eachPost, i) => {
        console.log(eachPost, i);
        return (
            <Wrapper>
            <Title>{eachPost.title}</Title>
            <Desc>{eachPost.description_preview}</Desc>
            </Wrapper>
        )
    
    })} </div>


)
}

const Title = styled.div`
color: black;
font-weight: bold;
`
const Desc = styled.div`
`

const Wrapper = styled.div`
width: 250px;
border-style: solid;
border-radius: 5px;
border-color: black;
display: inline-block;
position: relative;
bottom: 400px;
margin: 10px;
background-color: white;
&:hover{

filter: drop-shadow(3px 1px 4px black);

}
`
export default ForumPosts;