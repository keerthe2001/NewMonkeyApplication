import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles =  [
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Ankit Gohel",
              "title": "Stocks to buy or sell: Ashoka Buildcon to Mahindra Holidays - Sumeet Bagadia recommends five breakout stocks today | Stock Market News - Mint",
              "description": "Stocks to buy or sell: Sumeet Bagadia recommended buying these five breakout stocks today — Ashoka Buildcon, NOCIL, Mahindra Holidays & Resorts India, Quick Heal Technologies and Kaveri Seed Company.",
              "url": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-or-sell-ashoka-buildcon-to-mahindra-holidays-sumeet-bagadia-recommends-five-breakout-stocks-today-11718939257348.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/21/1600x900/Buy_or_sell_stocks_Sumeet_Bagadia_1681456126399_1718939714736.jpg",
              "publishedAt": "2024-06-21T03:16:35Z",
              "content": "The Indian stock market is trading in a range with an upside bias and the benchmark Nifty 50 is seen consolidating near the 23,550 zone. For the last five consecutive days, Nifty has been trading in … [+2438 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TNN",
              "title": "Sebi confirms ban on JM Fin over managing debt issues - The Times of India",
              "description": "India News: Sebi confirms interim directions against JM Financial for irregularities in NCD public issue, prohibiting the lead manager role until March 31, 2025.",
              "url": "https://timesofindia.indiatimes.com/india/sebi-confirms-ban-on-jm-fin-over-managing-debt-issues/articleshow/111149901.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-111149942,width-1070,height-580,imgsize-1201340,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2024-06-20T22:41:00Z",
              "content": "10 beautiful fishes to keep in home aquariums for beginners"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TNN",
              "title": "Stop mindless pursuit of profit: RBI governor Shaktikanta Das to banks - The Times of India",
              "description": "India Business News: RBI Governor Shaktikanta Das emphasizes the importance of banks focusing on managing risks to keep the financial system resilient during an event orga",
              "url": "https://timesofindia.indiatimes.com/business/india-business/stop-mindless-pursuit-of-profit-rbi-governor-shaktikanta-das-to-banks/articleshow/111148484.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-111148529,width-1070,height-580,imgsize-539299,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2024-06-20T20:58:00Z",
              "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
            },
        ]
        constructor(){
            super()
            this.state = {
                articles:this.articles
            }
        }
        async componentDidMount(){
            console.log("Hi Iam CDM")
            let myAPI = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=d643dd5d9ee740328382c4fc31dd842f")
            let response = await myAPI.json()
            this.setState({
                articles: response.articles
            })
        }
  render() {
    return (
      <div className='container'>
        <div  className='text-center display-5 m-3 '>NewsMonkey - Top HeadLines</div>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return  <div className='col-md-4' key={element.url}>
            <NewsItem newsUrl={element.url} title={element.title} desc={element.description?element.description:"Chumma description"} img={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2024-06/2b1licu_pat-cummins-hattrick_625x300_21_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675"}/>
             </div>
            })}
           

        </div>
      </div>
    )
  }
}
