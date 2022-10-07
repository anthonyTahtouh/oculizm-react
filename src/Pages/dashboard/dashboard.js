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
    GBP: 100,
  },
  {
    date: '21 Aug',
    GBP: 900,
  },
  {
    date: '22 Aug',
    GBP: 250,
  },
  {
    date: '23 Aug',
    GBP: 600,
  },
  {
    date: '24 Aug',
    GBP: 500,
  },
  {
    date: '25 Aug',
    GBP: 620,
  },
  {
    date: '26 Aug',
    GBP: 150,
  },
  {
    date: '27 Aug',
    GBP: 180,
  },
  {
    date: '28 Aug',
    GBP: 280,
  },
  {
    date: '29 Aug',
    GBP: 210,
  },
  {
    date: '30 Aug',
    GBP: 259,
  },
  {
    date: '31 Aug',
    GBP: 167,
  },
  {
    date: '01 Sep',
    GBP: 615,
  },
  {
    date: '02 Sep',
    GBP: 800,
  },
  {
    date: '03 Sep',
    GBP: 901,
  },
  {
    date: '04 Sep',
    GBP: 111,
  },
  {
    date: '05 Sep',
    GBP: 158,
  },
  {
    date: '06 Sep',
    GBP: 182,
  },
  {
    date: '07 Sep',
    GBP: 110,
  },
  {
    date: '08 Sep',
    GBP: 140,
  },
  {
    date: '09 Sep',
    GBP: 156,
  },
  {
    date: '10 Sep',
    GBP: 522,
  },
  {
    date: '11 Sep',
    GBP: 801,
  },
  {
    date: '12 Sep',
    GBP: 319,
  },
  {
    date: '13 Sep',
    GBP: 414,
  },
  {
    date: '14 Sep',
    GBP: 510,
  },
  {
    date: '15 Sep',
    GBP: 311,
  },
  {
    date: '16 Sep',
    GBP: 212,
  },
];

// Top Products data 
const topProductsdata = [
  {
    src: 'https://cdn.shopify.com/s/files/1/0585/2050/2462/products/PineSamplePack.jpg?v=1645522221',
    caption: 'Pine Furniture, Shelves & Mantels Samples - Sample Pack - All Pine Variants',
    ordersNumber: 114,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0585/2050/2462/products/OakSampleBox.jpg?v=1648543271',
    caption: 'Oak Shelves & Mantels - Wax Finish Samples - Oak Pack - All Oak Variants',
    ordersNumber: 84,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0585/2050/2462/products/OakSampleBox.jpg?v=1648543271',
    caption: 'Oak Shelves & Mantels - Wax Finish Samples - Natural Oak',
    ordersNumber: 75,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0585/2050/2462/products/PineSamplePack.jpg?v=1645522221',
    caption: 'Pine - Rustic and Smooth Wax Finish Samples - Medium Oak',
    ordersNumber: 60,
  },
];

// Top Posts data 
const topPostsdata = [
  {
    src: 'https://app.oculizm.com/wp-content/uploads/2022/07/71950-271299906_442127400908194_4430778143312418858_n-819x1024.jpg',
    interactionsNumber: 505,
  },
  {
    src: 'https://app.oculizm.com/wp-content/uploads/2022/08/71950-295904681_731277081508151_6155193503685102687_n-819x1024.jpg',
    interactionsNumber: 457,
  },
  {
    src: 'https://app.oculizm.com/wp-content/uploads/2022/06/71950-277986528_163335436052723_3065899789541569680_n-819x1024.webp',
    interactionsNumber: 441,
  },
  {
    src: 'https://app.oculizm.com/wp-content/uploads/2022/07/71950-274549977_275194828060748_5754137522733103766_n-819x1024.jpg',
    interactionsNumber: 440,
  },
];

// Top Creators data 
const topCreatorsdata = [
  {
    src: 'https://scontent-fra5-2.xx.fbcdn.net/v/t51.2885-15/280506364_727147425136938_5768818910996507535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c713&_nc_ohc=PJOKFW6NQTQAX-XIvwH&_nc_ht=scontent-fra5-2.xx&edm=AL-3X8kEAAAA&oh=00_AT88qMPzSgPp_ULkFsAbNTlB4TsPt9PfeNbRqhw0fRSfsw&oe=63431B33',
    username: 'our_wandsworth_home',
    postsNumber: 7,
  },
  {
    src: 'https://scontent-fra5-2.xx.fbcdn.net/v/t51.2885-15/117724828_175109090804414_6497226056344732760_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c713&_nc_ohc=Bp6THzKgTdIAX_IePO7&_nc_ht=scontent-fra5-2.xx&edm=AL-3X8kEAAAA&oh=00_AT_LNa-9whgaDSygbPKi38pWFHTeCESG_7WwueUgcPrAew&oe=6343674B',
    username: 'thedoctorscottage',
    postsNumber: 7,
  },
  {
    src: 'https://scontent-fra5-2.xx.fbcdn.net/v/t51.2885-15/271516719_724322918533809_6996943226430624394_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c713&_nc_ohc=RmswNU6QY2wAX84KhKL&_nc_ht=scontent-fra5-2.xx&edm=AL-3X8kEAAAA&oh=00_AT-ZzQe3c3hgN4V_Z4UvRXMy1EkwhOXM2AT3OOMiA7yKHA&oe=634440B9',
    username: 'athomewithharlow',
    postsNumber: 6,
  },
  {
    src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t51.2885-15/297235308_148332434486114_7847064112985141909_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c713&_nc_ohc=DUfG4Yok1IkAX9ywa2l&_nc_ht=scontent-lhr8-1.xx&edm=AL-3X8kEAAAA&oh=00_AT8MKXTk20FX4VKgT2Tyd_Ai5dmhUdcB4apw5VunnQxLXA&oe=634260ED',
    username: 'emmaandthegirls_',
    postsNumber: 5,
  },
];

// Top Hashtag data 
const topHashtagdata = [
  {
    hashtag: 'myfcf',
    hashtagOccNumber: 11,
  },
  {
    hashtag: 'fcf',
    hashtagOccNumber: 7,
  },
  {
    hashtag: 'Funky Chunky Furniture',
    hashtagOccNumber: 17,
  },
  {
    hashtag: 'Furniture',
    hashtagOccNumber: 27,
  },
  {
    hashtag: 'myfcf',
    hashtagOccNumber: 11,
  },
  {
    hashtag: 'fcf',
    hashtagOccNumber: 7,
  },
  {
    hashtag: 'Funky Chunky Furniture',
    hashtagOccNumber: 17,
  },
  {
    hashtag: 'Furniture',
    hashtagOccNumber: 27,
  },
  {
    hashtag: 'myfcf',
    hashtagOccNumber: 11,
  },
  {
    hashtag: 'fcf',
    hashtagOccNumber: 7,
  },
  {
    hashtag: 'Funky Chunky Furniture',
    hashtagOccNumber: 17,
  },
  {
    hashtag: 'Furniture',
    hashtagOccNumber: 27,
  },
  {
    hashtag: 'myfcf',
    hashtagOccNumber: 11,
  },
  {
    hashtag: 'fcf',
    hashtagOccNumber: 7,
  },
  {
    hashtag: 'Funky Chunky Furniture',
    hashtagOccNumber: 17,
  },
  {
    hashtag: 'Furniture',
    hashtagOccNumber: 27,
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

      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="top-products-title"></span>
              Top Products</h2>
            <div className="section-description">
              Showing the most shopped products in your shoppable gallery.
            </div>
            <div className="row display-flex">
              {topProductsdata.map(topProductsdata => (
                <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
                  <div className="post">
                    <a href="/">
                      <div className="post-image">
                        <img
                          src={topProductsdata.src}
                          className='img-thumbnail'
                          alt='...'
                        />
                        <div className="absolute-text-container">
                          <h3 className="big-title">{topProductsdata.ordersNumber}</h3>
                          <h3 className="small-title">Orders</h3>
                        </div>
                      </div>
                      <p className="top-products">
                        {topProductsdata.caption}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="top-posts-title"></span>
              Top Posts</h2>
            <div className="section-description">
              Showing the most popular posts from your shoppable gallery.
            </div>
            <div className="row display-flex">
              {topPostsdata.map(topPostsdata => (
                <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
                  <div className="post">
                    <a href="/">
                      <div className="post-image">
                        <img
                          src={topPostsdata.src}
                          className='img-thumbnail'
                          alt='...'
                        />
                        <div className="absolute-text-container">
                          <h3 className="big-title">{topPostsdata.interactionsNumber}</h3>
                          <h3 className="small-title">Interactions</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="top-creators-title"></span>
              Top Content Creators</h2>
            <div className="section-description">
              Showing the most influential content creators in your shoppable gallery.
            </div>
            <div className="row display-flex">
              {topCreatorsdata.map(topCreatorsdata => (
                <div className="col-xxl-3 col-md-6 col-sm-12 col-with-bottom-pad">
                  <div className="post">
                    <a href="/">
                      <div className="post-image">
                        <img
                          src={topCreatorsdata.src}
                          className='rounded-circle'
                          alt='...'
                        />
                        <div className="absolute-text-container">
                          <h3 className="big-title">{topCreatorsdata.postsNumber}</h3>
                          <h3 className="small-title">Posts</h3>
                        </div>
                      </div>
                      <p className="creator-username">
                        @{topCreatorsdata.username}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12">
          <div className="dashboard-content-block">
            <h2 className="section-title">
              <span className="top-hashtags-title"></span>
              Top Hashtags</h2>
            <div className="section-description">
              Showing the most popular hashtags used in your posts.
            </div>
            {topHashtagdata.map(topHashtagdata => (
              <div className="hashtag">
                <a target="_blank" href="/"> #{topHashtagdata.hashtag} ({topHashtagdata.hashtagOccNumber})</a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
};

export default dashboard;