import React, { Component } from "react";
import "../App.css";
import "../components/News.css";
import { BookmarkList } from "../components";

export default class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    this.setState({ bookmarks: JSON.parse(localStorage.getItem("bookmarks")) });
  }

  render() {
    return (
      <div className="bookmarks">
        <div className="bookmarks-title">
          <h2>Bookmarks</h2>
        </div>
        {this.state.bookmarks.map((item) => (
          <div className="bookmarks-wrapper">
            <BookmarkList title={item.name} publisher={item.source} />
          </div>
        ))}
      </div>
    );
  }
}
