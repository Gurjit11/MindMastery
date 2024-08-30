import React from 'react'
import CustomBarGraph from './CustomBarGraph'
import CustomPieChart from './CustomPieChart'
import Calender from './Calender'
import Progress from './Progress'
const Stats = () => {
  return (
    <>
    <Progress/>
    <div className='flex'>
    
        <CustomBarGraph/>
        <CustomPieChart/>

    </div>
    <Calender/>
    </>
  )
}

export default Stats