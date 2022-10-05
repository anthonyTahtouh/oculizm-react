//Basic imports 
import React from "react";
import "./dashboard.css";

//Components import
import ViewsChart from "../../Components/Charts/views-chart";
import ReactCountryFlag from "react-country-flag";


const dashboard = () => {

  return (
    <div>
      <div className="row">
        <div className="col-xxl-12">
          <h1 className="page-title">
            Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">Next Steps</h2>
            <p className="dashboard-content-text">You're doing great. Keep curating!</p>
          </div>
        </div>
      </div>
      <div className="row display-flex">
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Social Networks</h2>
            <div class="dashboard-data-content">
              <span>facebook</span>
              <span class="social-media-circle "></span>
            </div>
            <div class="dashboard-data-content">
              <span>instagram</span>
              <span class="social-media-circle active"></span>
            </div>
            <div class="dashboard-data-content">
              <span>twitter</span>
              <span class="social-media-circle"></span>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Posts</h2>
            <div class="dashboard-data-content ">
              <span>Published</span>
              <span>244</span>
            </div>
            <div class="dashboard-data-content ">
              <span>Draft</span>
              <span>1</span>
            </div>
            <div class="dashboard-data-content mt-15 mb-0">
              <span className="font-weight-bold">Total</span>
              <span className="font-weight-bold">245</span>
            </div>
            <a class="dashboard-link" href="/">View latest posts</a>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Galleries</h2>
            <div class="dashboard-data-content">
              <span>All</span>
              <span>245</span>
            </div>

            <div class="dashboard-data-content">
              <span>Kitchen &amp; Dining Room</span>
              <span>20</span>
            </div>

            <div class="dashboard-data-content">
              <span>Shelves</span>
              <span>61</span>
            </div>

            <div class="dashboard-data-content">
              <span>Mantels</span>
              <span>118</span>
            </div>

            <div class="dashboard-data-content">
              <span>Living Room</span>
              <span>14</span>
            </div>

            <div class="dashboard-data-content">
              <span>Bedroom</span>
              <span>11</span>
            </div>

            <div class="dashboard-data-content">
              <span>Accessories</span>
              <span>21</span>
            </div><div class="dashboard-data-content">
              <span>Outdoor</span>
              <span>4</span>
            </div>
            <a class="dashboard-link" href="/">View all galleries</a>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Products</h2>
            <div class="dashboard-data-content">
              <span><ReactCountryFlag countryCode="gb" /></span>
              <span>2,737</span>
            </div>
            <div class="dashboard-data-content">
              <span><ReactCountryFlag countryCode="us" /></span>
              <span>737</span>
            </div>
            <div class="dashboard-data-content mt-15 mb-0">
              <span className="font-weight-bold">Total</span>
              <span className="font-weight-bold">3,474</span>
            </div>
            <a class="dashboard-link" href="/">View products</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="views-title"></span>
              Views</h2>
            <div className="section-description">
              Showing the total number of visits to the Shoppable Gallery and Product Page Gallery.
            </div>
            <ViewsChart />
          </div>
        </div>
      </div>
    </div>

  );
};

export default dashboard;