import React, { Component } from "react";
import "../App.css";
import NewsItem from "../components/NewsItem";
import axios from "axios";
import "../components/News.css";
import { Hero } from "../components";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
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
        this.setState({ top: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="showbiz">
        <Hero />
        <div className="news-container">
          {this.state.top.map((item) => (
            <>
              <div className="news-wrapper" key={item.id}>
                <NewsItem
                  title={item.title}
                  path={{ pathname: item.url.url }}
                  target={"_blank"}
                  publisherLink={{ pathname: item.publisherImageCdnHash }}
                  publisher={item.publisher}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
