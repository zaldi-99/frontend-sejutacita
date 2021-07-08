import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  return (
    <>
      <div className="news-card">
        <div className="news-image">
          <img src="/assets/images/sejutacita-logo.png" alt="logo" />
        </div>
        <div className="news-title">
          <Link
            to={props.path}
            target={props.target}
            className="news-item-links"
          >
            <p>{props.title}</p>
          </Link>
          <Link
            to={props.publisherLink}
            className="publisher"
            target={props.target}
          >
            <p>{props.publisher}</p>
          </Link>
          <Link to='/bookmark'>
            <p>add to bookmark</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
