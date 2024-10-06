import React from 'react'

const Filter = ({data,setCategory}) => {
  let title=data.title;
  return (
    <div>
      {
        data.map((d)=>{
            return <button key={d.id} onClick={()=>setCategory(title)}>{d.title}</button>
        })
      }
    </div>
  )
}

export default Filter
