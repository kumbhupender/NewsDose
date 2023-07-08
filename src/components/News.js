import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
 const [articles , setArticles]  = useState([]);
 const [loading , setLoading]  = useState(true);
 const [page , setPage]  = useState(1);
 const [totalResults , setTotalResults]  = useState(0);



  const capitalizeFirstLetter = (string) => {
   
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  


  const updateNews = async ()=> {

    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);
    
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    
    props.setProgress(100);

  }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - NewsDose`;
    updateNews();
  },[]);
 

  //fetch more data
  const fetchMoreData = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    
  }



  
    console.log("Render");
  
    return (
      <>
        <h1 className="text-center" style={{ margin: "50px 0px" }}>
          News Dose: Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
  
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row d-flex flex-wrap">
              {!loading &&
                articles.map((element) => (
                  <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                    {/* Here I slice the words in limit and add ... for read more */}
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      url={element.urlToImage}
                      newsId={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
