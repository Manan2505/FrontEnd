import React from 'react'

const Filter = ({data}) => {
  return (
    <div>
      {
        data.map((d)=>{
            return <button key={d.id}>{d.title}</button>
        })
      }
    </div>
  )
}

export default Filter
