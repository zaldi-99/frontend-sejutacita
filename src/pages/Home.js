import React, { Component } from "react";
import "../App.css";
import "../components/News.css";
import { Hero } from "../components";
import NewsItem from "../components/NewsItem";
import axios from "axios";
import ParamMapping from "../utils/ParamMapping";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.category);
    const categoryType = ParamMapping(this.props.match.params.category);
    axios
      .get(`data.json`)
      .then((res) => {
        console.log("response = ", res.data);
        const data =
          res.data.result.categories[0].templates[categoryType].sections[0]
            .articles;
        console.log("data : ", data);
        this.setState({ article: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    const categoryType = ParamMapping(this.props.match.params.category);
    axios
      .get(`data.json`)
      .then((res) => {
        console.log("response = ", res.data);
        const data =
          res.data.result.categories[0].templates[categoryType].sections[0]
            .articles;
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
      <div className="home">
        <div className="home-wrapper">
          {/* <Hero /> */}
          <div className="news-container">
            {/* <h2>Top</h2> */}
            {this.state.article.map((item) => (
              <>
                <h2>{item.name}</h2>
                <div className="news-wrapper">
                  <NewsItem
                    title={item.title}
                    path={{ pathname: item.url.url }}
                    target={"_blank"}
                    publisher={item.publisher}
                  />
                  {/* <div class="button">
                <button>Bookmark</button>
              </div> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
