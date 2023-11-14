import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div>
      <h1>"Welcome to the Home Page!"</h1>
      <ul>
        <li>
          <Link to="/categorys/1">category1</Link>
        </li>
        <li>
          <Link to="/categorys/2">category2</Link>
        </li>
        <li>
          <Link to="/categorys/3">category3</Link>
        </li>
        <li>
          <Link to="/categorys/4">category4</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home