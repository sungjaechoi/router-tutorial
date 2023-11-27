import { Route, Routes } from "react-router-dom";
import  './App.css'
import Layout from "./pages/Layout";
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
      <Route element={<Layout/>}>
        {/* index Props = path='/' 동일한 의미와 역활을 가짐 -> 좀더 명시적인 표현방법 */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile/>}/>
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>}/>
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
