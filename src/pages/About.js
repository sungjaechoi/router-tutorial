import {useSearchParams} from "react-router-dom";

const About = () => {
  // 현재 URL 파라미터의 쿼리스트링을 가져옴
  //useSearchParams는 배열 형태로 URL 파라미터의 쿼리스트링을 가져온다.
  //searchParams 객체는 쿼리 파라미터를 조회, 수정 하는 메서드가 담긴 객체를 반환
  //setSearParams는 쿼리파라미터를 객체 형태로 업데이트 할수 있는 함수를 반환
  const [searchParams, setSearchParams] = useSearchParams()
  //특정 쿼리파라미터의 값을 가져온다.
  const detail = searchParams.get('detail')
  const mode = searchParams.get('mode')

  const onToggleDetail = () => {
  // 함수가 실행 되면 쿼리 파라미터 detail의 값이 true인경우 false, false인경우 true로 반환
  //mode는 현재 값 그대로
  // 위 2개를 현재 URL에 업데이트 한다.
    setSearchParams({mode, detail: detail === 'true' ? false : true})
  }
  
  const onIncreaseMode = () => {
  // 함수가 실행되면 쿼리 파라미터 mode의 값이 null인 경우 1을 아닐경우 mode에 1을 더한 값을 반환 
  //detail은 현재값 그대로
  // 위 2개를 현재 URL에 업데이트 한다.
  // parseInt()를 해주는 이유는 숫자를 쿼리파라미터의 타입은 스트링 이기때문에
  // 파싱후 넘버로 변경하여 1을 더해 주어야 한다.
    const nextMode = mode === null ? 1 : parseInt(mode) + 1
    setSearchParams({mode: nextMode, detail})
  }
  return(
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail} >Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  )
}

export default About;