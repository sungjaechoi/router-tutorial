import { Link } from "react-router-dom";
import UsersData from "./UserData"

const Users = () => {
  return(
    <div>
      <h1>상세 정보보기</h1>
      <ul>
        {
          UsersData.map((item) => {
            return(
              <li key={item.id}>
                <strong>
                  유저 이름 : {item.name}
                </strong>
                <Link style={{display:"block"}} to={`/users/${item.id}`}>{item.name} 상세 정보보기</Link>
              </li>
            )
          } )
        }
      </ul>
    </div>
  )
}


export default Users;