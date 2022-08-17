import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Ranking = () => {
  const [rank, setRank] = React.useState([]);
  useEffect(() => {
    console.log("hello")
    fetch("/rank")
    .then((res) => res.json())
    .then((data) => {
    setRank(data.data)}
  )}, [])

return (
  <div>{rank.map((eachBoardGame, i) => {
    console.log(eachBoardGame, i);
    return (
      
      <Link to={`/boardgame/${eachBoardGame.id}`} style={linkStyle}>
        <Wrapper>
          <BoardGameRank>{eachBoardGame.rank}</BoardGameRank>
          <BoardGameImage src={eachBoardGame.image_url}></BoardGameImage>
          
          <BoardGameTitle>{eachBoardGame.name}</BoardGameTitle>
          <BoardGameDate>({eachBoardGame.year_published})</BoardGameDate>
          <BoardGamePlayers>{eachBoardGame.players} Players</BoardGamePlayers>
        </Wrapper>
        </Link>
    )

  })}
  </div>
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

const BoardGameRank = styled.div`
font-size: xx-large;
vertical-align: middle;
display: flex;
align-items: center;
margin: 8px;
color: black;
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

export default Ranking