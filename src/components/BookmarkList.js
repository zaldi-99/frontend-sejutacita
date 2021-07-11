import React from "react";

function BookmarkList(props) {
  return (
    <>
      <div className="news-card">
        <div className="news-image">
          <img src="/assets/images/sejutacita-logo.png" alt="logo" />
        </div>
        <div className="news-title">
          <p className="news-item-links">{props.title}</p>
          <p className="publisher">{props.publisher}</p>
        </div>
      </div>
    </>
  );
}

export default BookmarkList;
