import React, {useContext} from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';


const SearchBar = () => {
    document.body.style.backgroundColor = 'white';
    const { searched, setSearched } = useContext(UserContext);
    const getData = (val) => {
        setSearched(val.target.value)
    }

    const submitSearch =  () => {
        console.log(searched)


        fetch(`/search/${searched}`).then((res) => res.json()).then((data) => {
            console.log(data)
        })
    }
    return (
        <>       
        <Search
        type='text'
        placeholder='Search'
        onChange={getData}
        value={searched}
        />
        <Link to={'/boardgamelist'}><SearchButton onClick={submitSearch} searched={searched}>Submit</SearchButton></Link>
        </>
)
}


const SearchButton = styled.button`
background-color: #fff;
border: none;
width: 100px;
	height: 30px;
	cursor: pointer;
	border: none;
	background-color: #7f5a83;
	background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
padding: 10px 12px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 12px;
border-radius: 5px;
color: grey;

&:hover{
    background-color: #C1436D;
}
`

const Search = styled.input`
margin-left: 6px;
width: 200px;
height: 44%;
border-radius: 5px;
border: none;
padding: 5px;
`



export default SearchBar