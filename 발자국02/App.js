import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState('우린 서로의 귀 뒤편에');
  let [글제목2, 글제목변경2] = useState('씨앗 하나를 묻고');
  let [글제목3, 글제목변경3] = useState('오랫동안 기다렸지');

  return (
    <div className="App">
      <div className = "black-nav">
        <div>도롱뇽</div>
      </div>
      <div className = "list">
        <h3> { 글제목 } </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목2 } </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목3 } </h3>
        <p>7월 2일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
