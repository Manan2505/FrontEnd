import React from 'react'
import Card from './Card';
const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;

  function getAllCourses(){
    let allCourses=[];
    if(category==="All"){
    Object.values(courses).forEach((array)=>{
      array.forEach((value)=>{
        allCourses.push(value); 
      })
    })
    return allCourses;
  }else{
    return courses[category];
  }
  }
  return (
    <div>
      {
        getAllCourses().map((courses)=>(
           <Card key={courses.id} course={courses}/>
        ))
      }
     
    </div>
  )
}

export default Cards
