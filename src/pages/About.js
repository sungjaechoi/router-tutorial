import { useLocation } from "react-router-dom";
import {useSearchParams} from "react-router-dom";

const About = () => {
  const location = useLocation()
  const {pathname, search, key} = location
  
  const [searchParams, setSearchParams] = useSearchParams()
  

  const detail = searchParams.get('detail')
  const mode = searchParams.get('mode')

  const onToggleDetail = () => {
    setSearchParams({mode, detail: detail === 'true' ? false : true})
  }
  
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1
    setSearchParams({mode: nextMode, detail})
  }
  return(
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <strong>useSearchParams</strong>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <strong>uselocation</strong>
      <p>현재 URL 경로 : {pathname}</p>
      <p>현재 URL의 쿼리스트링 : {search}</p>
      <p>key : {key}</p>
      <button onClick={onToggleDetail} >Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  )
}

export default About;