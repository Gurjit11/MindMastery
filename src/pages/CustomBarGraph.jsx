import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell } from 'recharts';

const data = [
  { name: 'Category 1', value: 10, color: '#ff9800' },
  { name: 'Category 2', value: 20, color: '#03a9f4' },
  { name: 'Category 3', value: 30, color: '#4caf50' },
  { name: 'Category 4', value: 40, color: '#f44336' },
];


const CustomBarGraph = () => {
  return (
    <BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="value" fill="#8884d8">
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))
    }
  </Bar>
</BarChart>
  )
}

export default CustomBarGraph
