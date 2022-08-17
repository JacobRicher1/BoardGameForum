import React, {useContext} from 'react'
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext"
import styled from 'styled-components';

const BoardGameListDisplay = () => {
    const [searchedGames, setSearchedGames] = useState([]);
    const {searched, setSearched} = useContext(UserContext);
    console.log("display list", searched)

    useEffect(() => {
        fetch(`/search/${searched}`).then((res) => res.json()).then((data) => {
            console.log(data)
            setSearchedGames(data.data)
        }, )

    }, [])


return (
        <div>{searchedGames.map((eachBoardGame, i) => {
    console.log(eachBoardGame, i);
    return (
    
    <Link to={`/boardgame/${eachBoardGame.id}`} style={linkStyle}>
        <Wrapper>
        <BoardGameImage src={eachBoardGame.image_url}></BoardGameImage>
        <BoardGameTitle>{eachBoardGame.name}</BoardGameTitle>
        <BoardGameDate>({eachBoardGame.year_published})</BoardGameDate>
        <BoardGamePlayers>{eachBoardGame.players} Players</BoardGamePlayers>
        </Wrapper>
        </Link>
    )

})} </div>
)};
const linkStyle ={
    textDecoration: "none",
}

const BoardGamePlayers = styled.div`
color: black;
display: flex;
align-items: center;
`

const BoardGameDate = styled.div`
color: grey;
display: flex;
align-items: center;
margin: 7px;
`


const BoardGameTitle = styled.div`
color: black;
font-size: 20px;
font-family: "Verdana-Bold";
display: flex;
align-items: center;
margin: 4px;

`
const BoardGameImage = styled.img`
width: 150px;
`

const Wrapper = styled.div`
display: flex;

padding: 10px;
background-color: white;
border-width: 2px;
border-style: solid;
border-color: black;
width: auto;
height: auto;
  &:hover{
    background-color: lightgrey;
  }

`

export default BoardGameListDisplay