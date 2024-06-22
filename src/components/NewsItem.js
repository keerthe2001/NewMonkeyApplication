import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={this.props.img} className="card-img-top" alt="..." style={{width:'18rem',height:'10rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title.slice(0,45)}...</h5>
                            <p className="card-text">{this.props.desc.slice(0,100)}...</p>
                            <a href={this.props.newsUrl} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
