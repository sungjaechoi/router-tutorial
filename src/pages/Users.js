import { Link, Outlet, useLocation } from "react-router-dom";
import UsersData from "./UserData"

const Users = () => { 
  // 선택된 페이지의 목록에 폰트 색상을 빨간색으로 변경하고 싶다.
  //1. UserData의 목록 id 값과 비교할수 있는 플래그 만들기
  //2. 플래그 : Loaction 훅으로 pathName에서 id값만 추출 하기
  //3. UserData의 id와 현재 페이지(pathName)를 비교하여 스타일 부여하기
  // useLocation에서 pathName만 추출 
  const {pathname} = useLocation()
  // 추출한 PathName을 Slice 메서드로 "/users/" 분리후 Number 형변환
  const CurrentUrlId = Number(pathname.slice(7)) 

  return(
    <div>
      <h1>상세 정보보기</h1>
      <Outlet/>
      <ul>
        {
          UsersData.map((item) => {
            const listTitleColor = CurrentUrlId === item.id ?  {color:"red"} : {colro: "#000"}
            return(
              <li key={item.id}>
                <strong style={listTitleColor}>
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