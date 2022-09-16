import React from "react";
import "./dashboard.css";
import ViewsChart from "../../Components/Charts/views-chart";
import GoogleViewsChart from "../../Components/Charts/google-view-charts";


const dashboard = () => {

  return (
    <div>
      <h1>Recharts Views chart</h1>
      <ViewsChart/>

      <h1>Google Views chart</h1>
      <GoogleViewsChart/>
    </div>
  
  );
};

export default dashboard;