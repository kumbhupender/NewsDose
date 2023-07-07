import React, { Component } from 'react'

export class NewsItem extends Component {

  
  render() {

    let {title , description, url, newsId , author ,date,source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>{source}
        </span>
          <img src={!url?"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F02%2F01%2F00%2F56%2Fnews-1172463_640.jpg&tbnid=STxjcAx2lFazbM&vet=12ahUKEwiR8aLpnvj_AhXm5zgGHaPpBBUQMygPegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnewspaper%2F&docid=qoXhR-N7BwSuvM&w=640&h=480&q=news%20img&ved=2ahUKEwiR8aLpnvj_AhXm5zgGHaPpBBUQMygPegUIARD9AQ":url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'>By {!author?"Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsId} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
