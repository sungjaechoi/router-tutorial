import { useParams } from 'react-router-dom'

const data = {
  velopert: {
    name : '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong : {
    name : '홍길동',
    description:'고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  const {username} = useParams();
  // console.log(data['velopert'])
  console.log("useParams를 실행하면 객체를 반환 한다.", useParams())
  const userinfo = data[username] ||{name: '확인되지 않은 유저', description: '없음'}
  const {name, description} = userinfo;
  // const profile = data[username];
  
  return(
    <div>
      <h1>사용자 프로필</h1>
      {userinfo ? (
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ):(
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  )
};

export default Profile;