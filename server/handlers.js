const axios = require('axios');
const { query, response } = require('express');
const { MongoClient } = require('mongodb');

const searchGames = async (req, res) => {
    console.log(req.params.boardgame)
    inputName = req.params.boardgame
    
    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/search?${inputName}&client_id=QHEaZEH61Z`,
        params: {name: req.params.boardgame},
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data.games,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
}   

const randomGame  = async (req, res) => {

    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/search?random=true&client_id=QHEaZEH61Z`
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data.games,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
}

const rankedGames = async (req, res) => {
    
    
    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/search?&client_id=QHEaZEH61Z`,
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data.games,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
}   

const reviews = async (req, res) => {
    gameId = req.params.id
    
    
    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/reviews?game_id=${gameId}&client_id=QHEaZEH61Z`,
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data.games,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
}  

const BGProfile = async (req, res) => {
    gameId = req.params.id
    
    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/search?ids=${gameId}&client_id=QHEaZEH61Z`,
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
}  

const posts = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.boardgameatlas.com/api/forum?limit=3&client_id=QHEaZEH61Z`,
    }
    axios.request(options).then((response) => {
        res.status(200).json({
            data: response.data,
            message: "ok"
        }
        )
    }).catch((error) => {
        console.log(error)
    })
} 
    
    module.exports = {searchGames, rankedGames, BGProfile, randomGame, reviews, posts};