//Basic imports 
import React from "react";
import "./dashboard.css";

//Components import
import ViewsChart from "../../Components/Charts/views-chart";


const dashboard = () => {

  return (
    <div>
      <div className="dashboard-content-block">
        <h2 className="section-title">
          <span className="views-title"></span>
          Views</h2>
        <div className="section-description">
            Showing the total number of visits to the Shoppable Gallery and Product Page Gallery.
          </div>
        <ViewsChart/>
      </div>
    </div>
  
  );
};

export default dashboard;