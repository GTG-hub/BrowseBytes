import React, { useState, useEffect } from 'react';
import Navbar from './Navbar1';
const NewsComponent = () => {
  const [page, setPage] = useState(1);
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async (page) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4ca6d189fc5e410bb12237327e165b39&page=${page}&pageSize=50`;
      const response = await fetch(url);
      const data = await response.json();
      setNewsList(data.articles)
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  
fetchNews(page);
  

//   const showNews = () => {
//     setTimeout(() => {
//       setPage((prevPage) => prevPage + 1);
//     }, 300);
//   };

//   window.addEventListener('scroll', () => {
//     const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//     if (scrollTop + clientHeight >= scrollHeight) {
//       showNews();
//     }
//   });

  return (
    <>
      {/* Include your partial header component here */}
      {/* You can replace the div with your actual header component */}
      {/* <HeaderComponent /> */}
      <Navbar/>
      <div className="container">
        
        <div className="row my-3" id="content">
          {newsList.map((item, index) => (
            <div key={index} className="col-md-4 my-3">
              <div className="card">
                <img className="card-img-top" src={item.urlToImage || "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/shutterstock_1747643729-750x406_2-sixteen_nine.jpg?size=948:533"} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}...</p>
                  <p className="card-text"><small className="text-muted">By {item.author} on {new Date(item.publishedAt).toGMTString()}</small></p>
                  <a target="_blank" href={item.url} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Uncomment the following lines if you want to show a loading spinner */}
        {/* <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div> */}
        </div>
        </>
  );
};

export default NewsComponent;
