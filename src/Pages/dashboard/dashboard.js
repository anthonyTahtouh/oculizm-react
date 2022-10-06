//Basic imports 
import React from "react";
import "./dashboard.css";

//Components import
import Chart from "../../Components/Charts/chart";
import ReactCountryFlag from "react-country-flag";

// viewsChart data 
const viewsChartdata = [
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

// Interactions data 
const interactionsChartdata = [
  {
    date: '19 Aug',
    interactions: 200,
  },
  {
    date: '20 Aug',
    interactions: 50,
  },
  {
    date: '21 Aug',
    interactions: 29,
  },
  {
    date: '22 Aug',
    interactions: 272,
  },
  {
    date: '23 Aug',
    interactions: 276,
  },
  {
    date: '24 Aug',
    interactions: 55,
  },
  {
    date: '25 Aug',
    interactions: 62,
  },
];

// Orders data 
const ordersChartdata = [
  {
    date: '19 Aug',
    orders: 20,
  },
  {
    date: '20 Aug',
    orders: 10,
  },
  {
    date: '21 Aug',
    orders: 9,
  },
  {
    date: '22 Aug',
    orders: 2,
  },
  {
    date: '23 Aug',
    orders: 6,
  },
  {
    date: '24 Aug',
    orders: 5,
  },
  {
    date: '25 Aug',
    orders: 6,
  },
  {
    date: '26 Aug',
    orders: 15,
  },
  {
    date: '27 Aug',
    orders: 18,
  },
  {
    date: '28 Aug',
    orders: 2,
  },
  {
    date: '29 Aug',
    orders: 21,
  },
  {
    date: '30 Aug',
    orders: 25,
  },
  {
    date: '31 Aug',
    orders: 16,
  },
  {
    date: '01 Sep',
    orders: 6,
  },
  {
    date: '02 Sep',
    orders: 8,
  },
  {
    date: '03 Sep',
    orders: 9,
  },
  {
    date: '04 Sep',
    orders: 11,
  },
  {
    date: '05 Sep',
    orders: 15,
  },
  {
    date: '06 Sep',
    orders: 18,
  },
  {
    date: '07 Sep',
    orders: 11,
  },
  {
    date: '08 Sep',
    orders: 14,
  },
  {
    date: '09 Sep',
    orders: 16,
  },
  {
    date: '10 Sep',
    orders: 2,
  },
  {
    date: '11 Sep',
    orders: 8,
  },
  {
    date: '12 Sep',
    orders: 19,
  },
  {
    date: '13 Sep',
    orders: 14,
  },
  {
    date: '14 Sep',
    orders: 10,
  },
  {
    date: '15 Sep',
    orders: 11,
  },
  {
    date: '16 Sep',
    orders: 12,
  },
];

// Revenue data 
const revenueChartdata = [
  {
    date: '19 Aug',
    GBP: 200,
  },
  {
    date: '20 Aug',
    GBP: 50,
  },
  {
    date: '21 Aug',
    GBP: 29,
  },
  {
    date: '22 Aug',
    GBP: 272,
  },
  {
    date: '23 Aug',
    GBP: 276,
  },
  {
    date: '24 Aug',
    GBP: 55,
  },
  {
    date: '25 Aug',
    GBP: 62,
  },
];

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
            <div className="dashboard-data-content">
              <span>facebook</span>
              <span className="social-media-circle "></span>
            </div>
            <div className="dashboard-data-content">
              <span>instagram</span>
              <span className="social-media-circle active"></span>
            </div>
            <div className="dashboard-data-content">
              <span>twitter</span>
              <span className="social-media-circle"></span>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Posts</h2>
            <div className="dashboard-data-content ">
              <span>Published</span>
              <span>244</span>
            </div>
            <div className="dashboard-data-content ">
              <span>Draft</span>
              <span>1</span>
            </div>
            <div className="dashboard-data-content mt-15 mb-0">
              <span className="font-weight-bold">Total</span>
              <span className="font-weight-bold">245</span>
            </div>
            <a className="dashboard-link" href="/">View latest posts</a>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Galleries</h2>
            <div className="dashboard-data-content">
              <span>All</span>
              <span>245</span>
            </div>

            <div className="dashboard-data-content">
              <span>Kitchen &amp; Dining Room</span>
              <span>20</span>
            </div>

            <div className="dashboard-data-content">
              <span>Shelves</span>
              <span>61</span>
            </div>

            <div className="dashboard-data-content">
              <span>Mantels</span>
              <span>118</span>
            </div>

            <div className="dashboard-data-content">
              <span>Living Room</span>
              <span>14</span>
            </div>

            <div className="dashboard-data-content">
              <span>Bedroom</span>
              <span>11</span>
            </div>

            <div className="dashboard-data-content">
              <span>Accessories</span>
              <span>21</span>
            </div><div className="dashboard-data-content">
              <span>Outdoor</span>
              <span>4</span>
            </div>
            <a className="dashboard-link" href="/">View all galleries</a>
          </div>
        </div>
        <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
          <div className="dashboard-info-sections">
            <h2 className="section-title">Products</h2>
            <div className="dashboard-data-content">
              <span><ReactCountryFlag countryCode="gb" /></span>
              <span>2,737</span>
            </div>
            <div className="dashboard-data-content">
              <span><ReactCountryFlag countryCode="us" /></span>
              <span>737</span>
            </div>
            <div className="dashboard-data-content mt-15 mb-0">
              <span className="font-weight-bold">Total</span>
              <span className="font-weight-bold">3,474</span>
            </div>
            <a className="dashboard-link" href="/">View products</a>
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
            <Chart data={viewsChartdata} chartName="views" chartType="lineChart" />
          </div>

          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="interactions-title"></span>
              Interactions</h2>
            <div className="section-description">
              Showing the number of times the lightbox has been opened, and products clicked from within the lightbox.
            </div>
            <Chart data={interactionsChartdata} chartName="interactions" chartType="lineChart" />
          </div>

          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="orders-title"></span>
              Orders</h2>
            <div className="section-description">
              Showing the number of orders where the journey was influenced by user generated content (UGC).
            </div>
            <Chart data={ordersChartdata} chartName="orders" chartType="barChart" />
          </div>

          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="revenue-title"></span>
              Revenue</h2>
            <div className="section-description">
              Showing all orders which featured a click on a product tagged with Oculizm.
            </div>
            <Chart data={revenueChartdata} chartName="GBP" chartType="barChart" />
          </div>

        </div>
      </div>
    </div>

  );
};

export default dashboard;