import { Link } from "react-router-dom"


const Home = () => {
  return(
    <div>
      <h1>Welcome to the Home Page!</h1>
      <ul>
        <li>
          <Link to="/products/1">상품 1</Link>
        </li>
        <li>
          <Link to="/products/2">상품 2</Link>
        </li>
        <li>
          <Link to="/products/3">상품 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home