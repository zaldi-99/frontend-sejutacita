import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  return (
    <>
      <Link to={props.path} target={props.target} className="news-item">
        <div className="news-image">image</div>
        <div className="news-title">
          <p>{props.title}</p>
          <p>{props.publisher}</p>
        </div>
      </Link>
    </>
  );
}

export default NewsItem;
