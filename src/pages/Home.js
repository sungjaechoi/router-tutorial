import { Link, Outlet } from "react-router-dom"
import Categories from './Categories'
const Home = () => {
  return(
    <div>
      <h1>"Welcome to the Home Page!"</h1>
      <Outlet/>
      <ul>
        {Categories.map((item)=>{
          const {id, name} = item
          return(
            <li key={id}>
              <Link to={`/categorys/${id}`}>{name} Link</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home