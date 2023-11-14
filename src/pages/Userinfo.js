import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UserDate from './UserData'

const Userinfo = () => {
  // 현재 페이지의 URL 파라미터를 객체로 가져온다.
  const {userID} = useParams()
  //데이터 배열의 대괄호 표기법 내부에 useParams로 가져온 URl 파라미터의 value를 할당해 동적으로 사용할수 있도록한다.
  //즉, 데이터의 인덱스와 페이지의 Url파라미터를 맞춘다.
  const userinfo = UserDate[userID]

  //UserData가 있을시 무시되며, 없을시 return
  if (userinfo === undefined){
    return(
      <p>사용자를 찾을 수 없습니다.</p>
    )
  }

  //userinfo에 데이터가 있을 경우 구조분해 할당한다.
  const {id, name, email} = userinfo
  console.log(UserDate)
  console.log(userID)
  console.log(userinfo)

  return(
    <div>
      <dl>
        <dt>유저 명 : {name}</dt>
        <dd>ID : {id}</dd>
        <dd>email : {email}</dd>
      </dl>
      <Link to={`/users/${id}`}>다음 유저 바로가기</Link>
    </div>
  )
}

export default Userinfo;