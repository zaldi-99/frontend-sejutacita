import React, { Component } from "react";
import "./News.css";
import NewsItem from "./NewsItem";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    axios
      .get(`data.json`)
      .then((res) => {
        console.log("response = ", res.data);
        const data =
          res.data.result.categories[0].templates[1].sections[0].articles;
        console.log("data : ", data);
        this.setState({ article: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="news-container">
        <h2>Top</h2>
        {this.state.article.map((item) => (
          <>
            <div className="news-wrapper">
              <NewsItem
                title={item.title}
                path={{ pathname: item.url.url }}
                target={"_blank"}
                publisher={item.publisher}
              />
            </div>
          </>
        ))}
      </div>
    );
  }
}
