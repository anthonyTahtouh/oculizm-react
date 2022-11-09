//Basic imports 
import React from "react";
import "./chart.css";

//Packages import
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//using react prpos inside the component function to allow data transfer between child and parent components
const chart = ({ data, chartName, chartType }) => {

  return (
    <div className="chart-section-container">
      <ResponsiveContainer width="100%" height="100%" >
        {/* drawing charts depending on the chart type and the data coming from the parent component  */}
        {(() => {
          switch (chartType) {
            case 'lineChart':

              return (
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
                  <Line type="monotone" dataKey={chartName} stroke="#82ca9d" strokeWidth={3} r={3} />
                </LineChart>

              )

            case 'barChart':

              return (

                <BarChart
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
                  <Bar dataKey={chartName} fill="#82ca9d" />
                </BarChart>

              )

            default:

              return (

                <div></div>

              )

          }

        })()}

      </ResponsiveContainer>
    </div>

  );
};

export default chart;