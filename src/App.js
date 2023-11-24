import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/categorys/:categoryID" element={<Category/>}/>
      </Route>
    </Routes>
  );
}

export default App;
