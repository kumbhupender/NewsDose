import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : 'general'
  }

  
    static propsTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
    }
  //using constructor
  constructor(){
    super();

    console.log("Hello I am a constructor from news Comoponent");

    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }

  //component didMount run after render mthod
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles , 
      totalResults : parseData.totalResults,
      loading : false
    })

    console.log("ParsedData",parseData);
  }

  handlePreviousClick = async() => {
    console.log("Previous");
    if(this.state.page - 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page : this.state.page - 1 ,
        articles: parseData.articles,
        loading : false
       })
    }

    
  }

   handleNextClick = async() => {
    console.log("Next");

    //using math.ciel method which return higher integer for finding page sieze params
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d94f9a74353407b97d7401ff4287540&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page : this.state.page +1 ,
        articles: parseData.articles,
        loading : false
       })
    }

  }

  render() {
    console.log("Render");
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Dose: Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {/* importing the News component items 
          I want to 3 newsitem in one row
        */}
        <div className="row">

        {/* using map on articles  and if loading is true then show data else hide*/}
          {!this.state.loading && this.state.articles.map((element) => {
            
            return <div className="col-md-4" key={element.url}>
                    {/* Here i slice the words in limit and add ... for read more */}
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} url={element.urlToImage} newsId={element.url}/>
                  </div>
          })}

        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1}  type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
        
      </div>
    )
  }
}

export default News;
