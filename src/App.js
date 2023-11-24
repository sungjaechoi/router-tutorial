import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  // console.log(<About/>)
  // console.log(<Profile/>)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:id" element={<Article/>}/>
    </Routes>
  );
}

export default App;
