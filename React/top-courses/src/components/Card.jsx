import React from 'react'
import {FcLike} from 'react-icons/fc'
import './Card.css'
const Card = ({course}) => {
  return (
    <div>
      <div className="img">
        <img src={course.image.url}alt=""/>
        </div>
        <div className="like">
          <FcLike/>
        </div>
        <div className="title">
          <p>{course.title}</p>
          <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card
