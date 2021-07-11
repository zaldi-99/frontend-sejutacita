import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Hero.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: [],
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
        this.setState({ thumbnail: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    SwiperCore.use([Pagination, Autoplay]);
    return (
      <div className="hero-container">
        <Swiper
          pagination={true}
          autoplay={{ delay: 5000 }}
          className="hero-swiper"
          navigation={true}
        >
          {this.state.thumbnail.map((item) => (
            <SwiperSlide key={item.id}>
              <img src="/assets/images/heros.jpg" alt="Hero Image" />
              <Link to={{ pathname: item.url.url }} target="_blank">
                <p className="text">{item.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
