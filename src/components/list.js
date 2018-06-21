import React from 'react';



export default props =>{
  
    const data=props.data.map((todo,index)=>{
       return( <li className="collection-item center" key={index}>{todo.title}: 
               </li>
       )
    })
    return(
      <ul className="collection">
      {data}
      </ul>
    )
}