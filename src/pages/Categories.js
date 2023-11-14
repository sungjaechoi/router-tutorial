const categories = [
  // {id: 1, name:'Category1', description:'Description for Category 1'},
  // {id: 231, name:'Category231', description:'Description for Category 1'},
  // {id: 24, name:'Category24', description:'Description for Category 1'},
  // {id: 21312, name:'Category21312', description:'Description for Category 1'},
];
for(let i = 1; i <= 30; i++){
  const rendomId = Math.random(i)*10000
  categories.push({id: Math.floor(rendomId), name:`Category${i}`, description:`Description for Category ${i}`})
}


export default categories;

