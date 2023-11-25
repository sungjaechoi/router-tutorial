import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import UserData from './UserData'

const Userinfo = () => {
  const [goBackClickChicked, setGoBackClickChicked] = useState(false);
  console.log(goBackClickChicked)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    setGoBackClickChicked(true)
  }

  const goForward = () =>{
    navigate(1)
  }

  // 현재 페이지의 URL parameter를 객체로 가져온다.
  const {userID} = useParams()
  
  //findIndex가 Userdata의 원소를 순회하면서 Userdata[index].id와 URL parameter의 value가 같다면 순회를 멈추고 해당 index를 userIndex에 할당한다.
  //useParams로 URL parameter를 가져오는 경우 해당 value는 String Type이기 때문에 Number Type으로 변환이 필요하다.
  const userIndex = UserData.findIndex((item) => item.id === Number(userID))
  console.log('userIndex',userIndex)
  
  //배열의 대괄호 표기법[index]에 userIndex변수를 할당해서 동적 배열 타입으로 userinfo에 할당한다
  // feedback -> 변수명의 혼동 ? Data = 객체  ,  list = 배열 
  const userinfo = UserData[userIndex]
  // Data 와 list 예시
  // Data -> 단수
  // const userData = {name: '조민혁', age: 33} => Date 객체로 본다./ Date 변수명 비추 
  // const userList = [{name: '조민혁', age: 33},{name: '조민혁', age: 33},{name: '조민혁', age: 33},{name: '조민혁', age: 33}]

  //조건 1. 최 하단 코드 "다음 유저 바로가기"는 현재 UseData index의 다음 index 값을 필요로 한다.
  //조건 2. 마지막 index에 도달하게 되면 undefined를 반환한다.
  //결론. nextId가 undefined일때 <Link>를 반환하지 않고 undefined를 반환하게 된다.

  // checkNext는 userData의 총 원소수(length)가 userData의 index + 1 보다 작은 경우 true 반환하고
  // 두개의 값이 같아질 경우 false반환한다.
  const checkNext = UserData.length > userIndex+1
  console.log("총 원소수",UserData.length)
  console.log("현재 인덱스 + 1",userIndex+1)

  
  
  //nextId는 조건에 따라 <Link>에 할당될 다음 index를 할당 하거나 undefined를 반환한다.
  const nextItem = UserData[userIndex + 1]

  //feedback - 표현식이 복잡할 경우 적절한 변수명으로 라벨링이 필요
  //const nextId = checkNext ? UserData[userIndex + 1].id : undefined
  const nextId = checkNext ? nextItem.id : undefined

  //UserData가 있을시 무시되며, 없을시 return된다.
  if (userinfo === undefined){
    return(
      <p>사용자를 찾을 수 없습니다.</p>
      )
    }
  // feedback_Tip.
  // if문의 조건이 true일 경우 아래 코드는 실행되지 않기 때문에 
  // 지금과 같이 if문 다음으로 오는 코드는 if문의 조건과 상반되는 흐름을 자연스럽게 유추할수 있다.

  //userinfo에 데이터가 있을 경우 구조분해 할당한다.
  const {id, name, email} = userinfo

  return(
    <div>
      <button onClick={goBack}>이전 으로</button>
      {goBackClickChicked ? <button onClick={goForward}>앞으로 으로</button> : undefined}
      <dl>
        <dt>유저 명 : {name}</dt>
        <dd>ID : {id}</dd>
        <dd>email : {email}</dd>
      </dl>
      {
        nextId ? <Link to={`/users/${nextId}`}>다음 유저 바로가기</Link> : undefined
      }
    </div>
  )
}

export default Userinfo;