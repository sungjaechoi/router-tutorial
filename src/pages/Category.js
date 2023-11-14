import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Categories from './Categories'


const Category = () => {
  const {categoryID} = useParams()
  const findIndex = Categories.findIndex((index)=> {
    console.log(index)
    console.log(index.id)
    console.log(Number(categoryID))
    return index.id === Number(categoryID)
  })
  const CategoryData = Categories[findIndex]
  console.log('현재 index',findIndex)
  console.log(Categories)

  const CheckNextID = Categories.length > findIndex + 1
  const nextId = CheckNextID ? Categories[findIndex + 1].id : undefined



  if (CategoryData === undefined) {
    return <div>Category not found!</div>;
  }

  const {id, name, description} = CategoryData
  return(
    <div>
      <ul>
        <li>Category ID : {id}</li>
        <li>Category Name: {name}</li>
        <li>Category Description: {description}</li>
        <li>
          { nextId ? <Link to={`/categorys/${nextId}`}>Next Category</Link> : 'END Category'}
        </li>
      </ul>
    </div>

  )
}


export default Category;