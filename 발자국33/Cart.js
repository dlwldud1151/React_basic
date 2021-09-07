import React, { useEffect, memo } from 'react';
import {Table, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props){

    let state = useSelector((state)=> state);
    let dispatch = useDispatch();

    return(
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        state.reducer.map((a,i)=> {
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={()=>{dispatch({type : '수량증가', payloadId: i})}}>+</button>
                                <button onClick={()=>{dispatch({type : '수량감소', payloadId: i})}}>-</button></td>
                            </tr>        
                            )
                        })
                    }   
                </tbody>
            </Table>
            {   
                state.reducer2 === true
                ?
                <Alert variant="info">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={()=>{dispatch({type:'창닫기'})}}>닫기</button>
                </Alert>
                : null
            }
            <Parent 이름="영연" 나이="24"></Parent>
        </div>
    )
}

function Parent(props){

    return(
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}

function Child1(props){
    useEffect(()=>{console.log('렌더링됨1')});
    return <div>Child1</div>
}

let Child2 = memo(function(){
    useEffect(()=>{console.log('렌더링됨2')});
    return <div>Child2</div>
});


export default Cart;