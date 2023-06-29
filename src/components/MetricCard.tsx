import React from 'react'

import SmallCards from './SmallCards'
import data from "../data/data"

const MetricCard = () => {
    
  return (
    <div className='flex'>
        {data.map((card, index)=> (
            <SmallCards {...card} key={index}/>
        ))}
    </div>
  )
}

export default MetricCard