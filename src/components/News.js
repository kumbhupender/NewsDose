import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        {/* importing the News component items 
          I want to 3 newsitem in one row
        */}
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="My Description" />
          </div>

          <div className="col-md-4">
            <NewsItem title="MyTitle" description="My Description" />
          </div>

          <div className="col-md-4">
            <NewsItem title="MyTitle" description="My Description" />
          </div>
        </div>
        
      </div>
    )
  }
}

export default News;
