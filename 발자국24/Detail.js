/*eslint-disable*/

import React, {useEffect, useState, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App.js';

let Box = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;


function Detail(props){

    let 재고 = useContext(재고context);

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
      // eslint-disable-next-line 
      return 상품.id == id
    });

    let history = useHistory();
    let [alert,alert변경] = useState(true);
    let [inputData,inputData변경] = useState('');

    useEffect(() => {
      let 타이머 = setTimeout(() => {alert변경(false)}, 2000);
      return ()=>{clearTimeout(타이머)}
    },[alert]);

    return(
      <div className="container">
        <Box>
          <Title className = "red">Detail</Title>
        </Box>

        {inputData}
        <input onChange={(e)=>{inputData변경(e.target.value)}} />

        {
          alert === true
          ? (<div className = "my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>)
          :null
        }

        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="오류"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <Stock 재고={props.재고} id={id}></Stock>
            <button className="btn btn-danger" onClick={()=>{
              var new재고 = [...props.재고];
              new재고[id] = new재고[id] - 1;
              props.재고변경(new재고);
              console.log(props.재고);
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick = {() => {
                history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>     
      </div> 
    )
}

function Stock(props){
  return(
    <p>재고 : {props.재고[props.id]}</p>
  )
}

export default Detail;