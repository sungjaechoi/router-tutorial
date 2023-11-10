import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const products = {
    1: { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    2: { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    3: { id: 3, name: 'Product 3', description: 'Description for Product 3' },
  };

  const {ID} = useParams()
  const ProductData = products[ID];
  const {name, description} = ProductData;
  
  console.log(products[ID].id)
  console.log(products[ID].id === Number(ID))
  console.log(typeof Number(ID))

  
  return(
    <div>
      <strong>{name}</strong>
      <p>{description}</p>
    </div>
  )
}


export default Product;