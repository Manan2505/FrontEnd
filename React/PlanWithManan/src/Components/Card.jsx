import React, { useState } from 'react'
const Card = ({id,image,info,price,name,display}) => {
    const [readmore,setReadmore]=useState(false);
function infoHandler(){
setReadmore(!readmore);
}
  return (
    <div>
      <div className='image'>
        <img src={image}/>
      </div>
      <div className='price'>
        <h4>{price}</h4>
      </div>
      <div className='name'>
        <h3>{name}</h3>
      </div>
      <div className='info'>
        <p>{readmore?`${info}`:`${info.substring(0,20)}...`} <a onClick={infoHandler}>{readmore?`show less`:`readmore`}</a></p>
   
      </div>
      <div className='button'>
        <button onClick={()=>{display(id)}}>Not Interested</button>
      </div>
    </div>
  )
}

export default Card
