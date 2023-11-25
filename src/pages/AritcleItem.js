import { NavLink } from "react-router-dom";
const AritcleItem = ({id}) => {
  const activeStyle = {
    color:'green',
    fontSize: 21
  }

  return(
    <li>
      <NavLink 
        to={`/articles/${id}`}
        style={({isActive}) => (isActive ? activeStyle : undefined)}
      >
      게시글 {id}
      </NavLink>
    </li>
  )
}

export default AritcleItem;