import { Outlet } from 'react-router-dom'
import AritcleItem from './AritcleItem';

const Articles = () => {
  return(
    <div>
      <Outlet/>
      <ul>
        <AritcleItem id={1}/>
        <AritcleItem id={2}/>
        <AritcleItem id={3}/>
      </ul>
    </div>

  )
}

export default Articles;