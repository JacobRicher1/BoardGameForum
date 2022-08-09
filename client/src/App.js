import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Ranking from "./components/Ranking";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ranking" element={<Ranking />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>

      </Routes>
    </Router>
  );
}



export default App;
