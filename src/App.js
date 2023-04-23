import "./assets/App.css";
import Home from "./components/Home";
import Character from "./components/Character";
import ChangeCharacter from "./components/ChangeCharacter";
import CreateCharacter from "./components/CreateChraracter";
import SearchingCharacter from "./components/SearchingCharacter";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="/character/setcharacter/:id" element={<ChangeCharacter />} />
            <Route path="/character/create" element={<CreateCharacter /> } />
            <Route path="/search/character" element={<SearchingCharacter />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          
        </Router>
      
    </>
  );
}

export default App;
