/* eslint-disable */ 

import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['우린 서로의 귀 뒤편에', '씨앗 하나를 묻고', '오랫동안 기다렸지']);
  let [좋아요, 좋아요변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let name = '도롱뇽';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[2] = '오랫동안 말이 없지';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <div>{name}</div>
      </div>
      <button onClick = { 제목바꾸기 }>버튼</button>
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

      <button onClick = { () => {modal변경(!modal)}}>열고 닫는 버튼</button>

      {
        modal === true
        ? <Modal/> 
        :null
      }


    </div>
  );
}

function Modal(){
  return(
    <>
      <div className = "modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


export default App;
