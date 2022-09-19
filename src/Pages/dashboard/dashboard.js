import React from "react";
import "./dashboard.css";
import ViewsChart from "../../Components/Charts/views-chart";
import GoogleViewsChart from "../../Components/Charts/google-view-charts";


const dashboard = () => {

  return (
    <div>
      <div className="dashboard-content-block">
        <h2 className="section-title">
          <span className="views-title"></span>
          Views</h2>
        <div class="section-description">
            Showing the total number of visits to the Shoppable Gallery and Product Page Gallery.
          </div>
        <ViewsChart/>
      </div>

      {/* <h1>Google Views chart</h1>
      <GoogleViewsChart/> */}
    </div>
  
  );
};

export default dashboard;