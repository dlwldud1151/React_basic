/*eslint-disable*/

import React, {useEffect, useState, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';
import {CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';

let Box = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;


function Detail(props){

    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);
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
              props.dispatch({type:'항목추가', payload:{
                id:찾은상품.id, name:찾은상품.title, quan:1
              }})
              history.push('/cart');
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick = {() => {
                history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false);누른탭변경(0)}}>0번째탭</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);누른탭변경(1)}}>1번째탭</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{스위치변경(false);누른탭변경(2)}}>2번째탭</Nav.Link>
          </Nav.Item>
        </Nav>     
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
            <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
          </CSSTransition>

      </div> 
    )
}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  });
  
  if(props.누른탭 === 0){
    return <div>0번째 내용입니다</div>
  } else if (props.누른탭 === 1){
    return <div>1번째 내용입니다</div>
  } else if (props.누른탭 === 2){
    return <div>2번째 내용입니다</div>
  }
}


function Stock(props){
  return(
    <p>재고 : {props.재고[props.id]}</p>
  )
}

function 함수명(state){
  return{
      state : state.reducer,
      alert : state.reducer2
  }
}

export default connect(함수명)(Detail);