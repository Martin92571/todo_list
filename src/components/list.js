import React from 'react';
import listData from '../data/list'


export default porps =>{
  
    const data=listData.map((todo,index)=>{
       return( <li className="collection-item" key={todo.id}>{todo.title}: 
               </li>
       )
    })
    return(
      <ul className="collection">
      {data}
      </ul>
    )
}