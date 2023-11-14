import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const products = {
    1: { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    2: { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    3: { id: 3, name: 'Product 3', description: 'Description for Product 3' },
  };
  // useParams를 사용하여 현재 라우트의 URL 파라미터를 가져온다.
  const {ID} = useParams()

  //'products' 객체에서 상품 정보를 가져온다.
  const ProductData = products[ID];

  //'ProductData'객체의 name과 description 이름으로 구조분해 할당 한다.
  const {name, description} = ProductData;

  
  return(
    <div>
      <strong>{name}</strong>
      <p>{description}</p>
    </div>
  )
}


export default Product;