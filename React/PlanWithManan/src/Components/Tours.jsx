import React from 'react'
import Card from './Card'

const Tours = ({tours,display}) => {
  return (
    <div>
      {tours.map((single)=>{
        return <Card {...single} display={display}/>
      })}
    </div>
  )
}

export default Tours
