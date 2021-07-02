/* eslint-disable */ 

import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['우린 서로의 귀 뒤편에', '씨앗 하나를 묻고', '오랫동안 기다렸지']);
  let [좋아요, 좋아요변경] = useState(0);
  let name = '도롱뇽';

  return (
    <div className="App">
      <div className = "black-nav">
        <div>{name}</div>
      </div>
      <button onClick = { () => {글제목변경(['한숨 눈도 붙이지 않고', '창문도 열지 않고', '오랫동안 말이 없지' ])} }>버튼</button>
      <div className = "list">
        <h3> { 글제목[0] } <span onClick = { () => { 좋아요변경(좋아요 + 1)} }>❤</span> {좋아요} </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[1] } </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[2] } </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
