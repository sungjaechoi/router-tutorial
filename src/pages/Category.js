import { useParams } from "react-router-dom";


const Category = () => {
  const categories = {
    1: { id: 1, name: 'Category 1', description: 'Description for Category 1' },
    2: { id: 2, name: 'Category 2', description: 'Description for Category 2' },
    3: { id: 3, name: 'Category 3', description: 'Description for Category 3' },
  };
// 현재 라우트의 URL Parameter를 받아온다.
// 받아온 parameter를 "categoryID" 할당한다. = 구조분해 할당인 인 이유 => useParams는 parameter를 객체로 받아온다 
  const {categoryID} = useParams()
// "categoryies"객체의 Parameter와 useParams로 받아온 parameter를 동기화(??)시켜 "CategoryData"에 할당한다.
  const CategoryData = categories[categoryID]

// 'CategoryData' 객체가 없으면 아래 코드 출력
  if (CategoryData === undefined) {
    console.log(CategoryData)
    console.log(!CategoryData)
    return <div>Category not found!</div>;
  }

//"CategoryData" 객체의 프러퍼티의 값을 각 변수에 할당 한다 = 구조분해 할당
  const {id, name, description} = CategoryData
  console.log(CategoryData)
  return(
    <div>
      <ul>
        <li>Category ID : {id}</li>
        <li>Category Name: {name}</li>
        <li>Category Description: {description}</li>
      </ul>
    </div>

  )
}


export default Category;