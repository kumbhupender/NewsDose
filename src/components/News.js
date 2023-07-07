import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //using constructor
  constructor(props) {
    super(props);

    console.log("Hello I am a constructor from news Comoponent");

    this.state = {
      articles: [],
      loading: true,
      page: 1,

    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsDose`;
  }

  // async updateNews() {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading: true});
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     this.setState({ articles: parseData.articles ,
  //       totalResults : parseData.totalResults,
  //       loading : false
  //     })

  // }
  //component didMount run after render mthod
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });

    // console.log("ParsedData",parseData);
    // this.updateNews();
  }

  //fetch more data
  fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({page : this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    });
  }


  render() {
    console.log("Render");
    return (
      <>
        <h1 className="text-center" style={{ margin: "50px 0px" }}>
          News Dose: Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        {/* importing the News component items 
          I want to 3 newsitem in one row
        */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >

        <div className="container">

        
        <div className="row">
          {/* using map on articles  and if loading is true then show data else hide*/}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  {/* Here i slice the words in limit and add ... for read more */}
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    url={element.urlToImage}
                    newsId={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
      </InfiniteScroll>


   
      </>
    );
  }
}

export default News;
