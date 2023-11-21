import {useSearchParams} from "react-router-dom";

const About = () => {
  // useSearchParams 훅을 사용하여 현재 URL의 쿼리 문자열을 가져옴
  const [searchParams, setSearchParams] = useSearchParams();

  // 특정 쿼리 매개변수 값 가져오기
  const queryValue = searchParams.get('query');

  // 쿼리 매개변수 값 설정하기
  const setQueryValue = (newValue) => {
    // setSearchParams를 사용하여 특정 쿼리 매개변수 값을 변경
    searchParams.set('query', newValue);
    // setSearchParams로 변경된 값을 URL에 적용
    setSearchParams(searchParams);
  };

  // 특정 쿼리 매개변수 제거하기
  const removeQueryValue = () => {
    // setSearchParams를 사용하여 특정 쿼리 매개변수 제거
    searchParams.delete('query');
    // setSearchParams로 변경된 값을 URL에 적용
    setSearchParams(searchParams);
  };

  const AddStringQuery = () => {
    console.log('실행')
    const addString = () => {
      console.log('a')
      searchParams.set('query', 'add')
      setSearchParams(searchParams)
    }
    const CurrentQuerValue = () => {
      console.log('b')
      setSearchParams(searchParams)
    }
    return queryValue === 'example' ? addString() : CurrentQuerValue() 
  }

  return (
    <div>
      <h2>Query Parameters</h2>
      <p>Query Value: {queryValue}</p>
      <button onClick={() => setQueryValue('example')}>Set Query Value</button>
      <button onClick={AddStringQuery}>addString</button>
      <button onClick={removeQueryValue}>Remove Query Value</button>
    </div>
  );
}

export default About;