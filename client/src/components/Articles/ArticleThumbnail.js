import React from 'react'
import { useState,useEffect } from "react"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ArticleThumbnail = () => {
    const [randombg, setRandombg] = useState([]);
    
    useEffect(() => {
        fetch(`/random`).then((res) => res.json()).then((data) => {
            console.log(data)
            setRandombg(data.data[0])
        }, )
        console.log(randombg)

    }, [])

return (
    
    <>
    <Link to={`/boardgame/${randombg.id}`} >
    <Wrapper>
    <Text>{randombg.name}</Text>
    <Image src={randombg.image_url} />
    </Wrapper>
    </Link>
    </>
)
}

const Text = styled.div`
color: black;
`

const Wrapper = styled.div`
width: 250px;
border-style: solid;
border-radius: 5px;
border-color: black;
display: inline-block;
position: relative;
bottom: 60px;
margin: 10px;
background-color: white;
&:hover{

filter: drop-shadow(3px 1px 4px black);

}
`

const Image = styled.img`
width: 200px;
height: 200px;
`

export default ArticleThumbnail