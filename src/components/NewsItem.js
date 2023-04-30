import React, { Component } from "react";

export default class NewsItem extends Component {
    
  render() {

    let { title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card shadow-lg" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://images.wsj.net/im-772535?width=700&size=1.6516129032258065&pixel_ratio=1.5":imageUrl} className="card-img-top" alt="..."   />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
