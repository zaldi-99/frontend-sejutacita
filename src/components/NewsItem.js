import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function NewsItem(props) {
  const addToBookmarks = (newData) => {
    const currentData = [];
    currentData.push(newData);
    localStorage.setItem("bookmarks", JSON.stringify(currentData));
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
      timer: 2000,
    });
  };
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
          <p className="publisher">{props.publisher}</p>
          <button
            onClick={() =>
              addToBookmarks({ name: props.title, source: props.publisher })
            }
            className="bookmark-btn"
          >
            Bookmark
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
