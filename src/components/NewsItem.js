import React, { Component } from 'react'

export class NewsItem extends Component {

  
  render() {

    let {title , description, url, newsId} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsId} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
