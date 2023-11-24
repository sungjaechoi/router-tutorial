import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} >
        <Route path="/products/:ID" element={<Product/>}/>
      </Route>
    </Routes>
  )
}

export default App;
