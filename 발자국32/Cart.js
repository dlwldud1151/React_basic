import React from 'react';
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

        </div>
    )
}



export default Cart;