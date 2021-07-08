import React, { Component } from "react";
import "../App.css";
import NewsItem from "../components/NewsItem";
import axios from "axios";
import '../components/News.css'

export default class Showbiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showbiz: [],
    };
  }

  componentDidMount() {
    axios
      .get(`data.json`)
      .then((res) => {
        console.log("response = ", res.data);
        const data =
          res.data.result.categories[0].templates[9].sections[0].articles;
        console.log("data : ", data);
        this.setState({ showbiz: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="showbiz">
        <div className="news-container">
            <h2>Showbiz</h2>
            {this.state.showbiz.map((item) => (
              <>
                <div className="news-wrapper">
                  <NewsItem
                    title={item.title}
                    path={{ pathname: item.url.url }}
                    target={"_blank"}
                    publisherLink={{ pathname: item.publisherImageCdnHash }}
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
    );
  }
}
