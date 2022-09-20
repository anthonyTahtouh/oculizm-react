//Basic imports 
import React from "react";
import "./views-chart.css";

//Packages import
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// viewsChart data 
const data = [
  {
    date: '19 Aug',
    views: 0,
  },
  {
    date: '20 Aug',
    views: 173,
  },
  {
    date: '21 Aug',
    views: 219,
  },
  {
    date: '22 Aug',
    views: 172,
  },
  {
    date: '23 Aug',
    views: 176,
  },
  {
    date: '24 Aug',
    views: 155,
  },
  {
    date: '25 Aug',
    views: 162,
  },
];

const viewsChart = () => {

 return (
  <div className="chart-section-container">
 <ResponsiveContainer width="100%" height="100%" >
  <LineChart
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
    fontSize={10}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="views" stroke="#82ca9d" strokeWidth={3} r={3} />
  </LineChart>
</ResponsiveContainer>
  </div>
 
 );
};

export default viewsChart;