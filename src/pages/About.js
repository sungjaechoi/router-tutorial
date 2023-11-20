import {useLocation} from "react-router-dom";
const About = () => {
  const location = useLocation()
  // 현재 페이지의 위치인 location객체를 반환 받는다
  console.log(location) 
  //객체의 형태는
  // {pathname: '/about', search: '', hash: '', state: null, key: 'default'} 이다
  
  const {pathname, search, hash, state, key} = location
  return(
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>현재 URL 경로 : {pathname}</p>
      <p>현재 URL의 쿼리스트링 : {search}</p>
      {/* hash : URL의 일부로, 페이지 내에서 특정 위치로 스크롤하거나 
                페이지의 일부를 동적으로 변경하는 데 사용되는 것 
                ex> #section-1 */}
      <p>hash: {hash}</p>
      {/* key :  히스토리 항목의 고유 식별자로 
                일반적으로는 자동생성되는 고유키를 말한다.
                특별한 상황에서 사용 될수 있다 */}
      <p>key : {key}</p>
      {/* state: 히스토리 스택에 추가되는 항목과 연결된 상태 데이터를 나타낸다. 
                이 데이터는 브라우저의 히스토리에 저장되며, 페이지가 다시 로드될 때 popstate 이벤트와 함께 전달 된다.
                주로 페이지의 상태 정보를 저장하고 복원하는 데 사용된다. */}
      <p>state : state : {state}</p>
    </div>
  )
}

export default About;