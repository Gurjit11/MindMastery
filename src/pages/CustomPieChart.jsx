import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF5F5F'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 100 },
];

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Legend />
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
