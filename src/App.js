import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Userinfo from "./pages/Userinfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users/>}>
        <Route path="/users/:userID" element={<Userinfo/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
