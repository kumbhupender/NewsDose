import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
      {
          "source": {
              "id": "news-com-au",
              "name": "News.com.au"
          },
          "author": "Jai Bednall",
          "title": "KP lays into England players in new twist",
          "description": "Kevin Pietersen has unloaded on the England cricket team in the wake of the Second Test and the Jonny Bairstow controversy.",
          "url": "https://www.news.com.au/sport/cricket/kevin-pietersen-squares-off-with-england-players-in-new-ashes-twist/news-story/39b3de9fba1278b268a2d9a57d9c9c02",
          "urlToImage": "https://content.api.news/v3/images/bin/a58acaf0cd1435985f76a92887bdb82f",
          "publishedAt": "2023-07-04T16:58:00Z",
          "content": "Kevin Pietersen has unloaded on the England cricket team in the wake of the Second Test and the Jonny Bairstow controversy.\r\nPietersen hasn’t been shy about offering his opinion during the Ashes seri… [+3171 chars]"
      },
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      },
      {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  //using constructor
  constructor(){
    super();

    console.log("Hello I am a constructor from news Comoponent");

    this.state = {
      articles : this.articles,
      loading : false
    }
  }



  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        {/* importing the News component items 
          I want to 3 newsitem in one row
        */}
        
        
        <div className="row">

        {/* using map on articles */}
          {this.state.articles.map((element) => {
            console.log(element);
            return <div className="col-md-4" key={element.url}>
                    {/* Here i slice the words in limit and add ... for read more */}
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} url={element.urlToImage} newsId={element.url}/>
                  </div>
          })}

        </div>
        
      </div>
    )
  }
}

export default News;
