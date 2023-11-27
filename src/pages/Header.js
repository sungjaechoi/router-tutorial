import { useNavigate ,NavLink } from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate()

  const goHome = () =>{
    navigate('/')
  }
  
  const goback = () =>{
    navigate(-1)
  }
  const goArticles = () => {
    navigate('/articles',{replace:true})
  }

  const goHash = () => {
    navigate('/about',{ hash: '#section1' })
  }

  const goSearch = () => {
    navigate('/about', { search: '?mode=null&detail=true' });
  }

  return(
    <header style={{background:'lightgray', padding:16, fontSize: 24}}>
      <h1>Header</h1>
      <button onClick={goHome}>홈으로 가기</button>
        <button onClick={goback}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        <br/>
        <button onClick={goSearch}>소개 페이지 바로가기</button>
        <button onClick={goHash}>section으로 가기</button>
      <div>
      </div>
      <nav className="navLink">
        <NavLink to='/about'>소개</NavLink>
        <NavLink to='/profiles/velopert'>velopert</NavLink>
        <NavLink to='/profiles/gildong'>gildong</NavLink>
        <NavLink to='/articles'>게시글</NavLink>
      </nav>
    </header>
  )
}

export default Header