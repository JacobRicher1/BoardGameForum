const express = require('express')
const morgan = require('morgan');
const helmet = require('helmet');
const {searchGames, rankedGames, BGProfile, randomGame, reviews, posts} = require("./handlers")

require('dotenv').config();
const PORT = 8000


express()
    
    .use(express.json())

    .get("/random", randomGame)

    .get("/search/:boardgame", searchGames)

    .get("/rank", rankedGames)

    .get("/bgProfile/:id", BGProfile)

    .get("/reviews", reviews)

    .get("/posts", posts)

    .post("/register", )
    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });