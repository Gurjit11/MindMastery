import React from 'react'
import Calender from '../components/Calender'
import CustomBarGraph from '../components/CustomBarGraph'
import CustomPieChart from '../components/CustomPieChart'

const Profile = () => {
  return (
    <div><CustomBarGraph/>
    <CustomPieChart/>
    <Calender/>
    </div>
  )
}

export default Profile