import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Ranking from "./components/Ranking";

import BoardGameProfile from "./components/BoardGameProfile";
import BoardGameListDisplay from "./components/BoardGameListDisplay";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import SinginPage from "./components/SinginPage";
import Articles from "./components/Articles/Articles";
import { UserContext } from "./UserContext";
import {useState} from "react";




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>


        <Route path="/" element={<Home />}/>
        <Route path="/boardgame/:id" element={<BoardGameProfile />} />
        <Route path="/ranking" element={<Ranking />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/boardgamelist" element={<BoardGameListDisplay />}/>
        <Route path="/login" element={<SinginPage />}></Route>
        <Route path="/article:id" element={<Articles />}/>




      </Routes>
    </Router>
  );
}



export default App;
