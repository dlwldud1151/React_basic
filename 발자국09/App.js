/* eslint-disable */ 

import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['우린 서로의 귀 뒤편에', '씨앗 하나를 묻고', '오랫동안 기다렸지']);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [좋아요, 좋아요변경] = useState([0, 0, 0]);

  let name = '도롱뇽';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[2] = '오랫동안 말이 없지';
    글제목변경( newArray );
  }

  function 모달바꾸기(){
    modal === false 
    ? modal변경(true)
    : null
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <div>{name}</div>
      </div>
      <button onClick = { 제목바꾸기 }>버튼</button>

      {
        글제목.map(function(글, i){
          return (
          <div className = "list">
            <h3 onClick = { ()=>{누른제목변경(i); 모달바꾸기()} }> { 글 } </h3> 
            <p>7월 2일 발행</p>
            <hr/>
          </div>
          )
        })
      }


      <button onClick = { () => {modal변경(!modal)}}>열고 닫는 버튼</button>
      {
        modal === true
        ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}/> 
        :null
      }

    </div>

  );
}

function Modal(props){
  return(
    <>
      <div className = "modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


export default App;
