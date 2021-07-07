import React, { Component } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import "./Category.css";
import { Link } from "react-router-dom";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    axios
      .get(`data.json`)
      .then((res) => {
        console.log("response = ", res.data);
        const data = res.data.result.categories;
        this.setState({ category: data });
      })
      .then(() => console.log(this.state))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    SwiperCore.use([Navigation]);
    return (
      <div className="category">
        <Swiper
          className="category-swiper"
          slidesPerView={10}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {this.state.category.map((item) => (
            <SwiperSlide className="swiper-item">
              <Link to={item.name}>
                <li className="nav-link" key={item.id}>
                  {item.name}
                </li>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
