/*eslint-disable*/

import React, {useState, useContext, lazy, Suspense} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
let Detail = lazy(()=>{return import('./Detail.js')});
import Cart from './Cart.js';
import axios from 'axios';
import {Link, Route, Switch, useHistory} from 'react-router-dom';

export let 재고context = React.createContext();


function App() {

  let [shoes,shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12,9,14,3]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shopping mall</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to = "/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route exact path = "/">
          <div className = "main">
            <div className = "event">
              <h1>20% Season Off</h1>
            </div>
          </div>
          <div className="container">

            <재고context.Provider value={재고}>

            <div className="row">
              {
                shoes.map((a, i) =>{
                  return(
                    <Card shoes = {shoes[i]} i ={i} key={i}/>
                  ) 
                })
              }
            </div>

            </재고context.Provider>

            <button className="btn btn-primary" onClick={()=>{
              axios.get('http://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                shoes변경([...shoes, ...result.data]);
              })
              .catch(()=>{
                console.log('실패') 
              })   
              }}>더보기
            </button>

          </div>
        </Route>

        <Route path = "/detail/:id">
          <재고context.Provider value={재고}>
            <Suspense fallback={<div>로딩중이에요</div>}>
              <Detail shoes= {shoes} 재고={재고} 재고변경={재고변경}/>
            </Suspense>
          </재고context.Provider>
        </Route>
        
        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보여주는 페이지</div>
        </Route>

      </Switch>
      
    </div>
  );
}




function Card(props){

  let 재고 = useContext(재고context);
  let history = useHistory();

  return(
    <div className = "col-md-4" onClick={()=>{
      history.push('/detail/' + props.shoes.id)
    }}>
            <img src={'http://codingapple1.github.io/shop/shoes' + (props.i + 1)+ '.jpg'} width = "100%" alt = "" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content} & {props.shoes.price}</p>
            <ContextEx i={props.i}></ContextEx>
    </div>
  )
}

function ContextEx(props){
  let 재고 = useContext(재고context);
  return(
    <p>재고: {재고[props.i]}</p>
  )
}

export default App;
